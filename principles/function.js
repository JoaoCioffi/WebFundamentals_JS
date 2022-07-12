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
