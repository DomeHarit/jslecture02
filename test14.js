//3.no parametor , has return
function showHello(){
    return 'hello'
}
function showSmile(){
    console.log("Smile");
    return '^-^';
}
function showSad(){
    console.log("sad");
    return "T-T";

}

console.log( showHello());
console.log( showSmile());
let data = showSad()
console.log(data);
