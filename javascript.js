<<<<<<< HEAD
=======

//    Header clock
$(document).ready(function(){
    function displayTime() {
        var element = document.getElementById("clock");
        var now = new Date();
        element.innerHTML = now.toLocaleTimeString();
        setTimeout(displayTime, 1000);
    }
    
    function dislplayAlert(){
        $('.modal').modal();
        $('#modal1').modal('open');
    }
    displayTime();
    dislplayAlert();
    
    
    // Exploding "Hi"
    function onMouseMove(event) {
        // Do nothing, based on scroll
    }
    $('.hover-block').hover(
        function () {
            explodeLetter($(this).parents('section').attr('id'), $(this).data('letter'), $(this).data('color'));
        },
        function () {
            implodeLetter($(this).parents('section').attr('id'), $(this).data('letter'), $(this).data('color'));
        }
    );
})
>>>>>>> cec8bdf07d7097850c3e305a04c5b59cdd090fcd
$(document).ready(function(){

    //Open tap-target on page load
    // $('.tap-target').tapTarget('open');

    //Close tap-target on widget add button hover
    $('.btn-floating').on('mouseover', function(){
        $('.tap-target').tapTarget('close');
    });

    $('#weather').on('click', function(){
        let div = $('<div>');
        div.addClass('col s12 m5');
        $('#content').append(div);
        div.append('<div class="card-panel grey">');
        $('.card-panel').append('<span class="white-text">');
    });

    
    
});


// $('#weather').on('click', function(){
//     var zipcode = prompt('Whats your zip');
//     var queryURL = 'http://api.wunderground.com/api/6ada133f06c8d75d/conditions/q/' + zipcode + '.json';
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(data){
//         console.log(data);
//     });
// });

// $('#weather').on('click', function(){
//     var zipcode = prompt('Whats your zip?');
//     $.post('/', zipcode)
//     .then(function(data){
//         console.log(`User specified Zipcode: ${data}`);
//     });
<<<<<<< HEAD
// });
=======
// });

>>>>>>> cec8bdf07d7097850c3e305a04c5b59cdd090fcd
