let streetname = "   abuObaidhStreet   " ; 
 console.log(streetname.charAt(3)); 
 console.log(streetname.length); 
 console.log(streetname.trim().length);
 console.log(streetname.indexOf("a",5));
///////////////////////////////////////////////////////////////
const color=["Blue " , " Green "," Black ", " Yellow "," Red"];
document.writeln(color+"<br>"); 
document.writeln(color.length+"<br>");
document.writeln(color.length-1+"<br>");

color[0]="Pink";
color[3]="Blue";
color[5]=" pink";
color.push(" brown");

document.writeln(color+"<br>");

color[1]=color[2];
document.writeln(color+"<br>");
let colors=color[0];
document.writeln(colors+"<br>");

//////////////////////////////////////////////////
const cars = new Array("Saab", "Volvo", "BMW"); 
////////////////////////////////////////////// array are object
const person =["Rahma" , "Obeidat" , 23];
document.writeln(person[2]+"<br>");
document.writeln("**"+"<br>");
document.writeln(person+"<br>");

////////////////////////////////////object
const person1={FirstName:"Rahma", LastName:"Obeidat", Age:25}
document.writeln(person1.FirstName+"<br>"); 
person1.LastName="Aktham";
document.writeln(person1.LastName+"<br>"); 


////////////////////////////////////
const array=[person];
document.writeln(array+"<br>");
//////////////////////////////////////////////

function myfunctio(p1,p2){
    return p1*p2;
}
document.writeln(myfunctio(3,10));