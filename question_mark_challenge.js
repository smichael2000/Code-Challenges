// Sheri Michael - Question Mark Challenge June 25, 2018
// Create function QuestionMarks() that reads a string of numbers, letters and characters.
// The function identifies number pairs that add to 10 and returns true if there are 3 ? between these number pairs
// Returns true for every 3 ? between every number pair sums to 10
// else the function returns false


var qm_cnt = 0;

function QuestionMarks(str)
{
  var x, y, z, abort=false;
  //looking for first number in pair
  for(x = 0; x < str.length; x++)
  {
    abort=false;
    if(parseInt(str[x]))
    {
      console.log(str[x]+" is x.");
      //looking for second number in pair
       for(y= str[x]; y < str.length && !abort; y++)
       {
         if (parseInt(str[y]) && !abort)
         {
           console.log(str[y]+" is y.")
           if (parseInt(str[x]) + parseInt(str[y]) == 10)
           {
             console.log(parseInt(str[x]) + parseInt(str[y]));
             return true;
              // looking for 3 ? between number pairs that sum to 10

           }
           else
           {
             console.log("not 10");
             abort=true;
             // return false;
           }
         }
        }
      }
    }


//       if (nums.indexOf(str[x]) !== -1) {
//         var n1 = str[x];
//         console.log(n1);
//         // looking for second number in pair
//         for (var y=str[x]; y<str.length; y++) {
//           if (nums.indexOf(str[y]) !== -1) {
//             var n2 = str[y];
//             console.log(n2);
//
//             //finding number pairs that sum to 10
//             if(n1+n2 == 10) {
//               // looking for 3 ? between number pairs that sum to 10
//               for(var z=str[x]; z<str[y]; z++) {
//                 if(str[z]=='?') {
//                   qm_cnt += 1;
//                   if (qm_cnt == 3) {
//                     return true;
//
//                   } //end of if (qm_cnt == 3)
//                 } // end of if(str[z]=='?')
//               } // end of for(z=str[x]; z<str[y]; z++)
//             } // end of if(n1 + n2 == 10)
//           } // end of if (nums.indexOf(str[y]) !== -1)
//         } //end of for (y=str[x]; y<str.length; y++)
      //end of if nums.indexOf(str[y]) !== -1
 //end of for(x = 0; x < str.length ; x++)
//   return false;
} //end of func

// //test function QuestionMarks()
QuestionMarks("bcc?7??ccc?2tt1??????5");
QuestionMarks("bb6?9");
