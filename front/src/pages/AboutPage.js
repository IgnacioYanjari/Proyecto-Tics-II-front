import React, {Component} from "react";
import HeaderComponent from "components/HeaderComponent";
import DescriptionComponent from "components/DescriptionComponent";
import {
  GeneralComponent,
  MaterialComponent,
  MachineComponent,
  OverHeadComponent,
  SupplyComponent,
  WorkForceComponent
} from "components/description";
import TenderComponent from "components/TenderComponent";
import "./style.css";

let tenders = [];

for (var i = 0; i < 200; i++) {
  tenders.push({
    id: i,
    name: `Montaje Testeo ${i + 1}`,
    type: [
      {
        type: "Unión",
        name: "Soldada"
      },
      {
        type: "Peso",
        name: "Liviana"
      }
    ],
    description: [
      {
        name: "dg",
        title: "Desripción general",
        content: <GeneralComponent id={i + 1} tenders={tenders} />
      },
      {
        name: "ma",
        title: "Materiales",
        content: <MaterialComponent id={i + 1} tenders={tenders} />
      },
      {
        name: "in",
        title: "Insumos",
        content: <SupplyComponent id={i + 1} tenders={tenders} />
      },
      {
        name: "mo",
        title: "Mano de obra",
        content: <WorkForceComponent id={i + 1} tenders={tenders} />
      },
      {
        name: "mq",
        title: "Maquinaria",
        content: <MachineComponent id={i + 1} tenders={tenders} />
      },
      {
        name: "gg",
        title: "Gastos generales",
        content: <OverHeadComponent id={i + 1} tenders={tenders} />
      }
    ]
  });
}

let tenders = [];

for (var i = 0; i < 200; i++) {
  tenders.push({
    name: `Montaje Testeo ${i + 1}`,
    type: [
      {
        type: "Unión",
        name: "Soldada"
      },
      {
        type: "Peso",
        name: "Liviana"
      },
      {
        type: "Prueba1",
        name: "Tipo de prueba"
      }
    ]
  });
}

const description = [
  {
    name: "dg",
    title: "Desripción general",
    content: "Esto es una descripción general"
  },
  {
    name: "ma",
    title: "Materiales",
    content: "Esto es un material"
  },
  {
    name: "in",
    title: "Insumos",
    content: "Esto es un insumo"
  },
  {
    name: "mo",
    title: "Mano de obra",
    content: "Esto es una mano de obra"
  },
  {
    name: "mq",
    title: "Maquinaria",
    content: "Esto es una maquinaria"
  },
  {
    name: "gg",
    title: "Gastos generales",
    content: "Esto es un gasto general"
  }
];

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openId: 0,
      description: tenders.find(val => val.id === 0).description,
      title: tenders.find(val => val.id === 0).name
    };
    this.changeTender = this.changeTender.bind(this);
    this.closeTender = this.closeTender.bind(this);
  }

  changeTender = async id => {
    let open = tenders.find(val => val.id === id);
    this.setState({
      openId: id,
      description: open.description,
      title: open.name
    });
  };

  closeTender(id) {
    this.setState({
      openId: -1,
      description: [],
      title: ""
    });
  }

  render() {
    const {openId, description, title} = this.state;
    return (
      <div>
        <HeaderComponent />
        <div className="row container-fluid">
          <div className="col-lg-4">
            <div className="card mt-3 ml-1 mr-1">
              <div className="card-header text-center">
                <h4>Lista de licitaciones </h4>
              </div>
              <div className="card-body scroll mb-3">
                <TenderComponent
                  tenders={tenders}
                  changeTender={this.changeTender}
                  closeTender={this.closeTender}
                  openId={openId}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h4 className="mt-3 text-center"> {title} </h4>
            <DescriptionComponent description={description} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
