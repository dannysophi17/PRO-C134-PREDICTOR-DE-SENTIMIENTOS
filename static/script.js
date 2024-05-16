$(document).ready(function(){

    console.log('Listo')

    //  Obtén la fecha actual y actualízala en el DOM.
    let currentDate = new Date();
    $('#current-date').text(currentDate.toLocaleDateString());

    //  Escribe un evento, cuando se hace clic en el botón enviar.
    $('#send-button').click(function(){

        //  Obtén el valor del texto, del área de texto, con el método 'val()'.
        let text_value = $('#text-input').val()

        //  Conviértelo en un objeto JS.
        //  Proporciona una 'clave' aquí y en escribe lo mismo en el archivo app.py; también para extraer los datos.
        let input_text = {'text' : text_value}
        console.log(input_text)

        //  Requerimiento AJAX.
        $.ajax({

            //  Tipo de requerimiento web.
            type : 'POST',

            //  Datos a ser enviados en formato JSON.
            data : JSON.stringify(inputText),

            //  Tipo de respuesta esperada en JSON.
            dataType : 'json',

            //  contentType - (tipo de contenido).
            contentType : 'application/json',

            //  Si todo es exitoso, ejecuta esta función.
            success : function(result){

                let prediction = result.prediction;
                let emoticonUrl = result.emoticonUrl;

                $('#prediction').text('Predicción: ' + prediction);
                $('#emoticon').attr('src', emoticonUrl);

                $('#prediction').show();
                $('#emoticon').show();

            },

            //  Si hay algún error, ejecuta esta función.
            error : function(result){

                console.log(result)
            }
        })


        //  Borra el cuadro de texto después de cada clic en el botón.
        $('#text').val("")
    })
        
})
