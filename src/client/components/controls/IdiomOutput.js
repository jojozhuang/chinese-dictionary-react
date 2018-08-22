import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

class IdiomOutput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      // http://www.zd9999.com/cy/htm0/1.htm
      <Table responsive striped bordered condensed hover>
        <thead>
          <tr>
            <th>Idiom(成语):</th>
            <th>{this.props.idiom.word}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pinyin(拼音):</td>
            <td>{this.props.idiom.pinyin}</td>
          </tr>
          <tr>
            <td>Explanation(释义):</td>
            <td>{this.props.idiom.explanation}</td>
          </tr>
          <tr>
            <td>Derivation(出处):</td>
            <td>{this.props.idiom.derivation}</td>
          </tr>
          <tr>
            <td>Example(示例):</td>
            <td>{this.props.idiom.example}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

IdiomOutput.propTypes = {
  idiom: PropTypes.object.isRequired,
};

export default IdiomOutput;
