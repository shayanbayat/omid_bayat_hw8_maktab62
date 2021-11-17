$(document).ready(function () {

    $("#selector").change(function (e) {
        e.preventDefault();
        if($(this).val() === '2'){
            $("#post").hide();
        }
        else {
            $("#post").show();
        }
    })

})