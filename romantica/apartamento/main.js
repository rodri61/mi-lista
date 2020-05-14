onload = function(){
    const imagen = this.document.getElementById('banner');
    const modal = this.document.getElementById('modal');
    const close = this.document.getElementById('close');
    const boton = this.document.getElementById('btn');

    let numImagen = 0;

    const imagenes = [];
    imagenes[0]= "img-apartamento/fondo-06.jpg";
    imagenes[1]= "img-apartamento/fondo-04.jpg";
    imagenes[2]= "img-apartamento/fondo-02.jpg";

    this.setInterval(function(){
        imagen.style.backgroundImage = "url("+imagenes[numImagen]+")";
        if(numImagen<imagenes.length-1){
            numImagen++;
        }else{
            numImagen=0;
        }
    },5000);
    boton.addEventListener('click',function(){
        modal.style.display = 'block';
    })
    close.addEventListener('click',function(){
        modal.style.display = 'none';
    })
}