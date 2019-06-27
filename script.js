$('.talk').hide();
$('.what').hide();
$('.whoButton').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});

$(document).ready(function(){
    
    $('.hamburger').on('click', event =>{
        console.log ('burger clicked');
        $('.bar1').toggleClass('change');
        $('.bar2').toggleClass('change');
        $('.bar3').toggleClass('change');
        $('nav.burger').slideToggle("slow");
        buttonClick();
    });

    $('.hidden button').on('click', event=>{
        console.log ('hidden clicked');
        buttonClick();
    });

function buttonClick(){
    $("nav .whoButton").on('click', event =>{
        console.log ('who clicked');
        $('.who').show();
        $('.talk').hide();
        $('.what').hide();
        $('.whoButton').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
        $('.talkButton').css({'border':'none'});
        $('.whatButton').css({'border':'none'});
    });

    $("nav .talkButton").on('click', event =>{
        console.log ('talk clicked');
        $('.who').hide();
        $('.talk').show();
        $('.what').hide();
        $('.whoButton').css({'border':'none'});
        $('.talkButton').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
        $('.whatButton').css({'border':'none'});
    });

    $("nav .whatButton").on('click', event =>{
        console.log ('what clicked');
        $('.who').hide();
        $('.talk').hide();
        $('.what').show();
        $('.whoButton').css({'border':'none'});
        $('.talkButton').css({'border':'none'});
        $('.whatButton').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
    });
}
    });