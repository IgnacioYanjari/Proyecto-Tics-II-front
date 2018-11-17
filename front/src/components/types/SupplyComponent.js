import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import TableComponent from 'components/TableComponent';

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    editable: true,
    sorter: (a, b) => a.name.localeCompare(b.name),
  }, {
    title: 'Precio',
    dataIndex: 'price',
    editable: true,
    sorter: (a, b) => a.price - b.price,
  }, {
    title: 'Tipo',
    dataIndex: 'type',
    sorter: (a, b) => a.type.localeCompare(b.type),
  }, {
    title: 'Marca',
    dataIndex: 'brand',
    sorter: (a,b) => a.brand.localeCompare(b.brand),
  },
];


class SupplyComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      supplies : []
    };
    this.typeService = new TypeService();
  }

  componentDidMount() {
    this.typeService.supplies()
      .then(res => this.setState({ supplies : res.data }));
  }

  // renderSupplies() {
  //   const supplies = this.state.supplies;
  //   return supplies.map( supply => {
  //     return(
  //       <tr key={shortid.generate()}>
  //         <td> {supply.id} </td>
  //         <td> {supply.name} </td>
  //         <td> {supply.price} </td>
  //         <td> {supply.type} </td>
  //         <td> {supply.brand} </td>
  //       </tr>
  //     );
  //   });
  // }

  render() {
    const suppliesLen = this.state.supplies.length;
    return (
      <div className="table-responsive">
        {
          (suppliesLen !== 0) ?
          (
            <div>
              <h4 className="text-center"> Insumos </h4>
              <TableComponent data={this.state.supplies} columns={columns} />
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

export default SupplyComponent;
