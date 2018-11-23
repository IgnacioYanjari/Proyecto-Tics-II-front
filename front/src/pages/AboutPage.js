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
            <DescriptionComponent descriptions={[{
                name : 'dg',
                title : 'Desripción general',
                content : 'Esto es una descripción general',
              },{
                name : 'ma',
                title : 'Materiales',
                content : 'Esto es un material',
              },{
                name : 'in',
                title : 'Insumos',
                content : 'Esto es un insumo',
              },{
                name : 'mo',
                title : 'Mano de obra',
                content : 'Esto es una mano de obra',
              },{
                name : 'mq',
                title : 'Maquinaria',
                content : 'Esto es una maquinaria'
              },{
                name : 'gg',
                title : 'Gastos generales',
                content : 'Esto es un gasto general'
            }]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
