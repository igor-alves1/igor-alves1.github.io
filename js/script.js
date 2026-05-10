// --- DADOS DA PLAYLIST ---
const musicas = [
    {
        titulo: "Como É Grande O Meu Amor Por Você",
        artista: "Roberto Carlos",
        arquivo: "musica1.mp3",
        letra: "Eu tenho tanto pra lhe falar<br>Mas com palavras não sei dizer..."
    },
    {
        titulo: "Trem Bala",
        artista: "Ana Vilela",
        arquivo: "musica2.mp3",
        letra: "Não é sobre ter todas as pessoas do mundo pra si<br>É sobre saber que em algum lugar, alguém zela por ti."
    },
    {
        titulo: "Exemplo de Música 3",
        artista: "Artista Nome",
        arquivo: "musica3.mp3",
        letra: "Aqui vai aquele trecho especial que você mais gosta dessa música."
    }
];

// --- LÓGICA DO CARROSSEL ---
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Auto-play carrossel (cada 5 segundos)
setInterval(() => moveSlide(1), 5000);

// --- LÓGICA DA PLAYLIST ---
const listaContainer = document.getElementById('lista-playlist');
const audioPlayer = document.getElementById('main-audio');
const trackTitle = document.getElementById('track-title');
const letraContainer = document.getElementById('letra-container');
const letraTexto = document.getElementById('letra-texto');

function renderPlaylist() {
    listaContainer.innerHTML = '';
    musicas.forEach((m, index) => {
        const item = document.createElement('div');
        item.className = 'musica-item';
        item.innerHTML = `
            <div>
                <strong>${index + 1}. ${m.titulo}</strong><br>
                <small style="color: #b3b3b3">${m.artista}</small>
            </div>
            <span>▶</span>
        `;
        item.onclick = () => selecionarMusica(index, item);
        listaContainer.appendChild(item);
    });
}

function selecionarMusica(index, elemento) {
    // Marcar ativa na lista
    document.querySelectorAll('.musica-item').forEach(i => i.classList.remove('active'));
    elemento.classList.add('active');

    // Atualizar Player
    const m = musicas[index];
    trackTitle.innerText = `${m.titulo} - ${m.artista}`;
    audioPlayer.src = m.arquivo;
    audioPlayer.play();

    // Atualizar Letra
    letraTexto.innerHTML = m.letra;
    letraContainer.style.display = 'block';
}

// Inicializar
renderPlaylist();