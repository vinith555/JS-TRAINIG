const a = document.getElementById("di");
function dis(val){
    a.value+=val;
}
function clearr(){
    a.value = "";
}
function calculate(){
    try{
        a.value = eval(a.value);
    }catch(error
    ){
        console.log("enter the correct value");
    }
}