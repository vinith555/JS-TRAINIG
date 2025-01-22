function date (){
    const da = new Date();
    const hour = da.getHours().toString().padStart(2,0);
    const min = da.getMinutes().toString().padStart(2,0);
    const sec = da.getSeconds().toString().padStart(2,0);
   

    document.getElementById("s1").textContent = `${hour}`;
    document.getElementById("s2").textContent = `${min}`;
    if(hour >= 12){
        document.getElementById("s3").textContent = `${sec} PM`;
    }
    else{
        document.getElementById("s3").textContent = `${sec} AM`;
    }
}
date();
setInterval(date,1000);
