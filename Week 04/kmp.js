function kmp (source, pattern) {
  // 计算table
  let table = new Array(pattern.length).fill(0);
  {
    let i = 1;
    let j = 0;
    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        i++;
        j++;
        table[i] = j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          // table[i] = j;
          i++;
        }
      }
    }
  }
  {
    let i = 0;
    let j = 0;
    while(i < source.length) {
      // if (j === pattern.length) {
      //   return true
      // }
      if (pattern[j] === source[i]) {
        i++;
        j++
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          i++
        }
      }
      console.log('===>', j, pattern.length);
      if (j === pattern.length) return true
    }
    return false
  }
  console.log('table===>', table);
}
console.log('===>', kmp('ceefx', 'ceefx'));
// a b c d a b c e
// 0 0 0 0 0 1 2 3

// i = 4
// j = 0
// a === a

// i = 5,
// j = 1,

// i = 6,
// j = 2

// i = 7,
// j = 3

// j = 0