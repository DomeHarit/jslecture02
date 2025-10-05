//function คือการทำงานหนึ่งๆ จะไม่ทำงานหากไม่เรียกใช้ call function
//เราจะเรียกใช้ function ที่ไหน เมื่อไหร่ กี่ครั้งก็ได้

//parametor คือ ตัวแปราประเภทหนึ่งใช้ได้เฉพาะใน function โดยจะเขียนอยู่ใน ()หลังชื่อฟังชั่น
//return คือคำสั่งที่มี 2 ความหมาย คือ 1.เป็นการบอกเพื่อจบฟังชั่น 2.ส่งค่ากลับไปยังจุดที่ใช้ฟังชั่น

// มี 4 รูปแบบใหญ่ๆ
// 1. no parametor , no return
function showHello(){
    console.log('hello');
}
function showHi(){
    console.log('Hi');
}
showHello()
showHi()
showHello()
showHi()