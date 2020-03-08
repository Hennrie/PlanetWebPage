/* window.addEventListener("click", function() {
  circle.classList.add("scale");
}); */

function getTransitionEndEventName() {
  var transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd"
  };
  let bodyStyle = document.body.style;
  for (let transition in transitions) {
    if (bodyStyle[transition] != undefined) {
      return transitions[transition];
    }
  }
}

$(document).ready(function() {
  let jo = document.querySelector(".content");
  let transitionEndEventName = getTransitionEndEventName();

  $(".link").on("click", function(event) {
    event.preventDefault();
    let old = $(".content");
    let url = $(this).attr("href");
    const className = $(this)
      .parent()
      .attr("class");
    console.log(className);
    const el = document.querySelector("." + className);

    $("." + className + " text").fadeOut(function() {
      $("." + className).toggleClass("scale");

      $(old).toggleClass("fadeOut");
      el.addEventListener(transitionEndEventName, function() {
        console.log(transitionEndEventName);

        old.detach();
        window.location.href = url;
      });
      jo.addEventListener("animationend", function() {
        console.log("kill");
      });
      /*  
      jo.addEventListener("animationend", function() {
        console.log("jo");
      }); */
    });
    return false;
  });
});
