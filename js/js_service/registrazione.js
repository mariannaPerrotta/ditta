//btnlogin è l'id del bottone login
document.getElementById("btnregistrazione").onclick = function () {

//input da dare al servizio, quelli nelle parentesi sono gli id dei reattangoli in cui inserite i vari campi

    var nome = $("#reg_nome").val();

    var cognome = $("#reg_cognome").val();

    var email = $("#reg_username").val();

    var password =$("#reg_pass").val();

    var Conferma_password =$("#reg_pass_conf").val();


        if (nome != '' && cognome != '' && email != '' && password != '' && Conferma_password != '') {
            if (password !== Conferma_password) {
                alert("Le password non coincidono");
            }
            else {
// questo serve per mettere insieme i due input

                var data = {

                    nome: nome,

                    cognome: cognome,

                    email: email,

                    password: password,

                };

// qui chiamate il servizio

                $.ajax({

                    url: "http://localhost/ditta_service/public/registrazione",

                    type: 'POST',

                    data: data,

                    dataType: "json", //json perchè l'output deve essere un json


                    // funzione che dice che è stato effettuato il servizio
                    success: function (data) {

                        if (JSON.stringify(data.error) === "false") {
                            alert("Registrazione effettuata");
                            window.location.assign('../pages/login.php');

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
            }


        }

        else {
            alert("Campi vuoti");
        }


};