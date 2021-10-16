var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Social Media Partner')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Designing')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Development')
    .pauseFor(2500)
    .start();  