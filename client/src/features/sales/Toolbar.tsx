import React, { Component } from 'react';
export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.sorted = { age: true, name: true };
  }

  sort(type) {}
  reset() {}

  render() {
    return (
      <div className="toolbar">
        <button className="btn btn-default" onClick={() => this.sort('name')}>
          <i className="fa fa-sort-alpha-asc"></i>  Сортировать по городу
        </button>
      
      </div>
    );
  }
}