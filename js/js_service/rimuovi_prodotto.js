function rimuovi_prodotto(id) {

    $.ajax({
        url: "http://localhost/ditta_service/public/rimuovi_prodotto/" + id,

        type: 'DELETE',

        data: '',

        dataType: "json",

        success: function (data) {

            alert(data.message);
            if(!data.error)
                location.reload();

        },
        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }
    });
}