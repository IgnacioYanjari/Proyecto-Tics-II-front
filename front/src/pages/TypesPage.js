import React, { Component } from 'react';
import HeaderComponent from 'components/HeaderComponent';
import MaterialComponent from 'components/types/MaterialComponent';
import SupplyComponent from 'components/types/SupplyComponent';
import MachineComponent from 'components/types/MachineComponent';

class TypesPage extends Component {

  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="text-center mt-3 container">
              <MaterialComponent />
              <SupplyComponent />
              <MachineComponent />
        </div>
      </div>
    );
  }
}

export default TypesPage;
