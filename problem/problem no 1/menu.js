function countValidNumbers() {
    let count = 0;
    for (let i = 1; i <= 9; i++) {
      for (let j = i + 1; j <= 9; j++) {
        count++;
        for (let k = j + 1; k <= 9; k++) {
          count++;
        }
      }
    }
    return count;
  }
  
  console.log(countValidNumbers());
  