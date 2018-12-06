import React, {Component} from "react";
import shortid from "shortid";

class AccordionComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderTasks(value, index) {
    return value.map(data => {
      if (data.workId === index) {
        return (
          <div key={shortid.generate()}>
            <div className="row container-fluid">
              <div className="col-6">{data.task}</div>
              <div className="col-6">
                <button type="button" class="btn btn-primary">
                  Abrir
                </button>
              </div>
            </div>
            <hr />
          </div>
        );
      }
    });
  }

  renderAccordion() {
    const {names, tasks} = this.props;
    console.log(tasks);
    return names.map((data, index) => (
      <div key={shortid.generate()}>
        <div className="accordion" id={data.key1}>
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <div className="row">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${data.key2}`}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {data.name}
                  </button>
                </div>
              </h5>
            </div>
            <div
              id={data.key2}
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent={`#${data.key1}`}
            />
            <div className="card-body">{this.renderTasks(tasks, index)}</div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return <div className="mb-3">{this.renderAccordion()}</div>;
  }
}

export default AccordionComponent;
