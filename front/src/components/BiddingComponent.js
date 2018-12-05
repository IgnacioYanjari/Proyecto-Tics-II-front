import React, {Component} from "react";
import shortid from "shortid";
import CreateWork from "components/modals/create/Work";
import CreateTask from "components/modals/create/Task";
import AccordionComponent from "components/AccordionComponent";

class BiddingComponent extends Component {
  constructor(props) {
    super(props);
    this.renderBidding = this.renderBidding.bind(this);
    this.handleWork = this.handleWork.bind(this);
    this.handleTask = this.handleTask.bind(this);
    this.state = {
      works: [],
      tasks: []
    };
  }

  handleWork(value) {
    let {works} = this.state;
    works.push(value);
    this.setState({works: works});
  }

  handleTask(value) {
    let {tasks} = this.state;
    tasks.push(value);
    this.setState({tasks: tasks});
  }

  renderBidding() {
    const {works, tasks} = this.state;
    return (
      <div key={shortid.generate()}>
        <div className="row container-fluid">
          <div className="col-6">
            <CreateWork onCreateWork={this.handleWork} />
          </div>
          <div className="col-6">
            <CreateTask onCreateTask={this.handleTask} works={works} />
          </div>
        </div>
        <div className="container mt-3">
          <div className="col">
            <AccordionComponent names={works} tasks={tasks} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderBidding()}</div>;
  }
}

export default BiddingComponent;
