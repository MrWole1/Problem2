function namesScores(arr) {
    arr.unshift(0)
    arr = arr.sort()
  
    function nameScoreCalc(word, i){
      let sum = 0
      let score;
      let alpha = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      for (let i = 0 ; i < word.length; i++){
          sum+= alpha.indexOf(word[i].toLowerCase())
      }
        return sum*i
    }
  
    let total = 0 
    for (let i = 0 ; i < arr.length; i++){
      total +=nameScoreCalc(arr[i], i)
    }
    return total
  }
  