// 


// 1.   kilometerToMeter
function kilometerToMeter(meter) {
    var kilometer = meter * 1000;
    return kilometer;
}
  var convert = kilometerToMeter(1);
  console.log(convert);



  
// 2.budgetCalculator 
  function budgetCalculator (watch, mobile, laptop) {
    var total = watch * 50 + mobile * 100 + laptop * 500;
    return total;
  }
var result = budgetCalculator (3, 5, 7);
console.log(result);
  


  
// 3.  hotelCost
function totalAmountCalculator(day) {
var totalAmount = 0;
if (day <= 10){
    totalAmount = day * 100; 
}
else if ( day <= 20){
    var firstPartDay = 10 * 100;
    var remaining = day - 10;
    var secondPartDay = remaining * 80;
    totalAmount = firstPartDay + secondPartDay;
}
else {
    var firstPartDay = 10 * 100;
    var secondPartDay = 10 * 80;
    var remaining = day - 20;
    var thirdPartDay = remaining * 50;
    totalAmount = firstPartDay + secondPartDay + thirdPartDay;
}
return totalAmount;
}
var result = totalAmountCalculator(25);
console.log(result);
      



 // 4. megaFriend
function result([x, y, z, atc]) {
//   var friend = ["Jamal", "Mahi", "Joy", "Anika", Rashed];
    var mega = arguments[0];
    for (i= 0; i < arguments.length; i++){
      if (arguments[i].length > mega.length){
        mega = arguments[i];
      }
    }
    return mega;
}
var result = ("Jamal", "Mahi", "Joy", "Anika", "Rashed");
console.log(result);