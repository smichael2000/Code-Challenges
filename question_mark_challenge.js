// Sheri Michael - Question Mark Challenge June 25, 2018
// Create function QuestionMarks() that reads a string of numbers, letters and characters.
// The function identifies number pairs that add to 10 and returns true if there are 3 ? between these number pairs
// Returns true for every 3 ? between every number pair sums to 10
// else the function returns false

function QuestionMarks(str) {
  //Iterate for first number in pair
  for(var x = 0; x < str.length; x++) {
    //Iterate for second number in pair
    for(var y = x+1; y < str.length; y++) {
        if (Number(str[x]) + Number(str[y]) == 10) {
          console.log((str[x]) + (str[y]) + " is 10");
          //Create new array beginning str[x+1] & ending str[y]
          //Array contains only ?
          if (str.slice(x+1,y).split('?').length-1 >= 3) {
            return true
          } // end of if(str.slice(x+1,y).split('?').length >= 3
          else {
            return false
          }
        } // end of if (Number(str[x]) + Number(str[y]) === 10)
    } // end of for(var y= x+1; y < str.length; y++)
  } // end of for(var x = 0; x < str.length; x++)
} // end of function

//test function QuestionMarks()
QuestionMarks("bcc?7??ccc?2tt1??????5");
QuestionMarks("bb6?9");
