import React from 'react';
import './App.css';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { search } from './actions'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: ""
    }
  }

  static propTypes = {
    search: PropTypes.func.isRequired,
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

  render() {
    //console.log(this.props.data);

    if (this.props.isDataLoading) {
      return (
        <div className="App">
          <input className="searchingpoint" type="text" value={this.state.item} name="item" onChange={(event) => this.onChange(event)} />
          <header className="App-header">
            <p>{this.state.msg}</p>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <input className="searchingpoint" type="text" value={this.state.item} name="item" onChange={(event) => this.onChange(event)} />
          <header className="App-header">
            <table border="1">
              <tbody>
                {this.props.data.map((items, i) =>
                  <tr key={i}>
                    <td>{items.name}</td>
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

export default connect(mapStateToProps, { search })(App);
