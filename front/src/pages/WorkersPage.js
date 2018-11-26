import React, { Component } from 'react';
import HeaderComponent from 'components/HeaderComponent';
import AdminLinks from 'components/AdminLinks';
import ClientComponent from 'components/types/ClientComponent';
import TenderComponent from 'components/types/TenderComponent';
import WorkComponent from 'components/types/WorkComponent';
import WorkForceComponent from 'components/types/WorkForceComponent';
import MachineComponent from 'components/types/MachineComponent';
import MaterialComponent from 'components/types/MaterialComponent';
import SupplyComponent from 'components/types/SupplyComponent';

const links = [{
  name: 'Productos',
  url: '/productos'
},{
  name: 'Tipos',
  url: '/tipos'
}];

class WorkersPage extends Component {

  render() {
    return (
      <div>
        <HeaderComponent/>
        <AdminLinks links={links} />
        <div className="text-center mt-3 container-fluid">
          <div className="container">
            <MachineComponent />
          </div>
          <div className="container">
            <ClientComponent />
          </div>
          <div className="container">
            <TenderComponent />
          </div>
          <div className="container">
            <WorkComponent />
          </div>
          <div className="container">
            <WorkForceComponent />
          </div>
          <div className="container">
            <MachineComponent />
          </div>
          <div className="container">
            <MaterialComponent />
          </div>
          <div className="container">
            <SupplyComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkersPage;
