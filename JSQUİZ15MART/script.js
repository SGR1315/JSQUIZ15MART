
const icerikler = [
    
    { id: 1, value: 'İNONÜ' ,takim:"BESİKTAS"},
    { id: 2, value: 'STAR 3' ,takim:"BESİKTAS"},
    { id: 3, value: 'İstanbul',takim:"BESİKTAS" },
    { id: 4, value: '1903' ,takim:"BESİKTAS"},
    
];


const kapsayici=document.getElementById("container");
const btnBasla=document.getElementById("startButton");
const Secenek = document.getElementById("Calistir")
const Gecir = document.getElementById("Yaz")

let sayac=0;
let kart1 = null;
let kart2 = null;
let kart3 = null;
let kart4 = null;


btnBasla.addEventListener("click", kartOlustur);



function kartOlustur(){
    sayac=0;
    kapsayici.innerHTML="";
    karistir(icerikler);
    icerikler.forEach(icerik=>{
        kart=document.createElement("div");
        kart.innerHTML="?";
        kart.className="card";
        kart.dataset.value=icerik.value;
        kapsayici.appendChild(kart);
        kart.addEventListener("click",kartAc);
    })
}

function karistir(icerikler){
    for(let i=0;i<icerikler.length;i++){
        const rastgeleSayi = Math.floor(Math.random() * (i + 1));
        
        [icerikler[i], icerikler[rastgeleSayi]] = [icerikler[rastgeleSayi], icerikler[i]];
    }
}


function kartAc(){
             
    sayac++;
    
    
    console.log(sayac);
    if(sayac==1){
        
        kart1=this;
        kart1.innerHTML=this.dataset.value;
        return kart1;
          
    }
    else if(sayac==2,3,4){
        kart2=this;   
        kart2.innerHTML=this.dataset.value;
        
        
    }
    
    btnBasla.disabled = true;
}      
   
