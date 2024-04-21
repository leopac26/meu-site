


var tempo;
function rolar(e){
   if(e){
      var el = document.querySelector("#resultado");
      tempo = setInterval(function(){
         var doc_scrl = document.documentElement.scrollTop;
         
         if(el.offsetTop-doc_scrl <= window.innerHeight-el.offsetHeight){ // aqui é quando a janela chega ao fim
            clearInterval(tempo);
         }else{
            window.scroll(0,doc_scrl+2);
         }
      }, 500);

   }else{
      clearInterval(tempo);
   }
}