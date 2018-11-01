import React, { Component } from 'react';
import HeaderComponent from 'components/HeaderComponent';
import DescriptionComponent from 'components/DescriptionComponent';
import TenderComponent from 'components/TenderComponent';
import './style.css';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="row container-fluid">
          <div className="col-lg-4">
            <div className="card mt-3 ml-1 mr-1">
              <div className="card-header text-center">
                <h4> Lista de licitaciones </h4>
              </div>
              <div className="card-body scroll">
                <TenderComponent tenders={[{
                    name : 'Montaje Testeo1',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo2',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  },{
                    name : 'Montaje Testeo3',
                    type : [{
                      type : 'Unión',
                      name : 'Soldada'
                    },{
                      type : 'Peso',
                      name : 'Liviana'
                    }]
                  }]}/>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <DescriptionComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
