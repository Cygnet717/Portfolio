$(document).ready(function(){
    $('.talk').hide();
    $('.what').hide();
    
    $("#who").on('click', event =>{
        $('.who').show();
        $('.talk').hide();
        $('.what').hide();
    });

    $("#talk").on('click', event =>{
        $('.who').hide();
        $('.talk').show();
        $('.what').hide();
    });

    $("#what").on('click', event =>{
        $('.who').hide();
        $('.talk').hide();
        $('.what').show();
    });
    });