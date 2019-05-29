
$(document).ready( function () {


    $.ajax({

        url: "http://localhost/ditta_service/public/visualizza_prodotti",

        type: 'POST',
        data: '',
        dataType: "json",

        success: function (data) {

            if (data.prodotti.error === false) {

                 data.prodotti.contatore;



            } else {
                alert(data.prodotti.message);
            }


        },
        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }


    });

})