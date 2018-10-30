import React, { Component } from 'react';
import shortid from 'shortid';

class TenderComponent extends Component {
  constructor(props){
    super(props)
    this.renderTenders = this.renderTenders.bind(this);
    this.renderTypes = this.renderTypes.bind(this);
  }

  renderTypes(value){
    return value.type.map( data => {
      return(
        <b key={shortid.generate()} className="blockquote-footer" >
          {data.type} : {data.name} <br/>
        </b>
      );
    })
  }

  renderTenders(){
    const tenders = this.props.tenders;
    return tenders.map( (value, index) => {
      return(
        <div key={shortid.generate()}>
          <div className="row">
              <div className="col-5 col-lg-3">
                <div className="row ml-3">
                  <button type="button" className="btn btn-primary align-middle">Abrir</button>
                </div>
                <div className="row ml-3">
                  <button type="button" className="btn btn-danger align-middle mt-2">Cerrar</button>
                </div>
              </div>
              <div className="col-7 col-lg-9" >
                <p style={{ color : '#706F6F'}} className="ml-4 mr-3">
                  <b className="mb-0"> {value.name}</b> <br/>
                  { this.renderTypes(value) }
                </p>
              </div>
          </div>
          <hr className="mb-3"/>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        {this.renderTenders()}
      </div>
    );
  }
}

export default TenderComponent;
