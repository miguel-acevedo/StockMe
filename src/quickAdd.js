import React, { Component } from 'react';
import { logStock2 } from './App'
import {subscribeToNewStock} from "./api";

class quickAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

  render() {


    var columnStyle = {
      width: "110%"
    }

    var stocks = this.props.stock;
    //console.log(stocks);

    function GeneratePercent(data){
      if ( data.price > 0){
        var sign = '+';
        var style = 'button is-success';
      }
      else{
        sign = '-';
        style = 'button is-danger';
      }

      // Determine the size of the button of percent change.
      if (Math.abs(data.price) >= .10) {
        style+= ' bigPercent';
        var space = '';
      } else {
        style+= ' smallPercent';
        space = ' ';
      }

      var price = sign + space + Math.abs((data.price * 100)).toFixed(2);

      return (
          <span className={style}><p>{price}%</p> </span>
        );
    }

    return(
      <nav className="panel">
              <p className="panel-heading" onClick={this.handleSubmit}>
                Quick Add
              </p>
              <div className="panel-block">
                <p className="control has-icons-left">
                  <input className="input" type="text" placeholder="search" value={this.state.value} onChange={this.handleChange}/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-search" />
                  </span>
                </p>
                <button className="button is-link is-outlined" onClick={ (e) => { this.props.addFunc(this.state.value); }}>
                  View
                </button>
              </div>
              <p className="panel-tabs">
                <a className="is-active">all</a>
                <a>grossing</a>
                <a>private</a>
                <a>sources</a>
                <a>forks</a>
              </p>
              {Object.keys(stocks).map((item, i) => 
                <a key={i} className="panel-block">
                  <div className="columns" style={columnStyle}>
                    <span></span>
                    <div className="column is-half">
                    {stocks[item].price.symbol}
                    </div>
                    <div className="column is-one-quarters">
                      ${stocks[item].price.regularMarketPrice.toFixed(2)}
                    </div>
                    <div className="column is-one-quarters">
                    <GeneratePercent price={stocks[item].price.regularMarketChangePercent}/>
                    </div>
                 </div>
                </a>
              )}
              <label className="panel-block">
                <input type="checkbox" />
                remember me
              </label>
              <div className="panel-block">
                <button className="button is-link is-outlined is-fullwidth">
                  Add
                </button>
              </div>
            </nav>
    );

  }
}

export default quickAdd;
