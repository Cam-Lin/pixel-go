//Color picker
let userColor = '#000';
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
let hintList = ['Go to Adobe Color to find color palettes', 'Start with something simple', 'Start with the outline and add color later', 'Copy designs you like to learn how they work'];

const toastTrigger = document.getElementById('hintBtn');
const toastLiveExample = document.getElementById('hint');
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
    let hintPrint = hintList[Math.floor(Math.random() * 4)];
    $('#toast-message').text(`${hintPrint}`);
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  })
}

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
    let gridSize = 16; //Default loading size
    let idArr = []; //Ids to be passed to the Paint section later
    function createGrid() {
        for(let i = 1; i <= gridSize; i++) {
            $('#drawing-zone').append('<div></div>');
            $(`#drawing-zone div:nth-child(${i})`)
            .addClass('row')
            .addClass('row-cols-auto')
            .addClass('d-flex')
            .addClass('flex-nowrap')
            .attr('id', `drawing-row-${i}`);
        }
        for(let i = 1; i <= gridSize; i++) {
            for(let j = 1; j <= gridSize; j++){
                $(`#drawing-row-${i}`).append('<div></div>');
                $(`#drawing-row-${i} div:nth-child(${j})`)
                .addClass('col')
                .addClass(`draw-square`)
                .addClass(`scaled-${gridSize}`)
                .addClass('animate__animated')
                .addClass('animate__fadeIn')
                .addClass('animate__slow')
                .attr('id', `draw-square-${i}-${j}`);
                idArr.push(`#draw-square-${i}-${j}`);
            }
        }
        
        //Paint
        let idStr = idArr.join(', ');
        let mouseIsDown = false;

        $(idStr).on('mouseup', function(){
            mouseIsDown = false;
            console.log(mouseIsDown)
        })

        $(idStr).on('mousedown', function(){
            console.log('test-click');
            mouseIsDown = true;
            $(this).css('background', `${userColor}`);
            console.log(mouseIsDown)
        });
        
        $(idStr).on('mouseover', function(){
            if (mouseIsDown == true) {
                $(this).css('background', `${userColor}`);
            }
        });

        //Clear
        $('#clear-btn').click(() =>{
            $(idStr).css('background', '#ffffff')
        });
    }

     //Download
    $('#download-btn').on('mousedown', function(){
        $( ".draw-square" ).css( "border", "none" )
        htmlToImage.toPng(document.getElementById('drawing-container')).then(function (dataUrl) {
            window.saveAs(dataUrl, 'my-pixel-go.jpeg');
            });
    });
    $('#download-btn').on('mouseup', function(){
        $( ".draw-square" ).css( "border", "1px dotted black" )
    });

    //Grid size change
    $('#btn-radio-16').click(function(){
        $(`#drawing-zone`).empty();
        gridSize = 16;
        createGrid();
    });
    $('#btn-radio-24').click(function(){
        $(`#drawing-zone`).empty();
        gridSize = 24;
        createGrid();
    });

    //Initial grid
    $(`#drawing-zone`).addClass('animate__animated').addClass('animate__fadeIn');
    createGrid();
});
