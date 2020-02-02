import React, { Component } from "react";

export default class Employee extends Component {

render() {
  const listItem = this.props.employees.map(item =>{
      return <li key= {item.id}> {item.name}</li>
  }
    )
    return (
        <ul>{listItem}</ul>
    )
  }

}