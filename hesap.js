//classı calc-button olan classları çekmek , temsil etmek
let dugme = document.getElementsByClassName('calc-button');

//Metinsel alanı temizleme için
let clean = document.getElementsByClassName('is-clear')[0];

// eşittire tıklandıgında bir olay eklemek gerekiyor
let calculate = document.getElementById('calculate');

// işlemlerimizin görüleceği ekran
let txtArea = document.getElementById('txtArea');

// işlem hesaplama eventi ekleme
calculate.addEventListener('click', hesap);

// temizleme event ekleme
clean.addEventListener('click', temizle);

//buttonlar için event ekleme
for (let i = 0; i < dugme.length; i++) {
    // eşittir ve temizleye tıkladığımızda çalışmasın 
    if (i != 0 && i != 15) {
        dugme[i].addEventListener('click', yazdir);
    }
}

//tıkladığımız button için value ekrana yazma
function yazdir(){
    console.log(this.value);
    //eşittir girilene kadar ekrana ne girdiysek göstermek için yazıldı
    txtArea.value = txtArea.value+this.value;
}

//hesaplama fonksiyonu yazma
function hesap() {
    //ekranı temizlememiz gerekiyor sonucu oraya bastıracağız
   // eval -> içerisinde matematiksel bir ifade gördüğünde işlem önceliğine göre işlem yapan bir fonksiyondur
    txtArea.value = eval(txtArea.value);

}
//temizleme fonksiyonu yazma
function temizle() {
    txtArea.value = "";
}