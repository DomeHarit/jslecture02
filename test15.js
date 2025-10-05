//4.have parametor , has return
function sumNumber(n1,n2){
    return n1 + n2
}

function showHelloAndBye( fname,iname){
    console.log(`สวัสดี${fname} ${iname}`);
    return `ลาก่อน${fname}${iname}`
}

console.log(`10+20 = ${sumNumber(10,20)}`);

console.log(showHelloAndBye ('Sombat',"jaidee"));