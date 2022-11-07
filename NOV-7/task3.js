let names=["wesam","rahma","sami","sara"];

// function shorterInArray() {
//     for(let x =0; x<names.length; x++){
    
    
//         if((names[0].length) < (names[1].length))
//         return names[0];
    
//         else if ((names[1].length) < (names[2].length))
//         return names[1];
    
//         else if ((names[2].length) < (names[3].length))
//         return names[2];
    
//         else
//         return names[3];
//     }

// }

function shorterInArray(name){
    let minLength=1000;
    let minName="";
    for (let i = 0; i < name.length; i++) {
        if (name[i].length <minLength) {
            minLength=name[i].length;
            minName=name[i];            
        }        
    }
    return minName;
}
document.write(shorterInArray(names));