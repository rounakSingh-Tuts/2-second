import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mohan</td>
            <td>24</td>
          </tr>
        </tbody>

      </table>
    )
  }
} 

export default Table