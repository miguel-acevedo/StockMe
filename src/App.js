import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuickAdd from './quickAdd';
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
      <div>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Stock Watcher
              </h1>
              <h2 className="subtitle">
                Your portilio and insights, all in one place.
              </h2>
            </div>
          </div>

        </section>
        <div className="container">
          {welcomeMsg()}
          <hr/>
          <div className="columns">
            <div className="column is-one-third">
              <QuickAdd/>
            </div>
            <div className="column is-half">is-half</div>
            <div className="column is-one-third">Watch List</div>
          </div>
        </div>

    </div>
    );
  }
}

export default App;
