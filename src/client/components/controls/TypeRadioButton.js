import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Col, ControlLabel, Radio, OverlayTrigger, Tooltip } from 'react-bootstrap';

const tooltip = (
  <Tooltip id="tooltip">
    <strong>Holy guacamole!</strong> 成语-拼音首字母缩写, xgcl
  </Tooltip>
);

class TypeRadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    console.log(`You have selected ${event.target.value}`);
    this.props.onChange(event);
  }
  render() {
    return (
      <div>
        <Radio
          name="radioGroup"
          value="word"
          checked={this.props.selectedOption === 'word'}
          onChange={this.onChange}
          inline
        >
          Word(字)
        </Radio>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Radio
            name="radioGroup"
            value="idiomWord"
            checked={this.props.selectedOption === 'idiomWord'}
            onChange={this.onChange}
            inline
          >
            Idiom(成语)
          </Radio>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Radio
            name="radioGroup"
            value="idiomAbbr"
            checked={this.props.selectedOption === 'idiomAbbr'}
            onChange={this.onChange}
            inline
          >
            Idiom by Abbreviation(成语-缩写, xgcl)
          </Radio>
        </OverlayTrigger>
        <Radio
          name="radioGroup"
          value="riddle"
          checked={this.props.selectedOption === 'riddle'}
          onChange={this.onChange}
          inline
        >
          Riddle(歇后语)
        </Radio>
      </div>
    );
  }
}

TypeRadioButton.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TypeRadioButton;
