document.getElementById("btnLogin").onclick = function () {

//input da dare al servizio, quelli nelle parentesi sono gli id dei reattangoli in cui inserite username e password

    var email = $("#InputEmail").val();

    var password = $("#InputPassword").val();
    var campi_vuoti = false;

//campi vuoti
    if (email.toString() === '' || password.toString() === '') {
        campi_vuoti = true;
        alert("Campi vuoti");
    }

// questo serve per mettere insieme i due input

    var data = {

        email: email,

        password: password,
    };


// qui chiamate il servizio

    $.ajax({

        url: "http://localhost/ditta_service/public/login",

        type: 'POST',

        data: data,

        dataType: "json", //json perchè l'output deve essere un json


// funzione che dice che è stato effettuato il servizio
        success: function (data) {
//questo serve per vedere quando l'utente è autenticato

            if (data.error === false) {


                var utente = {
                    id: data.utente.idutente,
                    nome: data.utente.nome,
                    cognome: data.utente.cognome,
                    email: data.utente.username,

                }


                $.ajax({
                        url: "../pages/session.php",

                        type: 'POST',

                        data: utente,

                        dataType: "html",

                        success: function (data) {
                           
                           window.location.assign('index.php');


                        }

                    }
                )
         }
            if (data.error === true) {
                if (campi_vuoti === false) {
                    alert("Credenziali errate");
                }
            }

        },

        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }
    });

};