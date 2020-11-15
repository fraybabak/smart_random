const  { abundanceCalculator } = require('./src/actions/abundance')

class RandomSmart {
  aboundance(obj) {
    return abundanceCalculator(obj);
  }
}

module.exports = new RandomSmart();
