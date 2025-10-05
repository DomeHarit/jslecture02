//call back function
function showHello (){
    console.log('hello');
}
const hi = () =>{
    return 'hi'
}

function wow(p1,p2,p3 ,p4){
    console.log('------------------');
    console.log(p1);
    p2()
    console.log( p3() );
    p4()
    console.log('------------------');
}
wow("Sombat", showHello , hi ,()=> { console.log('ei ei');})