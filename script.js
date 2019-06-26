$(document).ready(function(){
    $('.talk').hide();
    $('.what').hide();
    $('#who').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
    
    $("#who").on('click', event =>{
        $('.who').show();
        $('.talk').hide();
        $('.what').hide();
        $('#who').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
        $('#talk').css({'border':'none'});
        $('#what').css({'border':'none'});
    });

    $("#talk").on('click', event =>{
        $('.who').hide();
        $('.talk').show();
        $('.what').hide();
        $('#who').css({'border':'none'});
        $('#talk').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
        $('#what').css({'border':'none'});
    });

    $("#what").on('click', event =>{
        $('.who').hide();
        $('.talk').hide();
        $('.what').show();
        $('#who').css({'border':'none'});
        $('#talk').css({'border':'none'});
        $('#what').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
    });
    });