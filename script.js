//Color select
let userColor = null;
var colorPicker = new iro.ColorPicker("#picker", {
    width: 280,
    margin: 20,
    sliderSize: 10
  });
colorPicker.on('color:change', function(color) {
    userColor = colorPicker.color.hexString;
    console.log(userColor)
});

//Toast
const toastTrigger = document.getElementById('hintBtn')
const toastLiveExample = document.getElementById('hint')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
}

let gridSize = 16;

$('document').ready(function(){
    //BW select
    $('#user-black-btn').click(function(){
        userColor = '#000000';
        console.log(userColor);
    });
    $('#user-white-btn').click(function(){
        userColor = '#ffffff';
        console.log(userColor);
    });

    //Drawing grid
    function createGrid() {
        for(let i = 1; i <= gridSize; i++) {
            $('#drawing-zone').append('<div></div>');
            $(`#drawing-zone div:nth-child(${i})`)
            .addClass('row')
            .addClass('row-cols-auto')
            .addClass('d-flex')
            .addClass('flex-nowrap')
            .attr('id', `drawing-row-${i}`);
            console.log(`row ${i} created`)
        }
        for(let i = 1; i <= gridSize; i++) {
            for(let j = 1; j <= gridSize; j++){
                $(`#drawing-row-${i}`).append('<div></div>');
                $(`#drawing-row-${i} div:nth-child(${j})`).addClass('col').addClass(`draw-square-16`);
            }
        }

    }



    createGrid();
});



