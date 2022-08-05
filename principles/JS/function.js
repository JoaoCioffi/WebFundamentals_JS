// Main Structure
function euclideanDistance(p1,p2){
    /*
   calculates the euclidean distance between
   two given points
   */

   // p1 coordinates
   let x1 = p1[0];
   let y1 = p1[1];

   // p2 coordinates
   let x2 = p2[0];
   let y2 = p2[1];

   // euclidean distance
   let d = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

   return d
}

console.log(euclideanDistance([-1.05,3.45],[4.83,-2.26]))


// Anonymized function
const euclideanDistance2 = function (p1,p2){ // defining a variable as a function (with no name)
    /*
   calculates the euclidean distance between
   two given points
   */

   // p1 coordinates
   let x1 = p1[0];
   let y1 = p1[1];

   // p2 coordinates
   let x2 = p2[0];
   let y2 = p2[1];

   // euclidean distance
   let d = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

   return d
}

console.log(euclideanDistance2([-1.05,3.45],[4.83,-2.26]))


// Arrow Function
const euclideanDistance3 = (p1,p2) => {
     /*
   calculates the euclidean distance between
   two given points
   */

   // p1 coordinates
   let x1 = p1[0];
   let y1 = p1[1];

   // p2 coordinates
   let x2 = p2[0];
   let y2 = p2[1];

   // euclidean distance
   let d = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

   return d
}

console.log(euclideanDistance3([-1.05,3.45],[4.83,-2.26]))


// Implicit return
const euclideanDistance4 = (p1,p2) => Math.sqrt((p2[0]-p1[0])**2 + (p2[1]-p1[1])**2)

console.log(euclideanDistance4([-1.05,3.45],[4.83,-2.26]))
