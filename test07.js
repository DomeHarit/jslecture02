// switch พิสจน์หลายครั้ง
//พิสูจน์ได้เฉพาะเท่ากัน หรือไม่เท่ากัน

let bus_no = 91

switch ( bus_no ){
    case 84 : console.log('ไร่ขิง');
        break
    case 57 : console.log('พาต้า');
        break
    case 123 : console.log('สนามหลวง');
        break        
    case 515 : console.log('อนุเสารีย์');
        break        
    default : console.log('ไม่รู้จัก');
}