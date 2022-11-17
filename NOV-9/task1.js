function onclickit(){
localStorage.setItem("name",document.getElementById("textname").value);
let Name= localStorage.getItem("name");

localStorage.setItem("age",document.getElementById("yourage").value);
let age= localStorage.getItem("age");

localStorage.setItem("gender",document.getElementById("male").checked);
let male= document.getElementById("male").checked;

localStorage.setItem("gender1",document.getElementById("female").checked);
let female= document.getElementById("female").checked;

localStorage.setItem("Descriptionq",document.getElementById("Description").value);
let Description= localStorage.getItem("Descriptionq");

localStorage.setItem("majoor",document.getElementById("major").value);
let majoor= localStorage.getItem("majoor");

localStorage.setItem("js1",document.getElementById("js").value);
let js1= localStorage.getItem("js1");

localStorage.setItem("cee",document.getElementById("c#").value);
let cee= localStorage.getItem("cee");

localStorage.setItem("JAVAA",document.getElementById("JAVA").value);
let JAVAA= localStorage.getItem("JAVAA");

 document.getElementById("div1").style.display="block";
document.getElementById("p1").innerHTML+= Name;

document.getElementById("p2").innerHTML+= age;
var x=document.getElementById("male").checked;
var y=document.getElementById("female").checked;

if(x)
document.getElementById("p3").innerHTML+= document.getElementById("male").checked;
else
document.getElementById("p3").innerHTML+= y;

document.getElementById("p4").innerHTML+= Description;

document.getElementById("p5").innerHTML+= majoor;


var a= document.getElementById("vehicle1");

if(a.checked){
    document.getElementById("l1").innerHTML+= js1;

}
    else {
        document.getElementById("vehicle1").style.display="none"; 
    }

    var b= document.getElementById("vehicle2");

if(b.checked){
    document.getElementById("l2").innerHTML+=cee;

}
    else {
        document.getElementById("vehicle2").style.display="none"; 
    }

    var z= document.getElementById("vehicle3");

if(z.checked){
    document.getElementById("l3").innerHTML+=JAVAA;

}
    else {
        document.getElementById("vehicle3").style.display="none"; 
    }

}

