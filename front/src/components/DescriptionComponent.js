import React, { Component } from 'react';
import shortid from 'shortid';

class DescriptionComponent extends Component {

  constructor(props) {
    super(props)
    this.renderTitles = this.renderTitles.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
  }

  renderTitles(value) {
    let count = 0;
    return value.map(data => {
      if (count === 0) {
        count = count + 1;
        return (
          <a className="nav-item nav-link mb-3 active" id={`nav-${data.name}-tab`} data-toggle="tab" href={`#nav-${data.name}`} role="tab" aria-controls={`nav-${data.name}}`} aria-selected="true">
            {data.title}
          </a>
        );
      } else {
        return (
          <a className="nav-item nav-link mb-3" id={`nav-${data.name}-tab`} data-toggle="tab" href={`#nav-${data.name}`} role="tab" aria-controls={`nav-${data.name}}`} aria-selected="true">
            {data.title}
          </a>
        );
      }
    })
  }

  renderContent(value) {
    let count = 0;
    return value.map(data => {
      if (count === 0) {
        count = count + 1;
        return (
          <div className="tab-pane fade show active" id={`nav-${data.name}`} role="tabpanel" aria-labelledby={`nav-${data.name}-tab`}>
            {data.content}
          </div>
        );
      } else {
        return (
          <div className="tab-pane fade" id={`nav-${data.name}`} role="tabpanel" aria-labelledby={`nav-${data.name}-tab`}>
            {data.content}
          </div>
        );
      }
    })
  }

  renderDescription() {
    const description = this.props.description
    return (
      <div key={shortid.generate()}>
        <div className="card text-center mt-3 mr-3 ml-3 mb-3">
          <div className="card text-center mt-3 mr-3 ml-3 mb-3">
            <nav className="card-header-tabs">
              <div className="nav nav-tabs nav-pills nav-fill" id="-nav-tab" role="tablist">
                {this.renderTitles(description)}
              </div>
            </nav>
          </div>
          <div className="card-body">
            <div className="tab-content" id="nav-tabContent">
              {this.renderContent(description)}
            </div>
          </div>
        </div>
      </div>
    )

  }

  render() {
    return (
      <div>
        {this.renderDescription()}
      </div>
    );
  }
}

//   render() {
//     return (
//       <div className="card text-center mt-3 mr-3 ml-3 mb-3">
//         <div className="card-header">
//           <nav className="card-header-tabs">
//             <div className="nav nav-tabs nav-pills nav-fill" id="nav-tab" role="tablist">
//               <a className="nav-item nav-link mb-3 active" id="nav-descrip-tab" data-toggle="tab" href="#nav-descrip" role="tab" aria-controls="nav-descrip" aria-selected="true">
//                 Descripción general
//               </a>
//               <a className="nav-item nav-link mb-3" id="nav-material-tab" data-toggle="tab" href="#nav-material" role="tab" aria-controls="nav-material" aria-selected="false">
//                 Material
//               </a>
//               <a className="nav-item nav-link mb-3" id="nav-supply-tab" data-toggle="tab" href="#nav-supply" role="tab" aria-controls="nav-supply" aria-selected="false">
//                 Insumos
//               </a>
//               <a className="nav-item nav-link mb-3" id="nav-workforce-tab" data-toggle="tab" href="#nav-workforce" role="tab" aria-controls="nav-workforce" aria-selected="false">
//                 Mano de obra
//               </a>
//               <a className="nav-item nav-link mb-3" id="nav-machine-tab" data-toggle="tab" href="#nav-machine" role="tab" aria-controls="nav-machine" aria-selected="false">
//                 Equipos
//               </a>
//               <a className="nav-item nav-link mb-3" id="nav-general-tab" data-toggle="tab" href="#nav-general" role="tab" aria-controls="nav-general" aria-selected="false">
//                 Gastos generales
//               </a>
//             </div>
//           </nav>
//         </div>
//         <div className="card-body">
//           <div className="tab-content" id="nav-tabContent">
//             <div className="tab-pane fade show active" id="nav-descrip" role="tabpanel" aria-labelledby="nav-descrip-tab">
//               Descripción general
//             </div>
//             <div className="tab-pane fade" id="nav-material" role="tabpanel" aria-labelledby="nav-material-tab">
//               Materiales
//             </div>
//             <div className="tab-pane fade" id="nav-supply" role="tabpanel" aria-labelledby="nav-supply-tab">
//               Insumos
//             </div>
//             <div className="tab-pane fade" id="nav-workforce" role="tabpanel" aria-labelledby="nav-workforce-tab">
//               Mano de obra
//             </div>
//             <div className="tab-pane fade" id="nav-machine" role="tabpanel" aria-labelledby="nav-machine-tab">
//               Maquinaria
//             </div>
//             <div className="tab-pane fade" id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab">
//               Gastos generales
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default DescriptionComponent;
