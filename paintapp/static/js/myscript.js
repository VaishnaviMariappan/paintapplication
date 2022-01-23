function change_color(element){
    hello=element.style.background;
}
function myClickEvent(e){
    var message;
    ctx.beginPath();
    if (shape == 0){
        ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI);
        ctx.strokeStyle = hello;
        ctx.lineWidth = 2;
    } else if (shape == 1){
        ctx.rect(e.offsetX, e.offsetY, 40, 40);
        ctx.strokeStyle = hello;
        ctx.lineWidth = 2;
    }else if (shape == 2){
        ctx.moveTo(e.offsetX, e.offsetY);
        ctx.lineTo(e.offsetX, e.offsetY-(s/2));
        ctx.strokeStyle = hello;
        ctx.lineWidth = 2;
    }else if (shape == 3){
        ctx.moveTo(e.offsetX, e.offsetY);
        ctx.lineTo(e.offsetX+(t/2), e.offsetY-(t*0.86602));
        ctx.lineTo(e.offsetX-(t/2), e.offsetY-(t*0.86602));
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.strokeStyle = hello;
        ctx.linewidth = 2;
    } else if (shape == 4){
        ctx.rect(e.offsetX, e.offsetY, 40, 25);
        ctx.strokeStyle = hello;
        ctx.lineWidth = 2;
    }
        ctx.stroke();
    }

    function circleclicked() {
        shape=0;
    }

    function squareclicked() {
        shape=1;
    }

    function lineclicked() {
        shape=2;
    }

    function triangleclicked() {
        shape=3;
    }

    function rectangleclicked() {
        shape=4;
    }
