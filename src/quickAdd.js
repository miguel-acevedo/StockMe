import React, { Component } from 'react';

class quickAdd extends Component {
  render() {

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
              <a className="panel-block is-active">
                <span className="panel-icon">
                  <i className="fas fa-book" />
                </span>
                bulma
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" />
                </span>
                marksheet
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" />
                </span>
                minireset.css
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" />
                </span>
                jgthms.github.io
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-code-branch" />
                </span>
                daniellowtw/infboard
              </a>
              <a className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-code-branch" />
                </span>
                mojs
              </a>
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
