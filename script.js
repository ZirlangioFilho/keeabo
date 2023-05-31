let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('toggle-header')
    MenuBtn.classList.toggle('fa-xmark')
})


document.addEventListener('mousemove', function(event) {
    var cursor = document.getElementById('custom-cursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
  });
  

let type = new Typed('.TypingAnimation', {
    strings: ['Pra mina artilheira', 'Meu pau de chuteira'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})  