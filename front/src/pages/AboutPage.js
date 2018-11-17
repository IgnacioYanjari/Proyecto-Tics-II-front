import React, { Component } from 'react';
import HeaderComponent from 'components/HeaderComponent';
import DescriptionComponent from 'components/DescriptionComponent';
import TenderComponent from 'components/TenderComponent';
import './style.css';

let tenders = [];

for (var i = 0; i < 200; i++) {
  tenders.push({
    name: `Montaje Testeo ${i+1}`,
    type: [{
        type: 'Unión',
        name: 'Soldada'
    }, {
        type: 'Peso',
        name: 'Liviana'
    }, {
        type: 'Prueba1',
        name: 'Tipo de prueba'
    }]
  })
}

class AboutPage extends Component {
    render() {
        return (
          <div >
            <HeaderComponent / >
            <div className = "row container-fluid" >
              <div className = "col-lg-4" >
                <div className = "card mt-3 ml-1 mr-1" >
                  <div className = "card-header text-center" >
                    <h4 > Lista de licitaciones < /h4>
                  </div>
                  <div className = "card-body mb-3" >
                    <TenderComponent tenders={tenders}/>
                </div>
              </div>
              </div>
              <div className = "col-lg-8" >
                <DescriptionComponent description = {
                    [{
                        name: 'dg',
                        title: 'Desripción general',
                        content: 'Esto es una descripción general',
                    }, {
                        name: 'ma',
                        title: 'Materiales',
                        content: 'Esto es un material',
                    }, {
                        name: 'in',
                        title: 'Insumos',
                        content: 'Esto es un insumo',
                    }, {
                        name: 'mo',
                        title: 'Mano de obra',
                        content: 'Esto es una mano de obra',
                    }, {
                        name: 'mq',
                        title: 'Maquinaria',
                        content: 'Esto es una maquinaria'
                    }, {
                        name: 'gg',
                        title: 'Gastos generales',
                        content: 'Esto es un gasto general'
                    }]
                }/>
              </div>
            </div>
          </div>
        );
    }
}

export default AboutPage;
