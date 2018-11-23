import React, { Component } from 'react';
import shortid from 'shortid';

class BiddingComponent extends Component {
    constructor(props) {
        super(props)
        this.renderBidding = this.renderBidding.bind(this);
        this.renderTitles = this.renderTitles.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: ''
        };
    }

    closeModal() {
        document.getElementById('modalButton').click();
    }

    renderTitles(value) {
        return value.map(data => {
            return (
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Obra
                </button>
            );
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let { name } = this.state;
        this.productService.createWork({
            name: name,
        }).then(res => {
            this.closeModal();
        });
    }

    handleChange(event, name) {
        console.log(name)
        console.log(event.target.value)
        this.setState({
            [name]: event.target.value
        })
    }

    renderBidding() {
        const { name } = this.state;
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
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Obra
                                                </button>
                                            </div>
                                            <div className="col">
                                                <button type="button" className="btn btn-primary" id="modalButton" data-toggle="modal" data-target="#modalWork">
                                                    Crear Obra
                                                </button>
                                                <div className="modal fade" id="modalWork" tabIndex="-1" role="dialog"
                                                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalCenterTitle">Obra</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                                                <div className="modal-body">
                                                                    <div className="form-group">
                                                                        <label htmlFor="name"> Nombre </label>
                                                                        <input type="text" value={name} onChange={(e) => this.handleChange(e, 'name')}
                                                                            className="form-control" id="name" required/>
                                                                    </div>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal"> Cerrar </button>
                                                                    <button type="submit" className="btn btn-primary"> Crear </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderBidding()}
            </div>
        );
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