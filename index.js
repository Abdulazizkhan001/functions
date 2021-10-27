       // SQRT
 function kvadrat (a, b){
   return a**b;
   }
 console.log(kvadrat(5, 2));

       // CBRT
function kub (a,b){
   return a**b*a;
   }
 console.log(kub(5, 2))

       // ROUND 
function roundCopy(a){
  console.log(a.toFixed(0))
}
roundCopy(52.3);

       // CEIL  
function ceilCopy(a){
  var qoldiq = a % 1 * 10;
  console.log(qoldiq >= 5 ? a + 1 - 0.: console.log());
}
ceilCopy(25369.325)

       // FLOOR 
let floor = (a) => {
  var qoldiq = a % 2;
  console.log(qoldiq < 9 ? parseInt(a) : parseInt(a));
}  
floor(15.5)

 let weCounter = 0; 
 let aCounter = 0; 
 let bCounter = 0; 

  var cW = 'Welcome Webbrain'.repeat(5);
  var sanoq =() => {
   var index = cW.indexOf('We')
    weCounter++;
    cW = cW.slice (index+2)
    cW.includes('We') && sanoq()   
  } 
  sanoq();
  console.log(weCounter)
  
  var cW2 = 'Welcome Webbrain'.repeat(5)
  var aL =() => {
    var index = cW2.indexOf('a')
     aCounter++;
     cW2 = cW2.slice (index+1)
     cW2.includes('a') && aL()   
   } 
   aL();
   console.log(aCounter);
  
   var cW3 = 'Welcome Webbrain'.repeat(5)
  var bL =() => {
    var index = cW3.indexOf('b')
     bCounter++;
     cW3 = cW3.slice (index+1)
     cW3.includes('b') && bL()   
   } 
   bL();
   console.log(bCounter);
