
$("a[href='#ejemploCarrusel']").click(function() {
$("html, body").animate({ scrollTop: $("#ejemploCarrusel").offset().top });
});

$("a[href='#home']").click(function() {
    $("html, body").animate({ scrollTop: $("#home").offset().top });
    });



ScrollReveal().reveal(".navbar", { delay: 250 });
ScrollReveal().reveal(".home__title--primary", { delay: 550 });
ScrollReveal().reveal(".home__title", { delay: 650 });
ScrollReveal().reveal(".home__title--secondary", { delay: 750 });
ScrollReveal().reveal(".flicker", { delay: 950 });

