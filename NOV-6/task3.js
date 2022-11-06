document.write(  
    "all numbers can be divided on 13 without remains between 1-1000" + "<hr>"
    )
text="";
for(var i=1 ; i <= 1000 ; i++){
    if(i%13 == 0){
        text+="-" +"  " + i + "<br>" ; 
      
    }

}

document.write(text);