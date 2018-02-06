import React, { Component } from 'react';

class quickAdd extends Component {
  render() {

    var columnStyle = {
      width: "110%"
    }

    var stocks = this.props.stock;
    console.log(stocks);

    function CheckSign(price){
      if ( price > 0)
        return '+';
    }

    return(
      <nav className="panel">
              <p className="panel-heading">
                Quick Add
              </p>
              <div className="panel-block">
                <p className="control has-icons-left">
                  <input className="input is-small" type="text" placeholder="search" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-search" />
                  </span>
                </p>
              </div>
              <p className="panel-tabs">
                <a className="is-active">all</a>
                <a>grossing</a>
                <a>private</a>
                <a>sources</a>
                <a>forks</a>
              </p>
              {/* <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" />
                </span>
                bulma
              </a>  */}
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
                    {CheckSign(stocks[item].price.regularMarketChangePercent)}
                    {(stocks[item].price.regularMarketChangePercent * 100).toFixed(2)}
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
