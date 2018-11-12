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
        <div key={shortid.generate()} >
          <div className="row">
              <div className="col-4 col-md-5 col-lg-3">
                <div className="row ml-1">
                  <button type="button" className="btn btn-primary align-middle btn-sm btn-block">Abrir</button>
                </div>
                <div className="row ml-1 mt-2">
                  <button type="button" className="btn btn-danger align-middle btn-sm btn-block">Cerrar</button>
                </div>
              </div>
              <div className="col-8 col-md-7 col-lg-9" >
                <p style={{ color : '#706F6F'}} className="ml-1 mr-1">
                  <b> {value.name}</b> <br/>
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
