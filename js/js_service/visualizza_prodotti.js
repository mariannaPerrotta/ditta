
$(document).ready( function () {


    $.ajax({

        url: "http://localhost/ditta_service/public/visualizza_prodotti",

        type: 'POST',
        data: '',
        dataType: "json",

        success: function (data) {

            if (data.prodotti.error === false) {

                var n = data.prodotti.contatore;

                var array = [];

                for (var i = 0; i < n; i++) {

                    var pro = {
                        id: data.prodotti[i].id,
                        identificativo: data.prodotti[i].identificativo,
                        nome: data.prodotti[i].nome,
                        modello: data.prodotti[i].modello,
                        descrizione: data.prodotti[i].descrizione,
                        marca: data.prodotti[i].marca,
                        modello: data.prodotti[i].modello,
                    }

                    array.push(pro);

                    $('#prod_tab').append(
                        '<tr>' +
                        '<td>' + array[i].identificativo + '</td>' +
                        '<td>' + array[i].nome + '</td>' +
                        '<td>' + array[i].modello + '</td>' +
                        '<td>' + array[i].descrizione + '</td>' +
                        '<td>' + array[i].marca + '</td>' +
                        '<td>' + array[i].modello + '</td>' +
                        '<td>  <img class="rounded-circle border-0" width="25px" height="25px" align="center"  id="'+array[i].id+' " src="../img/39220.png" onclick="rimuovi_prodotto('+"'"+array[i].id+"'"+')"> </td>' +
                        '</tr>'
                    );


                }



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