import HttpHelper from './HttpHelper';

class DictionaryApi {
  static requestHeaders() {
    return { 'Content-Type': 'application/json' };
  }

  static getWord(word) {
    return HttpHelper.fetch(
      `${process.env.API_URL}/api/word/${word}`,
      'GET',
      this.requestHeaders(),
      null,
    );
  }

  static getIdiomByAbbr(abbr) {
    return HttpHelper.fetch(
      `${process.env.API_URL}/api/idiom1/${abbr}`,
      'GET',
      this.requestHeaders(),
      null,
    );
  }

  static getIdiomByWord(word) {
    return HttpHelper.fetch(
      `${process.env.API_URL}/api/idiom2/${word}`,
      'GET',
      this.requestHeaders(),
      null,
    );
  }

  static getRiddle(riddle) {
    return HttpHelper.fetch(
      `${process.env.API_URL}/api/riddle/${riddle}`,
      'GET',
      this.requestHeaders(),
      null,
    );
  }
}

export default DictionaryApi;
