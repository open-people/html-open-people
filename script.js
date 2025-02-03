function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-806323095/GGGYCJGeuYoDEJeHvoAD',
        'event_callback': callback
    });
    return false;
  }



document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const menuList = menu.querySelector('.menu__list');
    const iconMenu = document.querySelector('.icon-menu');
    const body = document.body;
    const buttonFirst = document.getElementById('button-first');
    const buttonSecond = document.getElementById('button-second');

    iconMenu.addEventListener('click', () => {
        menuList.classList.toggle('active');
        body.classList.toggle('body--menu-open');
    });

    menuList.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu__link')) {
            menuList.classList.remove('active');
            body.classList.remove('body--menu-open');
        }
    });

    if (buttonFirst) {
        buttonFirst.addEventListener('click', () => {
            gtag_report_conversion();
        });
    }


    if (buttonSecond) {
        buttonSecond.addEventListener('click', () => {
            gtag_report_conversion();
        });
    }
});

