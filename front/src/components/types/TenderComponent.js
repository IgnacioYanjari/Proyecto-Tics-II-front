import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import shortid from 'shortid';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
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
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: 'Porfavor ingresa ' + title +' !',
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
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
    this.state = { data: this.props.data, editingKey: '' };
    this.columns = [
      {
        title: 'Nombre',
        dataIndex: 'name',
        editable: true,
        sorter: (a, b) => a.name.localeCompare(b.name),
        align:'center',
      },{
        title: 'Operaciones',
        dataIndex: 'operation',
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
                        className = "text-primary"
                        style={{ marginRight: 8 }}
                      >
                        Guardar
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="Estas seguro ? "
                    onConfirm={() => this.cancel(record.key)}
                  >
                    <a className = "text-danger" > Cancelar </a>
                  </Popconfirm>
                </span>
              ) : (
                <a className="text-primary" onClick={() => this.edit(record.key)}> Editar </a>
              )}
            </div>
          );
        },
        align:'center',
      }
    ];
    this.typeService = new TypeService();
  }

  isEditing = (record) => {
    return record.key === this.state.editingKey;
  };

  edit(key) {
    this.setState({ editingKey: key });
  }

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        // let {name, id} = newData[index];
        // this.typeService.updateMachine({name}, id);
        // Asigna el valor en la tabla
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {

      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType:(col.dataIndex === 'weight') ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <Table
        className = "mt-3"
        components={components}
        bordered
        dataSource={this.state.data}
        columns={columns}
        rowClassName="editable-row text-center"
      />
    );
  }
}

class TenderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tenders : []
    };
    this.typeService = new TypeService();
    this.loadTenders = this.loadTenders.bind(this);
  }

  loadTenders() {
    this.typeService.getTenders()
      .then(res => {
        res.data.forEach(element => {
          element.key = shortid.generate();
        })
        this.setState({ tenders : res.data })
      });
  }

  componentDidMount() {
    this.loadTenders();
  }

  render() {
    const tendersLen = this.state.tenders.length;
    return (
      <div className="table-responsive">
        {
          (tendersLen !== 0) ?
          (
            <div>
              <h4 className="text-center mt-3"> Tipos de Licitaciones </h4>
              <EditableTable key={shortid.generate()} data={this.state.tenders}/>
            </div>
          ) : (
            <div>
            </div>
          )
        }

      </div>
    );
  }
}

export default TenderComponent;
