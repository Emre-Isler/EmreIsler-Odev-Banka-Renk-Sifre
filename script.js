// Arkaplan rengi değiştirme

let arkaplanRenk
function renkSec(){
    let renk = []
    let karakterler = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]
    for (let i = 0; i < 6; i++) {
        let randomKarakter = Math.floor(Math.random() * karakterler.length - 1 ) + 1 
        renk.push(karakterler[randomKarakter])
    }

    let color = renk.join("") //aradaki virgülleri çıkarmak için bu şekilde kullanıyoruz
    arkaplanRenk = `#${color}`
    return arkaplanRenk
}

console.log(renkSec())
document.body.style.backgroundColor = arkaplanRenk

// Rastgele şifre oluşturma

function sifreOlustur (){
    let karakterler  = [    "a",    "b",    "c",    "ç",    "d",    "e",    "f",    "g",    "ğ",    "h",    "ı",    "i",    "j",    "k",    "l",    "m",    "n",    "o",    "ö",    "p",    "r",    "s",    "ş",    "t",    "u",    "ü",    "v",    "y",    "z",    "q",    "w",    "x",    "A",    "B",    "C",    "Ç",    "D",    "E",    "F",    "G",    "Ğ",    "H",    "I",    "I",    "J",    "K",    "L",    "M",    "N",    "O",    "Ö",    "P",    "R",    "Ş",    "T",    "U",    "Ü",    "V",    "Y",    "Z",    "Q",    "W",    "X",    0,    1,    2,    3,    4,    5,    6,    7,    8,    9,    10,    "!",    "'",    "^",    "+",    "%",    "&",    "/",    "(",    ")",    "=",    "?",    "-", "_",    "*",    ",",    ";",    "`","{",    "}",    "[",    "]",    "@",    "|",    "<",    ">",    ".",    ":",    "é",    "$","#","£","€", "₺"]

    let kullaniciSifre = []

    let sifreUzunluk = Number(prompt("Lütfen şifrenizin uzunluğunu seçiniz (1-106 arasında)"))
    if(sifreUzunluk <= karakterler.length & sifreUzunluk >= 1 ){
        for (let i = 0; i < sifreUzunluk; i++){
            
            let randomKarakter = Math.floor(Math.random() * karakterler.length - 1 ) + 1
            
            // Array değeri içerisinde varmı yokmu includes ile olduğunu kontrol ediyoruz
            if(kullaniciSifre.includes(karakterler[randomKarakter]) == false){
                kullaniciSifre.push(karakterler[randomKarakter])
            }else{
                i--
            }     
        }

        let sifreniz = `Şifreniz: ${kullaniciSifre.join("")} Lütfen şifrenizi kimseyle paylaşmayın` 

        console.log(sifreniz)
        document.getElementById("sifre").innerHTML = sifreniz

    }else{
        alert("Lütfen geçerli bir değer giriniz")
        sifreOlustur()
    }
}

// sifreOlustur()

let bakiye = 1000

function bankamatik(){
    let tercih = Number(prompt("Hoşgeldiniz ne yapmak istersiniz \n 1-Bakiye Sorgulama \n 2-Para Çekme \n 3-Para Yatırma \n 4-Çıkış \n 5-Güçlü şifre oluştur"))

    switch (tercih) {
        case 1:
            alert(`Bakiyeniz ${bakiye} ₺`)
            bankamatik()
            break;
        case 2:
            let cekilen = Number(prompt("Lütfen çekeceğiniz miktarı girin"))
            if (cekilen <= bakiye & cekilen > 0) {
                alert(`${cekilen} ₺ Para çekme işlemi yapılmıştır. Yeni bakiyeniz ${bakiye -= cekilen} ₺`)
                bankamatik()
            } else if (cekilen > bakiye) {
                alert(`Yetersiz bakiye. Bakiyeniz ${bakiye}`)
                bankamatik()
            }else{
                alert(`Lütfen geçerli bir değer giriniz`)
                bankamatik()
            }
            break;
        case 3:
            let yatirilan = Number(prompt("Lütfen yatıracağınız miktarı girin"))
            if (yatirilan > 0) {
                alert(`${yatirilan} ₺ Para yatırma işlemi yapılmıştır. Yeni bakiyeniz ${bakiye += yatirilan} ₺`)
                bankamatik()
            }else{
                alert(`Lütfen geçerli bir değer giriniz`)
                bankamatik()
            }
            break;
        case 4:
            alert("Bizi tercih ettiğiniz için teşekkür ederiz. Lütfen kartınızı unutmayın")
            break;

        case 5:
            sifreOlustur()
            break;
    
        default:
            alert("Geçersiz bir değer girdiniz")
            bankamatik()
            break;
    }

}

bankamatik()



