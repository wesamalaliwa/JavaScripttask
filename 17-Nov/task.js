async function get (){
    const res= await fetch("https://fedeperin-harry-potter-api-en.herokuapp.com/characters/" );
    

    var data = await res.json();
    console.log(data)
    for (var i=0;i<data.length;i++)
    {
        // document.writeln("<h1>"+data[i].id+"<h1>")
        // document.writeln("<h1>"+data[i].character+"<h1>")
        // document.writeln("<h1>"+data[i].nickname+"<h1>")
        // document.write("<img src=" +data[i].image + ">" );
        var option= new Option (data[i].character,data[i].image);
        const select = document.querySelector('select'); 
        select.add(option);
    
    }
    
   
}
get();

function change(){
    const select = document.querySelector('select').value; 
    document.getElementById("img").src=select;
}


