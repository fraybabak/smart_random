const  { abundanceCalculator } = require('./src/actions/abundance')

class RandomSmart {
  aboundance(obj) {
    return abundanceCalculator(obj);
  }
}

export default RandomSmart = new RandomSmart();
