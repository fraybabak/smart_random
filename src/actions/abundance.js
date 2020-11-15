module.exports.abundanceCalculator = (items) => {
  // items are objects
  let total = 0;
  let abundances = [];
  for (i of Object.values(items)) {
    total = total + i;
  }
  // we are looping through each pair (keys,values) and pushing to abundances by (total-value)times
  for (let [key, value] of Object.entries(items)) {
    for (let i = 0; i < total - value; i++) {
      abundances.push(key);
    }
  }
  // now we have an array of items with abundance , we can simply just pick from new array.
  return abundances[Math.floor(Math.random() * abundances.length)];
};
