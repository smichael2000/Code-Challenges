// Sheri Michael - Question Mark Challenge June 25, 2018
// Create function QuestionMarks() that reads a string of numbers, letters and characters.
// The function identifies number pairs that add to 10 and returns true if there are 3 ? between these number pairs
// Returns true for every 3 ? between every number pair sums to 10
// else the function returns false

function QuestionMarks(str)
{
  ret = false;
  //First number in pair
  for(var x = 0; x < str.length; x++)
  {
    //Second number in pair
    for(var y= x+1; y < str.length; y++)
       {
        if (parseInt(str[x]) + parseInt(str[y]) === 10)
        {
          if(str.slice(x+1,y).split('?').length - 1 === 3) {
                ret = true;
                break;
            } // end of if(str.slice(x+1,y).split('?').length - 1 === 3
            else {
                return false;
            } // end of else
          } // end of if (parseInt(str[x]) + parseInt(str[y]) === 10)
      } // end offor(var y= x+1; y < str.length; y++)
  } // end of for(var x = 0; x < str.length; x++)
  return ret;
} // end of function

// //test function QuestionMarks()
QuestionMarks("bcc?7??ccc?2tt1??????5");
QuestionMarks("bb6?9");
