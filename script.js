function love(){
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var res = Math.floor(Math.random()*100);
    var par = document.getElementById("par");
    par.innerHTML=
    "successs to get married "+" "+name1+" "+name2+" "+res +"%"
}