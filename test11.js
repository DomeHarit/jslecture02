// loop กับ  object
let dataObj = {
  name: "Sombat",
  age: 20,
  isStudent: true,
  address: {
    province: "Nonthaburi",
    contry: "Thailand",
  },
  food: ["KFC", "Pizza", "Burger"],
}
//เข้าถึงข้อมูลแต่ละตัวของ object ใช้ key
console.log(dataObj.age)
console.log(dataObj.address.province)
console.log(dataObj.food[2])
dataObj.address.contry ="USA"
console.log(dataObj.address.contry);
console.log('---------------------');

//เข้าถึงทุกข้อมูลใน object
for ( let key in dataObj ){
    console.log(key);
}
console.log('--------------------');

for ( LET [key,value] of Object.entries(dataObj)){
    console.log(key);
    console.log(value);
}
console.log('-------------------');
