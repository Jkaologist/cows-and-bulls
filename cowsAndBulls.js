const getHint = (secret, guess) => {
  let hashmap = {};
  let cows = 0,
    bulls = 0;
  for (let i = 0; i < secret.length; i++) {
    hashmap[secret[i]] ? hashmap[secret[i]]++ : (hashmap[secret[i]] = 1);
  }
  for (let i = 0; i < guess.length; i++) {
    let char = guess[i];
    if (char in hashmap) {
      if (char === secret[i]) {
        bulls++;
        if (hashmap[char] <= 0) cows--;
      } else {
        if (hashmap[char] > 0) cows++;
      }
    }
    hashmap[char]--;
  }
  return `${bulls}A${cows}B`;
};

console.log(getHint("ABCD", "DBAC"));
// "1A3B"
