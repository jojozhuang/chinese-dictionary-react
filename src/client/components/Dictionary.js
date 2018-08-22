import React from 'react';
import {
  Form,
  FormGroup,
  Col,
  Radio,
  Button,
  ControlLabel,
  FormControl,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';
import WordOutput from './controls/WordOutput';
import IdiomOutput from './controls/IdiomOutput';
import RiddleOutput from './controls/RiddleOutput';
import TypeRadioButton from './controls/TypeRadioButton';

import DictionaryApi from '../api/DictionaryApi';

class Dictionary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'word',
      searched: false,
      keyword: '',
      word: {
        word: '',
        oldword: '',
        strokes: '',
        pinyin: '',
        radicals: '',
        explanation: '',
        more: '',
      },
      idiom: {
        derivation: '',
        example: '',
        explanation: '',
        pinyin: '',
        word: '',
        abbreviation: '',
      },
      riddles: [],
      response: {
        status: '0',
        message: '',
      },
    };

    this.handleRun = this.handleRun.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  getValidationState() {
    const length = this.state.keyword.length;
    if (length > 3) return 'success';
    // else if (length > 1) return 'warning';
    else if (length === 0) return 'error';
    return null;
  }

  handleKeywordChange(e) {
    this.setState({ keyword: e.target.value });
  }

  handleOptionChange(event) {
    this.setState({ searched: false });
    this.setState({
      selectedOption: event.target.value,
    });
  }

  handleRun(event) {
    event.preventDefault();
    const { selectedOption } = this.state;
    console.log(selectedOption);
    if (selectedOption === 'word') {
      DictionaryApi.getWord(this.state.keyword)
        .then((res) => {
          this.setState({ word: res });
          this.setState({ searched: true });
        })
        .catch((error) => {
          console.log(error);
          // this.handleError(error);
        });
    } else if (selectedOption === 'idiomWord') {
      DictionaryApi.getIdiomByWord(this.state.keyword)
        .then((res) => {
          this.setState({ idiom: res });
          this.setState({ searched: true });
        })
        .catch((error) => {
          console.log(error);
          // this.handleError(error);
        });
    } else if (selectedOption === 'idiomAbbr') {
      DictionaryApi.getIdiomByAbbr(this.state.keyword)
        .then((res) => {
          this.setState({ idiom: res });
          this.setState({ searched: true });
        })
        .catch((error) => {
          console.log(error);
          // this.handleError(error);
        });
    } else {
      DictionaryApi.getRiddle(this.state.keyword)
        .then((res) => {
          this.setState({ riddles: res });
          this.setState({ searched: true });
        })
        .catch((error) => {
          console.log(error);
          // this.handleError(error);
        });
    }
  }

  render() {
    return (
      <div className="container">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail" validationState={this.getValidationState()}>
            <Col componentClass={ControlLabel} sm={2}>
              Keyword(关键词):
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                value={this.state.keyword}
                placeholder="Enter search text"
                onChange={this.handleKeywordChange}
              />
              <FormControl.Feedback />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Type(类型):
            </Col>
            <Col sm={10}>
              <TypeRadioButton
                selectedOption={this.state.selectedOption}
                onChange={this.handleOptionChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button bsStyle="success" type="button" onClick={this.handleRun}>
                Search
              </Button>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              {this.state.searched &&
                this.state.selectedOption === 'word' && <WordOutput word={this.state.word} />}
              {this.state.searched &&
                (this.state.selectedOption === 'idiomWord' ||
                  this.state.selectedOption === 'idiomAbbr') && (
                  <IdiomOutput idiom={this.state.idiom} />
                )}
              {this.state.searched &&
                this.state.selectedOption === 'riddle' && (
                  <RiddleOutput riddles={this.state.riddles} />
                )}
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Dictionary;
