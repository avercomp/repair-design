
$(document).ready(function() {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    
    });

});

$(document).ready(function(){
    /**
     * При прокрутке страницы, показываем или срываем кнопку
     */
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('.button-up').fadeIn();
        } else {
            $('.button-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() +10 +bullets.width() +10)
    bullets.css('left', prev.width() +10)
    
    new WOW().init();

    $('.modal__form').validate ({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            userEmail: {
              required: true,
              email: true
            }
          },
            errorElement: "div",
            errorClass: "invalid",
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв"
            },  
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите Ваш E-mail",
              email: "введите в формате: name@domain.com"
            }
          }
    });
    $('.footer__form').validate ({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            userQuestion: {
              required: true,
            }
          },
          errorElement: "div",
          errorClass: "invalid",
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв"
                },  
                userPhone: "Телефон обязателен",

                userQuestion: {
                    required: "Задайте вопрос",
                }
          }
    });
    $('.control__form').validate ({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
          },
            errorElement: "div",
            errorClass: "invalid",
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче двух букв"
                },  
                userPhone: "Телефон обязателен",
          }
    });
    
    // Маска для телефона 
    $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
});



