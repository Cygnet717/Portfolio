$('.what').hide();
$('.whatButton').css({"border": "2px solid #262626"})
$('.whoButton').css({"border": "2px solid #4F5945"});

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

    $('.navbar button').on('click', event=>{
        buttonClick(event.target.value);
    });

function buttonClick(location){
    const buttonOptions = ['who', 'what']
    let others = buttonOptions.filter(each => each !== location)

    $(`.${location}`).show();
    $(`.${location}Button`).css({"border": "2px solid #4F5945"});
    others.map(i =>{ 
        $(`.${i}`).hide();
        $(`.${i}Button`).css({'border':'2px solid #262626'});
        })
    }
});