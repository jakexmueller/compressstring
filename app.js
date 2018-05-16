//"use strict"
	
	


console.log('aaabbbbbccccaacccbbbaaabbbaaa')
stringCompression('aaabbbbbccccaacccbbbaaabbbaaa')
function stringCompression (str) {
  
  var output = '';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i+1]) {
      output += count + str[i];
      count = 0;
    }
  }
  console.log(output);
}
