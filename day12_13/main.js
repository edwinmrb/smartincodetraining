$(document).ready(function () {
  /*  var ocultar = $("#ocultar");
  var mostrar = $("#mostrar");
  var toggle = $("#toggle");
  var elemento = $("#elemento");

  ocultar.click(function () {
    elemento.hide(1000);
  });

  mostrar.click(function () {
    elemento.show(1000);
  });

  toggle.click(function () {
    elemento.toggle(1000);
  }); */

  let input = $("#input");
  let message = $(".message");
  let container = $(".container");
  let button = $(".hide-show");

  button.click(function () {
        if (button.text() === "show") {
      container.show(1000);
      button.html("hide");
    } else {
      container.hide(1000);
      button.html("show");
    }
  });

  input.keyup(function (e) {
    //verificamos en consola
    message.html(input.val()); //agregamos en contenido

    //Podemos verificar si está vacio el input
    if (input.val() === "") {
      message.html("Estoy esperando...");
    }
  });

  $(".button-fadeIn").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});
