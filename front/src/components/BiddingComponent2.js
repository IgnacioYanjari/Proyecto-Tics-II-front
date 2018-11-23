import React, { Component } from 'react';
import shortid from 'shortid';

class BiddingComponent extends Component {
    constructor(props) {
        super(props)
        this.renderBidding = this.renderBidding.bind(this);
        this.renderTitles = this.renderTitles.bind(this);
        this.state = {
            name: '',
            obra: [{ name: '' }],
        };
    }

    handleObraNameChange = (idx) => (evt) => {
        const newObra = this.state.obra.map((obra, sidx) => {
            if (idx !== sidx) return obra;
            return { ...obra, name: evt.target.value };
        });
        this.setState({ obra: newObra });
    }

    handleSubmit = (evt) => {
        const { name, obra } = this.state;
        alert(`Incorporated: ${name} with ${obra.length} obra`);
    }

    handleAddObra = () => {
        this.setState({
            obra: this.state.obra.concat([{ name: '' }])
        });
    }

    handleRemoveObra = (idx) => () => {
        this.setState({
            obra: this.state.obra.filter((s, sidx) => idx !== sidx)
        });
    }

    // renderTitles(value) {
    //     return value.map(data => {
    //         return (
    //             <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    //                 {data.title}
    //             </button>
    //         );
    //     });
    // }

    // renderBidding() {
    //     const biddings = this.props.biddings
    //     return (
    //         <div key={shortid.generate()}>
    //             <div class="container">
    //                 <div class="col">
    //                     <div class="accordion" id="accordionExample">
    //                         <div class="card">
    //                             <div class="card-header" id="headingOne">
    //                                 <h5 class="mb-0">
    //                                     {this.renderTitles(biddings)}
    //                                 </h5>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    renderTitles(value) {
        return value.map(data => {
            return (
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {data.title}
                </button>
            );
        });
    }

    renderBidding() {
        const biddings = this.props.biddings
        return (
            <div key={shortid.generate()}>
                <div class="container">
                    <div class="col">
                        <div class="accordion" id="obratitle">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Obra
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#obratitle">
                                    <div class="card-body">
                                        {this.state.obra.map((obra, idx) => (
                                            <div className="obra">
                                                <input
                                                    type="text"
                                                    placeholder={`obra #${idx + 1}`}
                                                    value={obra.name}
                                                    onChange={this.handleObraNameChange(idx)}
                                                />
                                                <button type="button" onClick={this.handleRemoveObra(idx)} className="small">-</button>
                                            </div>
                                        ))}
                                        <button type="button" onClick={this.handleAddObra} className="small">Add Obra</button>
                                        <button>Incorporate</button>
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
        return (
            <div>
                {this.renderBidding()}
            </div>
        );
    }
}

export default BiddingComponent;