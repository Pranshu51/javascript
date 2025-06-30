// comparison operators


// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  //false
console.log(null == 0);//false
console.log(null >= 0);//true because comparison and == work differntly comparision me pehle null converthoganumber me 0 fir compare hoga 0 ke saath to equal to h hi isiliye true aa jaega

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);//we have to avoooid these types of comparision

// ===  strict check kkarega ki data type same h ya nhi value+data type

console.log("2" === 2);