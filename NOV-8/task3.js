function changeFontStyle(){
let y=document.getElementById("fontform").value;
if (y=="Arial"){
document.getElementById("pargh").style.fontFamily="Arial, Helvetica, sans-serif";

}
else
if (y=="impact"){
    document.getElementById("pargh").style.fontFamily="Impact";
    
    }
    else
    if (y=="cursive"){
        document.getElementById("pargh").style.fontFamily="cursive";
        
        }


}
function changeFontsize(){
    let y=document.getElementById("fontsize").value;
    if (y=="12pt"){
    document.getElementById("pargh").style.fontSize= "12pt";
    
    }
    else
    if (y=="24pt"){
        document.getElementById("pargh").style.fontSize= "24pt";
        
        }
        else
        if (y=="34pt"){
            document.getElementById("pargh").style.fontSize= "34pt";
            
            }
    
    
    }
    function onchangeitalic(){
let y=document.getElementById("it").checked;
if(y){
    document.getElementById("pargh").style.fontStyle="italic";
}
    }

    function onchangebold(){
        let y=document.getElementById("bo").checked;
        if(y){
            document.getElementById("pargh").style.fontWeight="bold";
        }
            }

            function onchangeunderline(){
                let y=document.getElementById("unl").checked;
                if(y){
                    document.getElementById("pargh").style.textDecoration="underline";
                }
                    }

