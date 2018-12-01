import React, {Component} from "react";
import TypeService from "services/TypeService";
import CreateWorkForceType from "components/modals/create/WorkForceType";
import {Table, Input, InputNumber, Popconfirm, Form} from "antd";
import shortid from "shortid";

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({form, index, ...props}) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber />;
    }
    return <Input />;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {form => {
          const {getFieldDecorator} = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{margin: 0}}>
                  {getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: "Porfavor ingresa " + title + " !"
                      }
                    ],
                    initialValue: record[dataIndex]
                  })(this.getInput())}
                </FormItem>
              ) : (
                restProps.children
              )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data, editingKey: ""};
    this.columns = [
      {
        title: "Nombre",
        dataIndex: "name",
        editable: true,
        sorter: (a, b) => a.name.localeCompare(b.name),
        align: "center"
      },
      {
        title: "Sueldo aprox",
        dataIndex: "salary",
        editable: true,
        sorter: (a, b) => a.name.localeCompare(b.name),
        align: "center"
      },
      {
        title: "Operaciones",
        dataIndex: "operation",
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a
                        onClick={() => this.save(form, record.key)}
                        className="text-primary"
                        style={{marginRight: 8}}
                      >
                        Guardar
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="Estas seguro ? "
                    onConfirm={() => this.cancel(record.key)}
                  >
                    <a className="text-danger"> Cancelar </a>
                  </Popconfirm>
                </span>
              ) : (
                <a
                  className="text-primary"
                  onClick={() => this.edit(record.key)}
                >
                  {" "}
                  Editar{" "}
                </a>
              )}
            </div>
          );
        },
        align: "center"
      }
    ];
    this.typeService = new TypeService();
  }

  isEditing = record => {
    return record.key === this.state.editingKey;
  };

  formatPrice(price) {
    let aux = "";
    price = price.toString();
    for (let i = 0; i < price.length; i++) {
      if ((i + 1) % 3 === 0 && i !== price.length - 1)
        aux = "." + price[price.length - 1 - i] + aux;
      else aux = price[price.length - 1 - i] + aux;
    }
    return aux;
  }

  edit(key) {
    this.setState({editingKey: key});
  }

  save(form, key) {
    form.validateFields(async (error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        if (newData[index]["salary"]) {
          newData[index]["salary"] = newData[index]["salary"].replace(
            /\D/g,
            ""
          );
          newData[index]["salary"] = newData[index]["salary"]
            .split(".")
            .join("");
          newData[index]["salary"] = this.formatPrice(newData[index]["salary"]);
        }
        let {name, salary, id} = newData[index];
        salary = parseInt(salary.split(".").join(""), 10);
        salary = parseInt(salary, 10);
        console.log({name, salary});
        let res = await this.typeService.updateWorkForce({name, salary}, id);
        // Asigna el valor en la tabla
        if (res.status === "success")
          this.setState({data: newData, editingKey: ""});
      } else {
        newData.push(row);
        this.setState({data: newData, editingKey: ""});
      }
    });
  }

  cancel = () => {
    this.setState({editingKey: ""});
  };

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === "weight" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });

    return (
      <Table
        className="mt-3"
        components={components}
        bordered
        dataSource={this.state.data}
        columns={columns}
        rowClassName="editable-row text-center"
      />
    );
  }
}

class WorkForceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workForces: []
    };
    this.typeService = new TypeService();
    this.loadWorkForces = this.loadWorkForces.bind(this);
  }

  formatPrice(price) {
    let aux = "";
    price = price.toString();
    for (let i = 0; i < price.length; i++) {
      if ((i + 1) % 3 === 0 && i !== price.length - 1)
        aux = "." + price[price.length - 1 - i] + aux;
      else aux = price[price.length - 1 - i] + aux;
    }
    return aux;
  }

  loadWorkForces() {
    this.typeService.getWorkForces().then(res => {
      if (res.status === "success") {
        res.data.forEach(element => {
          element.key = shortid.generate();
          element.salary = this.formatPrice(element.salary);
        });
        this.setState({workForces: res.data});
      }
    });
  }

  componentDidMount() {
    this.loadWorkForces();
  }

  render() {
    const workForcesLen = this.state.workForces.length;
    return (
      <div className="table-responsive">
        {workForcesLen !== 0 ? (
          <div>
            <h4 className="text-center mt-3"> Tipos de Mano de obras </h4>
            <CreateWorkForceType refreshTable={this.loadWorkForces} />
            <EditableTable
              key={shortid.generate()}
              data={this.state.workForces}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default WorkForceComponent;
