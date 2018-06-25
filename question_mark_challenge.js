// Sheri Michael - Question Mark Challenge June 25, 2018
// Create function QuestionMarks() that reads a string of numbers, letters and characters.
// The function identifies number pairs that add to 10 and returns true if there are 3 ? between these number pairs
// else the function returns false


var nums = '123456789';
var qm_cnt = 0;

function QuestionMarks(str) {
  //looking for first number in pair
  for(x = 0; x < str.length ; x++) {
      if (nums.indexOf(str[x]) !== -1) {
        var n1 = str[x];
        // console.log(n1);
        // looking for second number in pair
        for (y=str[x]; y<str.length; y++) {
          if (nums.indexOf(str[y]) !== -1) {
            var n2 = str[y];
            // console.log(n2);
            //finding number pairs that sum to 10
            if(n1 + n2 == 10) {
              // looking for 3 ? between number pairs that sum to 10
              for(z=str[x]; z<str[y]; z++) {
                if(str[z]=='?') {
                  qm_cnt += 1;
                  if (qm_cnt == 3) {
                    return true;
                    break;
                  } //end of if (qm_cnt == 3)
                } // end of if(str[z]=='?')
              } // end of for(z=str[x]; z<str[y]; z++)
            } // end of if(n1 + n2 == 10)
          } // end of if (nums.indexOf(str[y]) !== -1)
        } //end of for (y=str[x]; y<str.length; y++)
      } //end of if nums.indexOf(str[y]) !== -1
  } //end of for(x = 0; x < str.length ; x++)

  return false;
} //end of func

//test function QuestionMarks()
console.log(QuestionMarks("bcc?7??ccc?3tt1??????5"));
// console.log(QuestionMarks("bb6?9"));
