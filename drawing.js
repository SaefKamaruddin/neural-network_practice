const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#FFFFFF';

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;


var canvas; 
var context;

function prepareCanvas() {
    // console.log('Preparing Canvas');

    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');

    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;
    context.lineWidth = 8;
    context.lineCap='round'
    context.lineJoin='round';
    var isPainting = false;


    document.addEventListener('mousedown', function (event) {
        // console.log('Mouse Down');
        isPainting = true;
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;


    });

    document.addEventListener('mousemove', function (event) {

        if (isPainting) {
            previousX = currentX;
            currentX = event.clientX - canvas.offsetLeft;

            previousY = currentY;
            currentY = event.clientY - canvas.offsetTop;

            // console.log(`Current X: ${currentX}`);

            draw();

        }

    });

    document.addEventListener('mouseup', function (event) {
        // console.log('Mouse Released');
        isPainting = false;
    });


    canvas.addEventListener('mouseleave', function (event) {
        isPainting = false;
    });


    //Touch Events
    document.addEventListener('touchstart', function (event) {
        // console.log('Touchdown');
        isPainting = true;
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;


    });

    
    canvas.addEventListener('touchleave', function (event) {
        isPainting = false;
    });

    canvas.addEventListener('touchcancel', function (event) {
        isPainting = false;
    });


    canvas.addEventListener('touchmove', function (event) {

        if (isPainting) {
            previousX = currentX;
            currentX = event.touches[0].clientX - canvas.offsetLeft;

            previousY = currentY;
            currentY = event.touches[0].clientY - canvas.offsetTop;

            // console.log(`Current X: ${currentX}`);

            draw();

        }

    });



}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.stroke();
}

function clearCanvas() {

    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;

    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

}