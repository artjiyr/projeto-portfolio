// =========================
// 🎨 Alternância de Tema
// =========================
const botao = document.getElementById('botao-tema');
const body = document.body;

// Função para aplicar o tema
function aplicarTema(escuro) {
    if (escuro) {
        body.classList.add('escuro');
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('escuro');
        botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// Carregar tema salvo
const temaSalvo = localStorage.getItem('tema') === 'escuro';
aplicarTema(temaSalvo);

// Alternar tema ao clicar
botao.addEventListener('click', () => {
    const escuroAtivo = body.classList.toggle('escuro');
    aplicarTema(escuroAtivo);
    localStorage.setItem('tema', escuroAtivo ? 'escuro' : 'claro');
});


// =========================
// 📜 Scroll Suave Navegação
// =========================
const navLinks = document.querySelectorAll('#menu ul a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute('href'));
        if (!alvo) return;

        const alturaHeader = document.querySelector('header').offsetHeight;
        const destino = alvo.offsetTop - alturaHeader;

        window.scrollTo({
            top: destino,
            behavior: 'smooth'
        });
    });
});