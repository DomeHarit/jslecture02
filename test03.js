//Operator 
// + _ * / $ %
console.log(20%2)
console.log(2%20)
console.log(0%500)

//comparison Operetor (True/False)== != > < >= <= === !==
//== , != ไม่สนใจ data type
console.log(111=='111') //เปรียบเทียบตัวเลขกับข้อความ

//=== , !== สนใจ data type
console.log(111==='111') //

//เปรียบเทียบข้อความ (ตัวใหญ่น้อยกว่าตัวเล็ก ,ตัวมาก่อนน้อยกว่าตัวมาหลัง ,ตัวเลขน้อยกว่าตัวอักษร)
console.log('sombat'<'somjai') //true
console.log('bangna'>='bangpoo') //false

//Logical Operator ตรรกะ !(not) ,&&(and) ,||(or)
console.log(!true) //false
console.log(!false) //true
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false


console.log(false || false)//false
console.log(false || true)//true
console.log(true || false)//true
console.log(true || true)//true

//ternary Operator เงื่อนใข ? ทำเมื่อเป็นจริง : ทำเมื่อเป็นเท็จ **

let data1 = 100 % 30 == '0' ? 'true' : "false"
console.log(data1)

//increment ++ เพิ่มตัวเองทีละ1 /decrement -- ลดตัวเองทีละ1
let data2 =10
console.log(data2);
data2++
++data2
data2++
console.log(data2);