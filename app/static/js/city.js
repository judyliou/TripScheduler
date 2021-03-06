$(document).ready(function() {
    $('#scheduleDiv').on('click', function() {
        window.location.href = "/dev/viewCart/New%20Schedule";
    })

    $('#cityHeader').css('background-image', 'url(' + cityImg + ')')

    $('[src$="%251.png"]').parent().addClass("active")
    
    $('[id^="as"]').prop("disabled", false)
    $('[id^="as"]').on('click', function(event) {
        let spotId = event.target.id.substring(2)
        addSpotIntoCart(spotId)
        // $('#as' + spotId).attr('src', '/dev/static/assets/checkmark.png')
        // $('#as' + spotId).prop("disabled", true)
    })
    userCart = userCart.replace('[','').replace(']','')
    userCart = userCart.replaceAll("&#39;",'')
    userCart = userCart.split(', ')
    $.each(userCart, function(index, spotId) { 
        $('#as' + spotId).attr('class', 'fas fa-check-circle spot-add-icon-block')
        $('#as' + spotId).prop("disabled", true)
    })
})

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function addSpotIntoCart(spotId) {
    $.ajax({
        type: 'POST',
        url: '/dev/addSpotToCart',
        data: JSON.stringify({
            from: 'city',
            cityId: cityId,
            spotId: spotId
        }),
        contentType: 'application/json; charset=utf-8',
        success: function(data) {
            let res = JSON.parse(data)
            if(res.success == 0) {
                window.location.href = "/dev/login"
            } else {
                $('#as' + spotId).attr('class', 'fas fa-check-circle spot-add-icon-block')
            }
        }
    })
}

function countSpotClick(spotId) {
    $.ajax({
        type: 'POST',
        url: '/dev/countClick',
        data: JSON.stringify({
            spotId: spotId
        }),
        contentType: 'application/json; charset=utf-8',
        success: function(data) {
            spotId
        }
    })
}