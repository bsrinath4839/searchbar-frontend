import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { search, clearItemsList } from './actions'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: ""
        }
    }

    static propTypes = {
        search: PropTypes.func.isRequired,
        ClearItemsList : PropTypes.func,
        isDataLoading: PropTypes.bool,
        data: PropTypes.array,
    }

    onChange(event) {
        if (event.target.value.length > 0) {
            this.setState({ [event.target.name]: event.target.value, msg : "Loading...!!!" });
            this.props.search(event.target.value)
        }else{
            this.setState({ [event.target.name]: event.target.value, msg : "" });
        }

    }

    ClearItemsList(){
        this.props.clearItemsList();
    }

    render() {
        if (this.props.isDataLoading) {
            return (
                <div className="App">
                    <input className="searchingpoint" type="text" value={this.state.item} name="item"
                           onChange={(event) => this.onChange(event)}/>
                    <header className="App-header">
                        <p>{this.state.msg}</p>
                    </header>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <input className="searchingpoint" type="text" value={this.state.item} name="item"
                           onChange={(event) => this.onChange(event)}/>
                    <header className="App-header">
                        <table border="1">
                            <tbody>
                            {this.props.data.map((items, i) =>
                                <tr key={i}>
                                    <td><Link to={{
                                        pathname : "/to/item",
                                        state : { items : items}
                                    }}
                                    onClick={()=>this.ClearItemsList()}> {items.name}</Link></td>
                                    <td>{items.description}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </header>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    data: state.data.data,
    isDataLoading: state.data.isDataLoading,
})

export default connect(mapStateToProps, { search, clearItemsList })(Search);
