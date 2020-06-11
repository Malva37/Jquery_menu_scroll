$(function () {

    $('a').each((index, element) => {
        $(element).click(() => {
            let q = $(element).attr('href');
            let hElement = $(q).offset().top;
            $('html').animate({
                scrollTop: hElement
            },500)
            $(`[href="${q}"]`).addClass('activeDot').siblings().removeClass('activeDot')
        })
    })

    $('.dot').each((index, element) => {
        $(element).click(() => {
            let q = $(element).attr('href');
            let hElement = $(q).offset().top;
            $('html').animate({
                scrollTop: hElement
            },500),
            $(element).addClass('activeDot').siblings().removeClass('activeDot')
        })
    })

})