import React, { Component } from 'react';
import './App.css';
import QuickAdd from './quickAdd';
import { subscribeToTimer, subscribeToNewStock } from './api';
var unirest = require('unirest');


class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      newStock: [],
      timestamp: 'no timestamp yet'
    };

  }

  componentDidMount() {

    subscribeToTimer((err, timestampee) => this.setState({ 
      data: timestampee
    }));
/*
      subscribeToNewStock((err, stockInfo) => {

          console.log(stockInfo);

          this.setState({
              newStock: stockInfo })
      } , "AAPL");
*/
/*
    var url = 'http://localhost:2000/?stock=TWTR';
    //.set('stock', 'AAPL')
    Request.get(url).then((response) => {
      //console.log(response.body[0]);

      //console.log(response.body);

      this.setState({
        data: response.body,
        //price: response.body[0].l,
        //name: response.body[0].name
      });

    });
    */
}

  render() {
    var stock = this.state.data;
    if (stock)
    var stock = this.state.data;
    var temp = stock;

function onView(){
    console.log("Clicked button");

    subscribeToNewStock((err, stockInfo) => {

        console.log(stockInfo);

        this.setState({
            newStock: stockInfo })
    } , "AAPL");
}

const logStock = (message) => {
    subscribeToNewStock((err, stockInfo) => {

        console.log(stockInfo);

        var dataAll = [];
// ...
        //dataAll = Object.values(stock);
        //dataAll.unshift(Object.values(stockInfo)[0]);

        var tempData = {};

        for ( var index in stockInfo ) {
            tempData[index] = stockInfo[index];
        }
        for ( var index in stock ) {
            tempData[index] = stock[index];
        }

        console.log(tempData);


            this.setState({
                data: tempData })
    } , message);
}

var testFunc = () => { console.log("test") };

    return (
      <div>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Stock Watcher
              </h1>
              <h2 className="subtitle">
                Your portfolio and insights, all in one place.
              </h2>
            </div>
          </div>

        </section>
        <div className="container">
          <hr/>
          <div className="columns">
            <div className="column is-one-third">
              <QuickAdd addFunc={logStock} stock={stock}/>
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