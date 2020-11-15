import { abundanceCalculator } from './src/actions/abundance';

class RandomSmart {
  aboundance(obj) {
    return abundanceCalculator(obj);
  }
}

export default RandomSmart = new RandomSmart();
