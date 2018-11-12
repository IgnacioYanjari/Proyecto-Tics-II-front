import React, { Component } from 'react';
import HeaderComponent from 'components/HeaderComponent';
import MaterialComponent from 'components/types/MaterialComponent';
import SupplyComponent from 'components/types/SupplyComponent';
import MachimeComponent from 'components/types/MachineComponent';
import WorkComponent from 'components/types/WorkComponent';
import TenderComponent from 'components/types/TenderComponent';
import WorkForceComponent from 'components/types/WorkForceComponent';
import ClientComponent from 'components/types/ClientComponent';

class TypesPage extends Component {

  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="text-center mt-3 container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6">
              <MaterialComponent />
            </div>
            <div className="col-12 col-lg-6">
              <SupplyComponent />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <MachimeComponent />
            </div>
            <div className="col-12 col-lg-6">
              <WorkComponent />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <TenderComponent />
            </div>
            <div className="col-12 col-lg-6">
              <WorkForceComponent />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ClientComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TypesPage;
