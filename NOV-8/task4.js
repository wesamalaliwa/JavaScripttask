function onchangepas (){
let y=document.getElementById("passs").value;
if (y.length<6) {
    document.getElementById("sp").innerHTML="too short";
    document.getElementById("sp").style.color="red";
}


}
function onchangepass (){
    let x=document.getElementById("confirm").value;
    let y=document.getElementById ("passs").value;
    if (y!=x) {
        document.getElementById("spa").innerHTML="password dont match ";
        document.getElementById("spa").style.color="red";
    }
    
    else{
        document.getElementById("sub").style.display="inline";
    }
    }

