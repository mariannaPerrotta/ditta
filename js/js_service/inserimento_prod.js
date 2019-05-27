document.getElementById("btnInserisci").onclick = function () {

    var identificativo = $("#ins_identificativo").val();

    var nome = $("#ins_nome").val();

    var cognome = $("#ins_cognome").val();

    var modello = $("#ins_modello").val();

    var descrizione = $("#ins_descrizione").val();

    var marca = $("#ins_marca").val();

    var prezzo = $("#ins_prezzo").val();

    prodotto = {

        identificativo: identificativo,

        nome: nome,

        cognome: cognome,

        modello: modello,

        descrizione: descrizione,

        marca: marca,

        prezzo: prezzo,

    };

    $.ajax({

        url: "http://localhost/ditta_service/public/inserimento_prodotto",

        type: 'POST',

        data: prodotto,

        dataType: "json", //json perchè l'output deve essere un json


        // funzione che dice che è stato effettuato il servizio
        success: function (data) {

            if (JSON.stringify(data.error) === "false") {
                alert("Inserimento effettuato");
            }
            else {
                alert(JSON.stringify(data.message))
            }

        },

        error: function (err) {

            alert("NO " + err.responseJSON.toString());
            console.log(err.responseJSON);
        }
    });

};