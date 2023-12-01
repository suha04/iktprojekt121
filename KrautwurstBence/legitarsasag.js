

function feladat()
{
    var szam1, szam2, szam3, szam4;
    szam1=Math.round(Math.random()*10000 )+1000;
    document.getElementById('ide1').innerHTML=szam1;
    szam2=Math.round(Math.random()*41)+1;
    document.getElementById('ide2').innerHTML=szam2;
    szam3=Math.round(Math.random()*10)+1+"%";
    document.getElementById('ide3').innerHTML=szam3;
    szam4=Math.round(Math.random()*3000)+500;
    document.getElementById('ide4').innerHTML=szam4;
}