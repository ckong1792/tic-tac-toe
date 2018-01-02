import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div class="col" style={styles.col}>
        <div class="row" style={styles.row}>
          <div>[]</div>
          <div>Two</div>
          <div>Three</div>
        </div>
          <div class="row" style={styles.row}>
          <div>Four</div>
          <div>Five</div>
          <div>Six</div>
        </div>
        <div class="row" style={styles.row}>
          <div>Seven</div>
          <div>Eight</div>
          <div>Nine</div>
        </div>
      </div>
    );
  }
}

const styles = {
  col: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
}