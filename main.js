/*PLAN
Create 3 arrays in separate file, with 1 figure in common
Export from arrays.js, import into main.js
Write instructions for kata
Populate arrays
Write tests for function
Write working function to complete kata
Leave starting function for users
}
*/

/* 
👉 Write your kata here!
You are approaching a door that requires a passcode. This pin can be found from two different arrays, taking one digit from each. 
The clue provided to you states that the two arrays have one digit in common. The digits needed to calculate the passcode are one index prior to the common digit.
Return the sum of the two digits.

For example
If you have arrays of [ 1, 2, 3, 4, 5 ] and [ 9, 8, 7, 6, 5], the pin numbers will be 4 and 6, both one index before the common number 5. The return would be 10.
*/

//👉 Write the function your CodeWarriors will start with below here:
export default function inCommon(a, b) {
    for(let i = 0; i < a.length; i++){
        if(b.includes(a[i])){
          for(let j = 0; j < b.length; j++){
            if(b[j] === a[i]){
                let second = b[j-1]
                let first = a[i-1]
                return (first + second)
            }
          }
        }
    }
};