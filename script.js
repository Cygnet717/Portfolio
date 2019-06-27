$('.talk').hide();
$('.what').hide();
$('#who').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});

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
    $("nav #who").on('click', event =>{
        console.log ('who clicked');
        $('.who').show();
        $('.talk').hide();
        $('.what').hide();
        $('#who').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
        $('#talk').css({'border':'none'});
        $('#what').css({'border':'none'});
    });

    $("nav #talk").on('click', event =>{
        console.log ('talk clicked');
        $('.who').hide();
        $('.talk').show();
        $('.what').hide();
        $('#who').css({'border':'none'});
        $('#talk').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
        $('#what').css({'border':'none'});
    });

    $("nav #what").on('click', event =>{
        console.log ('what clicked');
        $('.who').hide();
        $('.talk').hide();
        $('.what').show();
        $('#who').css({'border':'none'});
        $('#talk').css({'border':'none'});
        $('#what').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
    });
}
    });