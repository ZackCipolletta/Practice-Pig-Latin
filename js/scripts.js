function pigLatin(arg) {
  let x = arg.split('')
  for(let i = 0; i < x.length ; i++) {
      if (x[0] === 'a' || x[0] === 'e' || x[0] === 'i' || x[0] === 'o' || x[0] === 'u') {
          console.log('vowel')
          break;
      } else {
          if (x[i] === 'a' || x[i] === 'e' || x[i] === 'i' || x[i] === 'o' || x[i] === 'u') {
              console.log('consonant');
              console.log("hit a vowel at index:" + ' ' + (i))
          break;
          }
      }
  }
};

// function consonantsFunc() {
//     if (x[i] === 'a' || x[i] === 'e' || x[i] === 'i' || x[i] === 'o' || x[i] === 'u') {
//         console.log("hit a vowel at index:" + ' ' + (i))
//     }
// }




// for(let i = 0; i < 3; i ++){ 
//     let numberOfConsonants = 0;
//     numberOfConsonants ++;
//     console.log('consonant')
//     if (x[i] === 'a' || x[i] === 'e' || x[i] === 'i' || x[i] === 'o' || x[i] === 'u'[i]) {
//         console.log('hit a vowel')
//         break;
//     }
// }