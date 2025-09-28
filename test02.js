//identifier ชื่อdev ( ตั้งขึ้นเอง ตัวแปร ฟังชั่น ค่าคงที่ คลาส ออปเจ็กต์ )ต้องเป็นไปตามกฎการตั้งชื่อ
//ไม่เว้นวรรค ไม่ขึ้นด้วยตัวเลข ไม่ใช้คำสงวน ไม่ใช้สัญลักษณ์พิเศษ ยกเว้น _ $
//ควรตั้งเป็น pascal case ,camel case , snake case
//        StudentScore ,studenScore ,student_score/STUDENT_SCORE

// Code Block คือ ขอบเขตการทำงานโปรแกรม ภายใต้ {}
//variable ตัวแปร คือ ชื่อที่ dev ตั้งขึ้นเพื่อไว้เก็บข้อมูลในโปรแกรม
var dti01 = 'aaa' //แก้ใขได้ Global ใช้ที่ไหนก็ได้
let dti02 = 'bbb' //แก้ใขได้ Local *** ใช้เฉพาะที่
const dti03 = 'ccc' //แก้ใขไม่ได้ Local *** ใช้เฉพาะที่
{
    var dti04 = 'ddd'
    let dti05 = 'eee'
    const dti06 = 'fff'
    console.log(dti01,dti02,dti03,dti04,dti05,dti06)
}
console.log(dti01,dti02,dti03,dti04,dti05,dti06)