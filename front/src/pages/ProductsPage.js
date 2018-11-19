import React, { Component } from 'react';
import HeaderComponent from 'components/HeaderComponent';
import MaterialComponent from 'components/products/MaterialComponent';
import SupplyComponent from 'components/products/SupplyComponent';
import MachineComponent from 'components/products/MachineComponent';

class ProductsPage extends Component {

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

export default ProductsPage;
