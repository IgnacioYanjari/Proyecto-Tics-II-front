import React, {Component} from "react";
import shortid from "shortid";
import CreateWork from "components/modals/CreateWork";

class BiddingComponent extends Component {
  constructor(props) {
    super(props);
    this.renderBidding = this.renderBidding.bind(this);
    this.renderTitles = this.renderTitles.bind(this);
    this.handleWork = this.handleWork.bind(this);
    this.state = {
      names: []
    };
  }

  handleWork(value) {
    let {names} = this.state;
    names.push(value);
    console.log(names);
    this.setState({ names: names});
  };

  renderTitles(value) {
    return value.map(data => {
      return (
        <button class="btn btn-link" type="button" data-toggle="collapse"
          data-target="#collapseOne" aria-expanded="true"
          aria-controls="collapseOne">
          Obra
        </button>
      );
    });
  }

  renderBidding() {
    const {names} = this.state;
    return (
      <div key={shortid.generate()}>
        <div className="container">
          <div className="col">
            <div className="accordion" id="obraTitle">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-link" type="button"
                          data-toggle="collapse" data-target="#collapseOne"
                          aria-expanded="true" aria-controls="collapseOne">
                          Obra
                        </button>
                      </div>
                      <div className="col">
                        <CreateWork onCreateWork={this.handleWork} />
                      </div>
                    </div>
                  </h5>
                </div>
                <div id="collapseOne" className="collapse show"
                  aria-labelledby="headingOne" data-parent="#obraTitle">
                  <div className="card-body">
                    {
                      names.map( el => <p key={shortid.generate()}> {el} </p>)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderBidding()}</div>;
  }
}

//   render() {
//     const {name, price, brand, types, type} = this.state;
//     return(
//       <div>
//         <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalMaterial">
//           Crear
//         </button>

// <div className="modal fade" id="modalMaterial" tabIndex="-1" role="dialog"
//     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//   <div className="modal-dialog modal-dialog-centered" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalCenterTitle">Crear Material</h5>
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <form onSubmit={ (e) => this.handleSubmit(e)}>
//         <div className="modal-body">
//           <div className="form-group">
//             <label htmlFor="name"> Nombre </label>
//             <input type="text" value={name} onChange={(e) => this.handleChange(e, 'name')}
//                 className="form-control" id="name" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="price">Precio</label>
//             <input type="number" value={price} onChange={(e) => this.handleChange(e, 'price')}
//                 className="form-control" min="10" id="price" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="brand"> Marca </label>
//             <input type="text" value={brand} onChange={(e) => this.handleChange(e, 'brand')}
//                 className="form-control" id="brand" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="brand"> Tipo </label>
//             <select className="custom-select" id="type" value={type.id}
//                 onChange={(e) => this.handleChange(e, 'type')}>
//               { types.map(value => {
//                   return(
//                     <option key={shortid.generate()} value={value.id}>
//                       {value.name}
//                     </option>
//                   );
//                 })
//               }
//             </select>
//           </div>
//         </div>
//         <div className="modal-footer">
//           <button type="button" className="btn btn-secondary" data-dismiss="modal"> Cerrar </button>
//           <button type="submit" className="btn btn-primary"> Crear </button>
//         </div>
//       </form>
//     </div>
//   </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default CreateMaterial;

export default BiddingComponent;
