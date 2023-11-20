const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      let temp = [];
      temp.push(i);
      results[sentence[i]] = temp;
    }
  }
  return results;
};

module.exports = letterPositions;
