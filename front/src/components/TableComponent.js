import React, { Component } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import shortid from 'shortid';
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr key={shortid.generate()} {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends Component {
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
                      message: 'Porfavor Ingresar ' + title + '!',
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

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      editingKey: '',
      columns: [{
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
        }
      }],
    };
  }

  componentWillMount(){
    let aux = this.props.columns;
    this.setState((prevState, columns) => {
      columns : prevState.columns.unshift(...aux);
    }, () => console.log('UpdatedState', this.state.columns));
  }

  isEditing = (record) => {
    return record.key === this.state.editingKey;
  };

  edit(key) {
    this.setState({ editingKey: key });
  }

  formatPrice(price) {
    let aux = '';
    price = price.toString();
    for (let i = 0; i < price.length; i++) {
      if((i+1) % 3 === 0) aux = '.' + price[price.length - 1 - i] + aux;
      else aux = price[price.length -1 - i] + aux;
    }
    return aux;
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
        if( newData[index]['price'] ){
          newData[index]['price'] = newData[index]['price'].replace(/\D/g,'');
          newData[index]['price'] = newData[index]['price'].split('.').join('')
          newData[index]['price'] = this.formatPrice(newData[index]['price']);
        }
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

    const columns = this.state.columns.map((col) => {

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
        rowClassName="editable-row"
      />
    );
  }
}
export default TableComponent;
