import React, {Component} from "react";
import {Table, Input, InputNumber, Popconfirm, Form} from "antd";
import WorkerService from "services/WorkerService";
import CreateWorker from "components/modals/create/Worker";
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
        dataIndex: "firstName",
        editable: true,
        sorter: (a, b) => a.firstName.localeCompare(b.firstName),
        align: "center"
      },
      {
        title: "Apellido",
        dataIndex: "lastName",
        editable: true,
        sorter: (a, b) => a.lastName.localeCompare(b.lastName),
        align: "center"
      },
      {
        title: "rut",
        dataIndex: "rut",
        editable: true,
        sorter: (a, b) => a.rut.localeCompare(b.rut),
        align: "center"
      },
      {
        title: "Telefono",
        dataIndex: "phone",
        editable: true,
        sorter: (a, b) => a.phone.localeCompare(b.phone),
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
    this.workerService = new WorkerService();
  }

  formatRut(rut) {
    let aux = "";
    aux = "-" + rut[rut.length - 1];
    for (let i = 1; i < rut.length; i++) {
      if (i % 3 === 0 && i !== rut.length - 1)
        aux = "." + rut[rut.length - 1 - i] + aux;
      else aux = rut[rut.length - 1 - i] + aux;
    }
    return aux;
  }

  isEditing = record => {
    return record.key === this.state.editingKey;
  };

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
        if (newData[index]["rut"]) {
          newData[index]["rut"] = newData[index]["rut"].replace(/\D/g, "");
          newData[index]["rut"] = newData[index]["rut"].split(".").join("");
          newData[index]["rut"] = this.formatRut(newData[index]["rut"]);
        }
        let {firstName, lastName, rut, phone, id} = newData[index];
        rut = rut.split(".").join("");
        rut = rut.split("-").join("");
        if (phone === "") phone = null;
        let res = await this.workerService.update(
          {firstName, lastName, rut, phone},
          id
        );
        if (res.status === "success") {
          newData[index]["phone"] = res.data.phone;
          this.setState({data: newData, editingKey: ""});
        }
        // Asigna el valor en la tabla
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
        rowClassName="editable-row"
      />
    );
  }
}

class WorkerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: []
    };
    this.workerService = new WorkerService();
    this.loadWorkers = this.loadWorkers.bind(this);
  }

  formatRut(rut) {
    let aux = "";
    aux = "-" + rut[rut.length - 1];
    for (let i = 1; i < rut.length; i++) {
      if (i % 3 === 0 && i !== rut.length - 1)
        aux = "." + rut[rut.length - 1 - i] + aux;
      else aux = rut[rut.length - 1 - i] + aux;
    }
    return aux;
  }

  loadWorkers() {
    this.workerService.get().then(res => {
      if (res.status === "success") {
        res.data.forEach(element => {
          element.key = shortid.generate();
          element.rut = this.formatRut(element.rut);
          if (element.phone == null) element.phone = "";
        });
        this.setState({workers: res.data});
      }
    });
  }

  componentDidMount() {
    this.loadWorkers();
  }

  render() {
    const workersLen = this.state.workers.length;
    return (
      <div className="table-responsive">
        {workersLen !== 0 ? (
          <div>
            <h4 className="text-center mt-3"> Trabajadores </h4>
            <CreateWorker refreshTable={this.loadWorkers} />
            <EditableTable key={shortid.generate()} data={this.state.workers} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default WorkerComponent;
