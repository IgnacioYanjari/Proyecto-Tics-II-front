import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import TableComponent from 'components/TableComponent';

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    editable: true,
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    editable: true,
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    sorter: (a, b) => a.type.localeCompare(b.type),
  },{
    title: 'Marca',
    dataIndex: 'brand',
    sorter: (a,b) => a.brand.localeCompare(b.brand),
  },
];

class MaterialComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      materials : []
    };
    this.typeService = new TypeService();
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

  componentDidMount() {
    this.typeService.material()
      .then(res => {
        res.data.forEach(element =>{
          element.key = element.id
          element.price = this.formatPrice(element.price);
        });
        this.setState({ materials : res.data })
      });
  }

  render() {
    const materialsLen = this.state.materials.length;
    return (
      <div className="table-responsive">
        {
          (materialsLen !== 0) ?
          (
            <div>
              <h4 className="text-center"> Materiales </h4>
              <TableComponent data={this.state.materials} columns={columns} />
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

export default MaterialComponent;
