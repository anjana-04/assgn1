function get(){
    var u=document.getElementById("name").value;
    var v=document.getElementById("pass").value;
    var x=document.getElementById("pass2").value;
    var y=document.getElementById("em").value;
    var z=document.getElementById("ph").value;
    if(u==""||y==""||z==""){
        alert("field cant be empty")
    }
    else{
        if(v!=x){
            alert("passwords dont match")
        }
        else{
            alert("successfully completed")
           window.location.href='login.html';
        }

    }
     
 
}