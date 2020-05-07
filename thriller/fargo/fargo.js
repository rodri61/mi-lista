onload = function(){
    let boton = this.document.getElementById('btn');
    let parrafo = this.document.getElementById('leer-mas');
    let i=0;
    boton.addEventListener('click',function(){
        if(parrafo.style.display=='none'){
            parrafo.style.display = 'block';
            boton.innerHTML = 'Leer menos';
        }else{
            parrafo.style.display ='none';
            boton.innerHTML = 'Leer mas';
        }
        
    })
}