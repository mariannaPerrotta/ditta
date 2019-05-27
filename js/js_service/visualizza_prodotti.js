/*Dato che non posso sapere a priori che id avrà il button (non so quanti ne saranno visualizzati)
invece di cercare l'elemento nel js, attivo una funzione js col click del button stesso*/
$(document).ready(function() {

    $.ajax({

        url: "http://localhost/ditta_service/public/visualizza_prodotti",

        type: 'POST',

        dataType: "json",

        success: function (data) {

            if (!data.error) {

                    var n = data.prodotti.contatore;

                    var array = [];
                    $("#form_materie").html("");
                    for (var i = 0; i < n; i++) {

                        var pro = {
                            identificativo: data.prodotti[i].identificativo,
                            nome: data.prodotti[i].nome,
                            modello: data.prodotti[i].modello,
                            descrizione: data.prodotti[i].descrizione,
                            marca: data.prodotti[i].marca,
                            modello: data.prodotti[i].modello,
                        }

                        array.push(doc);
                        if (array[i].cod_docente ) {

                            $('#lista_documenti').append(' <div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">\n' +
                                ' <div class="card-header" style="text-align: center; background: lightgrey">' + array[i].materia + '</div> ' +
                                '                <div class="card-body" >\n' +
                                '                    <form method="post" style="padding-left: 0.25%"  id="' + array[i].id + '">\n' +
                                '                <div class="form-group mt-4">\n' +
                                '                    <label  style="white-space: normal;word-break: break-word;" for="titolodocumento">Titolo documento: ' + ' ' + ' ' + array[i].titolo + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label  style="white-space: normal;word-break: break-word;" for="materiadocumento">Materia: ' + ' ' + array[i].materia + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                        <label  style="white-space: normal;word-break: break-word;"for="valutazione"  id="val' + array[i].id + '" >Valutazione media </label>\n' +
                                // var val=valutazione_media( array[i].id)
                                (val = valutazione_media(array[i].id) <= 1 ? '<label>★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 1 && valutazione_media(array[i].id) <= 2 ? '<label style="white-space: normal;word-break: break-word;">★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 2 && valutazione_media(array[i].id) <= 3 ? '<label style="white-space: normal;word-break: break-word;">★★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 3 && valutazione_media(array[i].id) <= 4 ? '<label style="white-space: normal;word-break: break-word;">★★★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 4 && valutazione_media(array[i].id) <= 5 ? '<label style="white-space: normal;word-break: break-word;">★★★★★</label>' : '') +

                                ' </div>\n' +
                                '                <div class="form-group">\n' +
                                '                        <label  style="white-space: normal;word-break: break-word;" for="valutazione">Valutazione </label>\n' +
                                '<select id="' + array[i].id + 'id_button">' +
                                '                       <option type="button" value="1" id="' + array[i].id + '_val_1"  style="white-space: normal;word-break: break-word;"> ★ </option>' +
                                '                       <option type="button" value="2" id="' + array[i].id + '_val_2"  style="white-space: normal;word-break: break-word;"> ★★ </option>' +
                                '                       <option type="button" value="3" id="' + array[i].id + '_val_3"  style="white-space: normal;word-break: break-word;"> ★★★ </option>' +
                                '                       <option type="button" value="4" id="' + array[i].id + '_val_4"  style="white-space: normal;word-break: break-word;"> ★★★★ </option>' +
                                '                       <option type="button" value="5" id="' + array[i].id + '_val_5"  style="white-space: normal;word-break: break-word;"> ★★★★★ </option>' +
                                '        </select>       ' +



                                ' </div>\n' +

                                '                <a class="btn btn-primary btn-block" style="color:white; white-space: normal;word-break: break-word; width: 30%;" id="' + array[i].id + '_valuta" onclick="valuta(' + "'" + array[i].id + "'" + ')">Valuta</a>\n' +
                                '                <a class="btn btn-primary btn-block" style="color:white; white-space: normal;word-break: break-word;" id="' + array[i].id + '" onclick="Download(' + "'" + array[i].id + "'" + ')">Download documento</a>\n' +
                                '\n' +
                                '            </form>\n' +
                                '        </div>\n' +
                                '    </div>');
                        }
                        else {
                            $('#lista_documenti').append(
                                '<div class="card card-register mx-auto mt-5" style="margin-bottom: 3rem!important">\n' +
                                '                <div class="card-body">\n' +


                                '                    <form method="post" style="padding-left: 0.25%"  id="' + array[i].id + '">\n' +
                                '                <div class="form-group mt-4">\n' +
                                '                    <label style="white-space: normal;word-break: break-word;" for="titolodocumento">Titolo documento: ' + ' ' + ' ' + array[i].titolo + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                    <label  style="white-space: normal;word-break: break-word;" for="materiadocumento">Materia: ' + ' ' + array[i].materia + '</label>\n' +
                                '                </div>\n' +
                                '                <div class="form-group">\n' +
                                '                        <label  style="white-space: normal;word-break: break-word;" for="valutazione"   id="val' + array[i].id + '" >Valutazione media </label>\n' +
                                // var val=valutazione_media( array[i].id)
                                (val = valutazione_media(array[i].id) <= 1 ? '<label style="white-space: normal;word-break: break-word;">★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 1 && valutazione_media(array[i].id) <= 2 ? '<label  style="white-space: normal;word-break: break-word;">★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 2 && valutazione_media(array[i].id) <= 3 ? '<label style="white-space: normal;word-break: break-word;">★★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 3 && valutazione_media(array[i].id) <= 4 ? '<label style="white-space: normal;word-break: break-word;">★★★★</label>' : '') +
                                (val = valutazione_media(array[i].id) > 4 && valutazione_media(array[i].id) <= 5 ? '<label  style="white-space: normal;word-break: break-word;">★★★★★</label>' : '') +

                                ' </div>\n' +
                                '                <div class="form-group">\n' +
                                '                        <label  style="white-space: normal;word-break: break-word;" for="valutazione">Valutazione </label>\n' +
                                '<select id="' + array[i].id + 'id_button">' +
                                '                       <option type="button" value="1" id="' + array[i].id + '_val_1"  style="white-space: normal;word-break: break-word;"> ★ </option>' +
                                '                       <option type="button" value="2" id="' + array[i].id + '_val_2"  style="white-space: normal;word-break: break-word;"> ★★ </option>' +
                                '                       <option type="button" value="3" id="' + array[i].id + '_val_3"  style="white-space: normal;word-break: break-word;"> ★★★ </option>' +
                                '                       <option type="button" value="4" id="' + array[i].id + '_val_4"  style="white-space: normal;word-break: break-word;"> ★★★★ </option>' +
                                '                       <option type="button" value="5" id="' + array[i].id + '_val_5"  style="white-space: normal;word-break: break-word;"> ★★★★★ </option>' +
                                '        </select>       ' +

                                ' </div>\n' +

                                '                <a class="btn btn-primary btn-block" style="color:white;white-space: normal;word-break: break-word; width: 30%;" id="' + array[i].id + '_valuta" onclick="valuta(' + "'" + array[i].id + "'" + ')">Valuta</a>\n' +
                                '                <a class="btn btn-primary btn-block" style="color:white; white-space: normal;word-break: break-word;" id="' + array[i].id + '" onclick="Download(' + "'" + array[i].id + "'" + ')">Download documento</a>\n' +
                                '\n' +
                                '            </form>\n' +
                                '    </div>' +
                                '        </div>\n' +

                                '    </div>'
                            );
                        }


                }
            } else {
                alert(data.message);
            }


        },
        error: function (err) {

            alert("NO " + err.responseJSON.toString());

            console.log(err.responseJSON);


        }


    });

    function valutazione_media(id) {
        var int;
        $.ajax({

            url: "http://www.unimolshare.altervista.org/logic/UnimolShare/public/index.php/mediavalutazione",

            type: 'POST',

            data: {cod_documento: id},

            dataType: "json",
            async: false,

            success: function (data) {
                int = JSON.parse(data.contatti[0].media);

            },
            error: function (err) {

                alert("NO " + err.responseJSON.toString());

                console.log(err.responseJSON);


            }


        });
        return int;
    }

}