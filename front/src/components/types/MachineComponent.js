import React, { Component } from 'react';
import TypeService from 'services/TypeService';
import TableComponent from 'components/TableComponent';

const columns = [
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
    dataIndex: 'weight_type',
    sorter: (a,b) => a.weight_type.localeCompare(b.weight_type)
  }
];

class MachineComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      machines : []
    };
    this.typeService = new TypeService();
  }

  componentDidMount() {
    this.typeService.machines()
      .then(res => {
        res.data.forEach(element => {
          element.weight = (element.weight) ? element.weight : '';
          element.weight_type = (element.weight_type) ? element.weight_type : '';
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
              <TableComponent data={this.state.machines} columns={columns} />
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
