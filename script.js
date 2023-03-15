// 1.soru 
const yenidizi = dizi.filter((sayi)=>sayi >10).map(sayi => sayi * 5)
console.log(yenidizi)

//2.soru
dizi.find(myFunction)
function myFunction (dizi){
// Kodunuzu buraya yazın.
if(dizi > 5){
    return console.log("5ten büyük eleman mevcut")
}
}

myFunction(dizi);

//3.soru 
p =1
for(i = 0; i<dizi.length;i++){
p *=dizi[i]
}
console.log(p)
