function onclickit(){
localStorage.setItem("name",document.getElementById("textname").value);
let Name= localStorage.getItem("name");

localStorage.setItem("age",document.getElementById("yourage").value);
let age= localStorage.getItem("age");

localStorage.setItem("gender",document.getElementById("male").value);
let gender= localStorage.getItem("gender");

localStorage.setItem("gender1",document.getElementById("female").value);
let gender1= localStorage.getItem("gender1");

localStorage.setItem("Descriptionq",document.getElementById("Description").value);
let Descriptionq= localStorage.getItem("Descriptionq");

localStorage.setItem("majoor",document.getElementById("major").value);
let majoor= localStorage.getItem("majoor");

localStorage.setItem("JavaScript",document.getElementById("JavaScript").value);
let JavaScript= localStorage.getItem("js");

localStorage.setItem("cee",document.getElementById("c#").value);
let cee= localStorage.getItem("cee");

localStorage.setItem("JAVAA",document.getElementById("JAVA").value);
let JAVAA= localStorage.getItem("JAVAA");

document.getElementById("DD").style.display="block";
document.getElementById("p1").innerHTML+= Name;

document.getElementById("p2").innerHTML+= Age;
var x=document.getElementById("male").value;
var y=document.getElementById("female").value;

if(x=="male")
document.getElementById("p3").innerHTML+= x;
else
document.getElementById("p3").innerHTML+= y;

document.getElementById("p4").innerHTML+= Description;

document.getElementById("p5").innerHTML+= major;


var a= document.getElementById("vehicle1");

if(a.checked){
    document.getElementById("l1").innerHTML+= html;

}
    else {
        document.getElementById("vehicle1").style.display="none"; 
    }

    var b= document.getElementById("vehicle2");

if(b.checked){
    document.getElementById("l2").innerHTML+=c;

}
    else {
        document.getElementById("vehicle2").style.display="none"; 
    }

    var z= document.getElementById("vehicle3");

if(z.checked){
    document.getElementById("l3").innerHTML+=z.id;

}
    else {
        document.getElementById("vehicle3").style.display="none"; 
    }

}

