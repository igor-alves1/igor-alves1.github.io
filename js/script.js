// --- DADOS DA PLAYLIST ---
const musicas = [
    {
        titulo: "Mãe",
        artista: "Emicida, Dona Jacira, Anna Tréa",
        arquivo: "assets/music/Mãe.mp3", 
        letra: "Até meu jeito é o dela<br>Amor cego, escutando com o coração a luz do peito dela<br>Descreve o efeito dela: Breve, intenso, imenso<br>A ponto de agradecer até os defeito dela<br>Esses dia achei na minha caligrafia tua letra<br>E as lágrima molha a caneta"
    },
    {
        titulo: "House of Gold",
        artista: "Twenty One Pilots",
        arquivo: "assets/music/House of Gold.mp3",
        letra: "She asked me: Son, when I grow old<br>Will you buy me a house of gold?<br>[...]<br>I will make you queen of everything you see<br>I'll put you on the map<br>I'll cure you of disease"
    },
    {
        titulo: "Die Hard",
        artista: "Kendrick Lamar, Blxst, Amanda Reifer",
        arquivo: "assets/music/Die Hard.mp3",
        letra: "I pop the pain away, I slide the pain away<br>I picked you up when you fell and cut your knee<br>I told you not to cry and held you close to me"
    },
    {
        titulo: "Saber Amar",
        artista: "Os Paralamas do Sucesso",
        arquivo: "assets/music/Saber Amar.mp3",
        letra: "Saber amar<br>Saber deixar alguém te amar"
    },
    {
        titulo: "Simple Man",
        artista: "Lynyrd Skynyrd",
        arquivo: "assets/music/Simple Man.mp3",
        letra: "Mama told me when I was young<br>Come sit beside me, my only son<br>And listen closely to what I say<br>And if you do this, it'll help you some sunny day"
    },
    {
        titulo: "The Perfect Fan",
        artista: "Backstreet Boys",
        arquivo: "assets/music/The Perfect Fan.mp3",
        letra: "You showed me<br>Just how to walk without your hands<br>'Cause, mom, you always were the perfect fan<br>You showed me how to love<br>You showed me how to care<br>You showed me that you would always be there"
    },
    {
        titulo: "Pais E Filhos",
        artista: "Legião Urbana",
        arquivo: "assets/music/Pais E Filhos.mp3",
        letra: "Me diz: por que que o céu é azul?<br>Explica a grande fúria do mundo?"
    }
];

// --- LÓGICA DO CARROSSEL ---
const imagensCarrossel = [
    "36865e7b-a746-4cc9-8115-6b4d8e1062e2.jpg",
    "20250507_213641.jpg",
    "IMG_1298.JPG",
    "IMG_20170720_154839835_HDR.jpg",
    "IMG_20170720_155243257_HDR.jpg",
    "IMG-20191207-WA0006.jpg",
    "IMG-20210911-WA0006.jpg",
    "IMG-20220101-WA0088.jpg",
    "IMG-20220101-WA0133.jpg",
    "IMG-20220101-WA0142.jpg",
    "IMG-20220101-WA0149.jpg",
    "IMG-20220101-WA0151.jpg",
    "IMG-20220720-WA0000.jpg",
    "IMG-20240315-WA0015.jpeg"
];

const wrapper = document.getElementById('carrossel-wrapper');

function carregarImagens() {
    imagensCarrossel.forEach((nomeArquivo, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        const img = document.createElement('img');
        img.src = `./assets/images/${nomeArquivo}`;
        img.className = 'd-block w-100';
        img.alt = `Lembrança especial ${index + 1}`;
        
        itemDiv.appendChild(img);
        wrapper.appendChild(itemDiv);
    });
}

carregarImagens();

// --- LÓGICA DA PLAYLIST E PLAYER FIXO ---
const listaContainer = document.getElementById('lista-playlist');
const audioPlayer = document.getElementById('main-audio');
const trackTitleFixed = document.getElementById('track-title-fixed');
const trackArtistFixed = document.getElementById('track-artist-fixed');
const letraTexto = document.getElementById('letra-texto');

function renderPlaylist() {
    listaContainer.innerHTML = '';
    musicas.forEach((m, index) => {
        const item = document.createElement('div');
        item.className = 'musica-item';
        item.innerHTML = `
            <div>
                <span class="d-block titulo-musica mb-1">${index + 1}. ${m.titulo}</span>
                <small class="text-muted"><i class="fa-solid fa-microphone-lines me-1"></i>${m.artista}</small>
            </div>
            <div class="icone-play fs-4">
                <i class="fa-solid fa-play"></i>
            </div>
        `;
        item.onclick = () => selecionarMusica(index, item);
        listaContainer.appendChild(item);
    });
}

function selecionarMusica(index, elemento) {
    // Reseta estado de todos os itens
    document.querySelectorAll('.musica-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.icone-play i').className = 'fa-solid fa-play';
    });
    
    // Ativa item clicado
    elemento.classList.add('active');
    elemento.querySelector('.icone-play i').className = 'fa-solid fa-circle-play';

    // Atualiza Textos do Player Fixo
    const m = musicas[index];
    trackTitleFixed.innerText = m.titulo;
    trackArtistFixed.innerText = m.artista;
    
    // Configura e Toca Áudio
    audioPlayer.src = m.arquivo;
    audioPlayer.play();

    // Atualiza Trecho Favorito
    letraTexto.innerHTML = `"${m.letra}"`;
}

renderPlaylist();