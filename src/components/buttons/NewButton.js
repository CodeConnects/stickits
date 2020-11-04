import React from 'react';

class NewButton extends React.Component {
    
    constructor() {
        super();

        this.displayData = [];

        this.state = {
            showdata : this.displayData,
            postVal : ""
        }

        this.appendData = this.appendData.bind(this);
        this.prependData = this.prependData.bind(this);
        this.handleChange = this.handleChange.bind(this);

    };

    appendData() {
        this.displayData.push(<div id="display-data"><pre>{this.state.postVal}</pre></div>);
        this.setState({
            showdata : this.displayData,
            postval : ""
        });
    }

    prependData() {
        this.displayData.unshift(<div id="display-data"><pre>{this.state.postVal}</pre></div>);
        this.setState({
            showdata : this.displayData,
            postVal : ""
        });
    }

    handleChange(e) {
        let getTextAreaValue = e.target.value;
        this.setState({
            postVal : getTextAreaValue
        });
    }
    
    render() {
        return (
            <div id="new-btn-wrap">
                <div id="main-container">
                    <textarea rows="16" cols="20" value={this.state.postVal} onChange={this.handleChange} ></textarea>
                    <div >
                        <input  type="submit" className="button" onClick={this.appendData}  value="Append"/>
                        <input  type="submit" className="button" onClick={this.prependData}   value="Prepend"/>
                    </div>
                    <div id="display-data-Container">{this.displayData}</div>
                </div>
            </div>
        );
    }
}

export default NewButton;
