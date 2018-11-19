import React, { Component } from 'react';
import ProductService from 'services/ProductService';
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
      },{
        title: 'Precio',
        dataIndex: 'price',
        editable: true,
        sorter: (a, b) => a.price - b.price,
      },{
        title: 'Peso',
        dataIndex: 'weight',
        sorter: (a,b) => a.weight - b.weight,
      },{
        title: 'Tipo de medida',
        dataIndex: 'weightType',
        sorter: (a,b) => a.weightType.localeCompare(b.weightType)
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
        }
      }
    ];
    this.productService = new ProductService();
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
        if( newData[index]['price'] ){
          newData[index]['price'] = newData[index]['price'].replace(/\D/g,'');
          newData[index]['price'] = newData[index]['price'].split('.').join('')
          newData[index]['price'] = this.formatPrice(newData[index]['price']);
        }
        let {name, price, id} = newData[index];
        price = parseInt(price.split('.').join(''), 10);
        this.productService.updateMachine({name, price}, id);
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
        key={shortid.generate()}
        className = "mt-3"
        rowKey={record => record.key}
        components={components}
        bordered
        dataSource={this.state.data}
        columns={columns}
        rowClassName="editable-row"
      />
    );
  }
}


class MachineComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      machines : []
    };
    this.productService = new ProductService();
  }

  formatPrice(price) {
    let aux = '';
    price = price.toString();
    for (let i = 0; i < price.length; i++) {
      if((i+1) % 3 === 0 && i !== price.length - 1)
        aux = '.' + price[price.length - 1 - i] + aux;
      else
        aux = price[price.length -1 - i] + aux;
    }
    return aux;
  }

  componentDidMount() {
    this.productService.getMachines()
      .then(res => {
        res.data.forEach(element => {
          element.key = shortid.generate();
          element.weight = (element.weight) ? element.weight : '';
          element.weightType = (element.weightType) ? element.weightType : '';
          element.price = this.formatPrice(element.price);
        })
        this.setState({ machines : res.data })
      });
  }

  render() {
    const machinesLen = this.state.machines.length;
    return (
      <div className="table-responsive">
        {
          (machinesLen !== 0) ?
          (
            <div>
              <h4 className="text-center"> Maquinaría </h4>
              <EditableTable key={shortid.generate()} data={this.state.machines}/>
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

export default MachineComponent;
