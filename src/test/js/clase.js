/*$(()=>init());*/

$(document).ready(() => init());


$(document).ready(() => {
    var enlaces = [
        {
            web: "Youtube",
            enlace: "https://www.youtube.com/"
        },
        {
            web: "Udemy",
            enlace: "https://www.udemy.com/"
        },
        {
            web: "LinkedIn",
            enlace: "https://www.linkedin.com/"
        }
    ]
    init(enlaces);
});

function init(enlaces) {
    $.each(enlaces, (index, elem) => {
        var newElem = $(`<li><a href=${elem.enlace}>${elem.web}</a></li>`);
        $("#enlaces").append(newElem);
    })
}


/*function init() {
    console.log("hola");
    $("#rojo").css("color", "red");
    $("#elemento").parent().parent()
}*/

/*
$(document).ready(()=>{
    var contenedor = $('#contenedor');
    var n=1;
    //MouseOver y MouseOut
    contenedor.mouseover(function(){
    ++n;
    $(this).css("background", "red");
    })
    contenedor.mouseout(function(){
    $(this)[0].textContent=`Has pasado ${n} veces`
    })
    });*/

/*$(document).ready(() => {
    var contenedor = $('#contenedor');
    contenedor.hover(cambiarRojo, contarVeces)
    contenedor.click(function(){
        $(this).css("background", "pink")
        })
});
var n = 0;
function cambiarRojo() {
    ++n;
    $(this).css("background", "red");
}
function contarVeces() {
    $(this).css("background", "yellow");
    $(this)[0].textContent = `Has pasado ${n} veces`
}*/

/*
$("#nombre").focus(function (e) {
    $(e.currentTarget).css("border", "2px solid red");
    $("#datos").text("");
    $("#datos").hide();
});
$("#nombre").blur(function (e) {
    $(e.currentTarget).css("border", "2px solid pink");
    var texto = $(e.currentTarget).val(); //para obtener el valor del input
    $("#datos").text(texto); //para agregarle el texto al elemento
    $("#datos").show(); //para mostrar los elementos del DOM
});*/