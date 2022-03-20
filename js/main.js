if ($(window).width() < 768){
    $('.has_dropdown').on('click', function(){
        $('.dropdown').addClass('showDrop')
    })

    $('.backButton').on('click', function(){
        $('.dropdown').removeClass('showDrop')
    })
}

$('.hamburger').on('click', function(){
        $('.menu_link ul').toggleClass('showMenu')
    })

    $('.menuClose').on('click', function(){
        $('.menu_link ul').removeClass('showMenu')
    })

    
$('#banner_slider').owlCarousel({
loop:true,
items: 1,
dots: false,
nav: true,
navText: ['<span class="iconify" data-icon="uil:angle-left-b"></span>','<span class="iconify" data-icon="uil:angle-right-b"></span>']
})

$('#top_category').owlCarousel({
loop:true,
margin:10,
dots: false,
nav: true,
navText: ['<span class="iconify" data-icon="uil:angle-left-b"></span>','<span class="iconify" data-icon="uil:angle-right-b"></span>'],
responsive:{
    0:{
        items:2
    },
    576:{
        items:3
    },
    1000:{
        items:5
    }
}


})


$('#allTopProducts').owlCarousel({
loop:true,
margin:10,
dots: true,
navText: ['<span class="iconify" data-icon="uil:angle-left-b"></span>','<span class="iconify" data-icon="uil:angle-right-b"></span>'],
responsive:{
    0:{
        items:1
    },
    480:{
        items:2
    },

    600:{
        items:3
    },
    1000:{
        items:4
    }
}
})

$('#accessoriesTopProducts').owlCarousel({
loop:true,
margin:10,
dots: true,
navText: ['<span class="iconify" data-icon="uil:angle-left-b"></span>','<span class="iconify" data-icon="uil:angle-right-b"></span>'],
responsive:{
    0:{
        items:1
    },
    480:{
        items:2
    },

    600:{
        items:3
    },
    1000:{
        items:4
    }
}
})

$('#audioVideoTopProducts').owlCarousel({
loop:true,
margin:10,
dots: true,
navText: ['<span class="iconify" data-icon="uil:angle-left-b"></span>','<span class="iconify" data-icon="uil:angle-right-b"></span>'],
responsive:{
    0:{
        items:1
    },
    480:{
        items:2
    },

    600:{
        items:3
    },
    1000:{
        items:4
    }
}
})

$('#carElectronicTopProducts').owlCarousel({
loop:true,
margin:10,
dots: true,
navText: ['<span class="iconify" data-icon="uil:angle-left-b"></span>','<span class="iconify" data-icon="uil:angle-right-b"></span>'],
responsive:{
    0:{
        items:1
    },
    480:{
        items:2
    },

    600:{
        items:3
    },
    1000:{
        items:4
    }
}
})

$('#client_testimonial').owlCarousel({
loop:true,
dots: false,
nav: false,
navText: ['<span class="iconify" data-icon="uil:angle-left-b"></span>','<span class="iconify" data-icon="uil:angle-right-b"></span>'],
responsive:{
    0:{
        items:2
    },
    600:{
        items:3
    },
    1000:{
        items:4
    }
}


})

$('.tabs li').on('click', function(){
    //figure out which panel to show
    $panelToShow = $(this).attr('rel');
    //hide current tab
    $('.main_panel_area .panel.active').fadeOut(400, function(){
        $(this).removeClass('active');
        $('#'+$panelToShow).fadeIn(400, function(){
            $(this).addClass('active');
        })
    });
})

$('#top_product .tabs li').on('click', function(){
    //figure out which panel to show
    $panelToShow1 = $(this).attr('rel');
    //hide current tab
    $('.main_panel_area .panelTop.active').fadeOut(400, function(){
        $(this).removeClass('active');
        $('#'+$panelToShow1).fadeIn(400, function(){
            $(this).addClass('active');
        })
    });
})



$('#top_product .tabs li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
});





(function () {
    const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

    
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "03/22/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            // if (distance < 0) {
            // document.getElementById("headline").innerText = "It's my birthday!";
            // document.getElementById("countdown").style.display = "none";
            // document.getElementById("content").style.display = "block";
            // clearInterval(x);
            // }
            //seconds
        }, 0)
    }());