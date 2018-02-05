import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';
import _ from 'lodash';
var unirest = require('unirest');
var yahooFinance = require('yahoo-finance');
var getJSON = require('get-json');
var request = require("request");
//var request = require("request");
//var cors = require('cors');
//var express = require('express');

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      name: "miguel"
    };
  }

  componentDidMount() {

    var url = 'http://localhost:2000/?stock=TWTR';
    //.set('stock', 'AAPL')
    Request.get(url).then((response) => {
      //console.log(response.body[0]);

      this.setState({
        data: response.body[0],
        price: response.body[0].l,
        name: response.body[0].name
      });

    });
}

  render() {
    var stock = this.state.data;

    function welcomeMsg()
    {
      return(
        <p className="App-intro">
          {stock.name}'s stock price is: {stock.l}
        </p>
        );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test React</h1>
        </header>
        {welcomeMsg()}
      </div>
    );
  }
}

export default App;
