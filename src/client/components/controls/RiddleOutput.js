import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

class RiddleOutput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      // http://www.zd9999.com/xhy/htm/xhy1.htm
      <Table responsive striped bordered condensed hover>
        <thead>
          <tr>
            <th>Riddle(歇后语)</th>
            <th>Answer(答案)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.riddles.map(riddle => (
            <tr key={riddle.riddle}>
              <td>{riddle.riddle}</td>
              <td>{riddle.answer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

RiddleOutput.propTypes = {
  riddles: PropTypes.array.isRequired,
};

export default RiddleOutput;
