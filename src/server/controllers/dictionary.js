// const SleepUtil = require('../utils/').SleepUtil;
const FileApi = require('../api/FileApi');
const jsonQuery = require('json-query');

exports.get_idiom1 = (req, res) => {
  const abbr = req.params.abbr;
  // SleepUtil.sleep();

  /*
  const data = {
    people: [
      { name: 'Matt', country: 'NZ' },
      { name: 'Pete', country: 'AU' },
      { name: 'Mikey', country: 'NZ' },
    ],
  };

  console.log(data.toString());

  const result = jsonQuery('people[country=NZ]', {
    data,
  });

  console.log('result:', result.value);
  res.status(200).send(result.value);
*/

  /*
  FileApi.getFile('test.json', (data) => {
    const result = jsonQuery('people[country=NZ]', { data });
    console.log('result:', result.value);
    res.status(200).send(result.value);
  });
  */
  FileApi.getFile('idiom.json', (data) => {
    console.log('abbr', abbr);
    const result = jsonQuery(`idiom[abbreviation=${abbr}]`, { data });
    console.log('result:', result.value);
    res.status(200).send(result.value);
  });
};

exports.get_idiom2 = (req, res) => {
  const word = req.params.word;
  FileApi.getFile('idiom.json', (data) => {
    console.log('word', word);
    const result = jsonQuery(`idiom[word=${word}]`, { data });
    console.log('result:', result.value);
    res.status(200).send(result.value);
  });
};

exports.get_xiehouyu = (req, res) => {
  const riddle = req.params.riddle;
  console.log('riddle', riddle);

  FileApi.getFile('xiehouyu.json', (data) => {
    const result = jsonQuery(`xiehouyu[riddle=${riddle}]`, { data });
    console.log('result:', result.value);
    res.status(200).send(result.value);
  });
};

exports.get_word = (req, res) => {
  const word = req.params.word;
  console.log('word', word);

  FileApi.getFile('word.json', (data) => {
    const result = jsonQuery(`words[word=${word}]`, { data });
    console.log('result:', result.value);
    res.status(200).send(result.value);
  });
};
