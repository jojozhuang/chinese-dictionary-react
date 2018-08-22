import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

class WordOutput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      // http://www.zd9999.com/zi/htm/1.htm
      <Table responsive striped bordered condensed hover>
        <thead>
          <tr>
            <th>Word(字):</th>
            <th>{this.props.word.word}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Old Word(旧体字):</td>
            <td>{this.props.word.oldword}</td>
          </tr>
          <tr>
            <td>Strokes(笔画数):</td>
            <td>{this.props.word.strokes}</td>
          </tr>
          <tr>
            <td>Pinyin(拼音):</td>
            <td>{this.props.word.pinyin}</td>
          </tr>
          <tr>
            <td>Radicals(部首):</td>
            <td>{this.props.word.radicals}</td>
          </tr>
          <tr>
            <td>Explanation(解释):</td>
            <td>{this.props.word.explanation}</td>
          </tr>
          <tr>
            <td>More(更多解释):</td>
            <td>{this.props.word.more}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

WordOutput.propTypes = {
  word: PropTypes.object.isRequired,
};

export default WordOutput;
