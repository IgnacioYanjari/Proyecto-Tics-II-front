import React, { Component } from 'react';
import shortid from 'shortid';

class DescriptionComponent extends Component {

  constructor(props) {
    super(props)
    this.renderTitles = this.renderTitles.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  renderTitles(value) {
    let count = 0;
    return value.map(data => {
      if (count === 0) {
        count = count + 1;
        return (
          <a key={shortid.generate()} className="nav-item nav-link mb-3 active" id={`nav-${data.name}-tab`} data-toggle="tab" href={`#nav-${data.name}`} role="tab" aria-controls={`nav-${data.name}}`} aria-selected="true">
            {data.title}
          </a>
        );
      } else {
        return (
          <a key={shortid.generate()} className="nav-item nav-link mb-3" id={`nav-${data.name}-tab`} data-toggle="tab" href={`#nav-${data.name}`} role="tab" aria-controls={`nav-${data.name}}`} aria-selected="true">
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
          <div key={shortid.generate()} className="tab-pane fade show active" id={`nav-${data.name}`} role="tabpanel" aria-labelledby={`nav-${data.name}-tab`}>
            {data.content}
          </div>
        );
      } else {
        return (
          <div key={shortid.generate()} className="tab-pane fade" id={`nav-${data.name}`} role="tabpanel" aria-labelledby={`nav-${data.name}-tab`}>
            {data.content}
          </div>
        );
      }
    })
  }

  render() {
    const description = this.props.description;
    return (
      <div className="card text-center mt-3 mr-3 ml-3 mb-3">
        <div className="card-header">
          <nav className="card-header-tabs">
            <div className="nav nav-tabs nav-pills nav-fill" id="nav-tab" role="tablist">
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
    );
  }
}

export default DescriptionComponent;
