document.addEventListener("DOMContentLoaded", function () {
  let typedElements = document.querySelectorAll('.typed');
  typedElements.forEach(function(el) {
    let items = el.getAttribute('data-typed-items').split(',');
    new Typed(el, {
      strings: items,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });
  });
});

