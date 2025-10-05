//Arrow Function
//ใช้หลักการเดียวกับ Expression function 

let data1 = () =>{
    console.log(11111);
}

const data2 = (n1,n2) =>{
    console.log(n1 +n2);
    return 'wow'
}
let data3 = 555

data1()
console.log(data2(100 ,200)); 
data1 = 'hello'
console.log(data1);

console.log('----------------');

//กรณี parameter มีตัวเดียว ไม่จำเป็นต้องใช้ ()
let info1 = param1 => {
    console.log(param1);
}

//กรณี คำสั่งมีคำสั่งเดียว มีตัวเดียว ไม่จำเป็นต้องมี {}
let info2 = param1 => console.log(param1);
let info3 = ()=>{
    return 111;
}

//กรณีมีคำสั่งเดียวและเป็น return ไม่จำเป็นต้องใช้ {} และไม่ต้องมี return
let info4 = ()=> 111