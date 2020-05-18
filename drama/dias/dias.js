onload = function(){
    const modal = this.document.getElementById('modal');
    const close = this.document.getElementById('close');
    const boton = this.document.getElementById('btn');
    boton.addEventListener('click',function(){
        modal.style.display = 'block';
    })
    close.addEventListener('click',function(){
        modal.style.display = 'none';
    })
}