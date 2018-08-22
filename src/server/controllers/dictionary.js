// const SleepUtil = require('../utils/').SleepUtil;
const FileApi = require('../api/FileApi');
const jsonQuery = require('json-query');

exports.get_word = (req, res) => {
  const word = req.params.word;
  console.log('word', word);

  if (word) {
    FileApi.getFile('word.json', (data) => {
      const result = jsonQuery(`words[word=${word}]`, { data });
      console.log('result:', result.value);
      res.status(200).send(result.value);
    });
  }
};

exports.get_idiom1 = (req, res) => {
  const abbr = req.params.abbr;
  // SleepUtil.sleep();
  console.log('abbr', abbr);

  if (abbr) {
    FileApi.getFile('idiom.json', (data) => {
      console.log('abbr', abbr);
      const result = jsonQuery(`idiom[abbreviation=${abbr}]`, { data });
      console.log('result:', result.value);
      res.status(200).send(result.value);
    });
  }
};

exports.get_idiom2 = (req, res) => {
  const word = req.params.word;
  console.log('word', word);
  if (word) {
    FileApi.getFile('idiom.json', (data) => {
      console.log('word', word);
      const result = jsonQuery(`idiom[word=${word}]`, { data });
      console.log('result:', result.value);
      res.status(200).send(result.value);
    });
  }
};

exports.get_riddle = (req, res) => {
  const riddle = req.params.riddle;
  console.log('riddle', riddle);

  if (riddle) {
    FileApi.getFile('riddle.json', (data) => {
      const result = jsonQuery('riddle[*:contains]', {
        data,
        locals: {
          contains(item) {
            return item.riddle.indexOf(riddle) !== -1;
          },
        },
      });
      console.log('result:', result.value);
      res.status(200).send(result.value);
    });
  }
};

// test jsonQuery
exports.get_test = (req, res) => {
  const data = {
    people: [
      { name: 'Matt', country: 'NZ' },
      { name: 'Pete', country: 'AU' },
      { name: 'Mikey', country: 'NZ' },
    ],
  };

  console.log(data.toString());

  const result = jsonQuery('people[country=NZ]', { data });
  // const result = jsonQuery('people[*name~/^.a/i]', { data, allowRegexp: true });

  console.log('result:', result);

  res.status(200).send(result.value);
};
