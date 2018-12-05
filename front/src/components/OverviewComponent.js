import React, { Component } from 'react';
import shortid from 'shortid';

class OverviewComponent extends Component {
    constructor(props) {
        super(props)
        this.renderOverview = this.renderOverview.bind(this);
    }

    renderOverview() {
        return (
            <div key={shortid.generate()}>
                <form>
                    <div className="form-inline shadow-textarea">
                        <div className="form-group my-3">
                            <label htmlFor="description">Descripción</label>
                            <textarea className="mx-sm-3 form-control form-control-lg is-valid" id="description" rows="5" required />
                            <div className="invalid-feedback">
                                Rellene el campo
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    render() {
        return (
          <div>
            {this.renderOverview()}
          </div>
        );
      }

}

export default OverviewComponent;