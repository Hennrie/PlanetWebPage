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
  /* let currentPageContent = document.querySelector(".content"); */
  let currentPageContent = document.querySelector(".content");

  let transitionEndEventName = getTransitionEndEventName();

  $(".link").on("click", function(event) {
    event.preventDefault();
    let url = $(this).attr("href");
    let className = $(this)
      .parent()
      .attr("class");
    console.log(className);
    const parentClassElement = document.querySelector("." + className);

    $("." + className + " text").fadeOut(function() {
      parentClassElement.classList.add("scale");

      currentPageContent.classList.add("fadeOut");
      parentClassElement.addEventListener(transitionEndEventName, function() {
        console.log("kill");
        currentPageContent.remove();
        window.location.href = url;
      });
    });
  });
});
