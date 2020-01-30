$('.talk').hide();
$('.what').hide();
$('.whoButton').css({"border": "2px solid rgba(201, 105, 201, 0.623)"});

$(document).ready(function(){
    
    $('.hamburger').on('click', event =>{
        $('.bar1').toggleClass('change');
        $('.bar2').toggleClass('change');
        $('.bar3').toggleClass('change');
        $('nav.burger').slideToggle("slow");
    });

    $('.burger').on('click', event=>{
        buttonClick(event.target.value);
    })

    $('.hidden button').on('click', event=>{
        buttonClick(event.target.value);
    });

function buttonClick(location){
    const buttonOptions = ['who', 'talk', 'what']
    let others = buttonOptions.filter(each => each !== location)

    $(`.${location}`).show();
    $(`.${location}Button`).css({"border": "2px solid rgba(201, 105, 201, 0.623)"});
    others.map(i =>{ 
        $(`.${i}`).hide();
        $(`.${i}Button`).css({'border':'none'});
        })
    }
});