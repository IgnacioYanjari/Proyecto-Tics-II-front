import React, {Component} from "react";
import shortid from "shortid";

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workId: 0,
      task: ""
    };
  }

  closeModal() {
    document.getElementById("modalButtonTask").click();
  }

  handleSubmit(event) {
    event.preventDefault();
    let {task, workId} = this.state;
    this.props.onCreateTask({
      task,
      workId: parseInt(workId, 10)
    });
    return this.closeModal();
  }

  handleChange(event, name) {
    this.setState({[name]: event.target.value});
  }

  render() {
    const {task, workId} = this.state;
    const {works} = this.props;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          id="modalButtonTask"
          data-toggle="modal"
          data-target="#modalTask"
        >
          Crear Tarea
        </button>
        <div
          className="modal fade"
          id="modalTask"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Tarea
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="task">Nombre</label>
                    <input
                      type="text"
                      value={task}
                      onChange={e => this.handleChange(e, "task")}
                      className="form-control"
                      id="task"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-group">
                      <label htmlFor="brand"> Obra </label>
                      <select
                        className="custom-select"
                        id="type"
                        value={workId}
                        onChange={e => this.handleChange(e, "workId")}
                      >
                        {works.map((value, index) => {
                          return (
                            <option key={shortid.generate()} value={index}>
                              {value.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTask;
