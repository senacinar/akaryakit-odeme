// Güncel benzin fiyatı : 34.40 tl (1.11.23)
// Güncel dizel fiyatı : 38.00 tl
// Güncel lpg fiyatı : 18.13 tl 

// Müşteriden alacağımız bilgiler : alacağı yakıt tipi ve yakıt litresidir.
// prompt ile web sayfamıza const metnimizi cevaplanmak üzere düşürmüş olduk.

// "\r\n" ifadesi satırları alt alta dizer.
// constlar değişmez ifadelerdir.


let benzin = 34.40 , dizel = 38.00 , lpg = 18.13;
const yeniSatir ="\r\n";



const yakitMetni = "1-Benzin" + yeniSatir
+"2-Dizel" + yeniSatir
+"3-LPG" +yeniSatir
+"Lütfen yakıt türünüzü seçiniz."
let yakitTipi = prompt(yakitMetni);
let yakitLitresi = Number(prompt("Yakıt litresini giriniz."));
let bakiye = Number(prompt=("Bakiyenizi giriniz."));
if(yakitTipi=="1"){
    let odenecekTutar = benzin*yakitLitresi;
    if(odenecekTutar<bakiye){
        alert("Bakiyeniz yeterli.")
    }
    else{
        alert("Bakiyeniz yetersizdir."+ yeniSatir
        +"Ödemeniz gereken tutar:" + odenecekTutar +yeniSatir
        +"Eksik tutar:" + (odenecekTutar-bakiye));

    }
    
}else if(yakitTipi=="2"){
    let odenecekTutar = dizel*yakitLitresi;
    if(odenecekTutar<bakiye){
        alert("Bakiyeniz yeterli.")
    
    }else{
        alert("Bakiyeniz yetersizdir."+ yeniSatir
        +"Ödemeniz gereken tutar:" + odenecekTutar +yeniSatir
        +"Eksik tutar:" + (odenecekTutar-bakiye));
        
    }
    
}else if(yakitTipi="3"){
    let odenecekTutar = lpg*yakitLitresi;
    if(odenecekTutar<bakiye){
        alert("Bakiyeniz yeterli.")
    
    }else{
        alert("Bakiyeniz yetersizdir."+ yeniSatir
        +"Ödemeniz gereken tutar:" + odenecekTutar +yeniSatir
        +"Eksik tutar:" + (odenecekTutar-bakiye));
        
    }
    

}else{
    alert=("Lütfen geçerli bir yakıt tipi numarası giriniz.");
}

