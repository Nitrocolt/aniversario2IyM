const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = ['#ff1493', '#ff69b4', '#ff1493', '#ff69b4'][Math.floor(Math.random() * 4)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) {
            this.size -= 0.02;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animate() {
    ctx.fillStyle = 'rgba(26, 0, 51, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 2; i++) {
        particles.push(new Particle(e.x, e.y));
    }
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();

// Contenido de cada sección
const sectionsContent = {
    gaming: {
        title: '🎮 Videojuegos',
        folder: 'gaming',
        items: [
            {
                title: 'Roblox',
                description: 'Yendo a diferentes experiencias, desde ser criaturas místicas hasta adivinar quien no es un npc.'
            },
            {
                title: 'Minecraft',
                description: 'Construyendo nuestro mundo perfecto, casa por casa, bloque por bloque, con mucho amor.'
            },
            {
                title: 'Fortnite',
                description: 'Crackeando 90s en el Olimpo, peleando contra Eminem e incluso jugando a ser estrellas de rock, todo a tu lado por supuesto.'
            },
            {
                title: 'Noches de Gaming',
                description: 'Esos momentos donde solo importa estar juntos, jugando y riendo sin parar.'
            }
        ]
    },
    music: {
        title: '🎵 Música',
        folder: 'music',
        items: [
            {
                title: 'Nuestras Canciones',
                description: 'Cada canción es un recuerdo, cada nota es un latido de nuestro corazón juntos.'
            },
            {
                title: 'Primeras recomendaciones',
                description: 'Ya en el lejano 2023 todo empezó a fluir al igual que las notas de una canción, todo empezo gracias a la música que sigue sonando en nuestro interior.'
            },
            {
                title: 'Canciones inolvidables',
                description: 'Escuchando a nuestros artistas favoritos, disfrutando de la música contigo.'
            },
        ]
    },
    zoo: {
        title: '🎬 Películas',
        folder: 'movies',
        items: [
            {
                title: 'Nuestras Películas Favoritas',
                description: 'Las películas que hemos visto juntos y que nos hacen recordar momentos especiales.'
            },
            {
                title: 'Noches de Cine',
                description: 'Esas tardes y noches viendo películas, con un bote de nutella y sintiendo tu cariño a través de la pantalla.'
            },
            {
                title: 'Películas absurdas',
                description: 'Incluso con las películas más estupidas, siento que son las ideales para poder ver junto a tí.'
            },
            {
                title: 'Reír Juntos',
                description: 'Las comedias que nos hacen reír sin parar, disfrutando de estar juntos.'
            }
        ]
    },
    cats: {
        title: '🐱 Nuestro Amor por los Gatos',
        folder: 'cats',
        items: [
            {
                title: 'Las Gatitas',
                description: 'Los gatos son lo mejor de la vida, y más aún porque los amamos juntos.'
            },
            {
                title: 'Foto y Video Gatos',
                description: 'Cada foto de los gatitos es un recuerdo más añadido, lleno de ternura y amor.'
            },
            {
                title: 'Cuidarlos Juntos',
                description: 'Alimentarlos, acariciarlos, y ver cómo demuestran su amor es lo más bonito.'
            },
            {
                title: 'Siempre animalitos',
                description: 'Sabemos que nunca podremos tener suficientes animalitos, y está bien porque el amor es infinito.'
            }
        ]
    }
    ,
    memes: {
        title: '😂 Memes',
        folder: 'memes',
        items: [
            { title: 'Nuestros memes favoritos', description: 'Una colección de momentos divertidos para recordar y compartir risas.' },
            { title: 'Mis favoritos', description: 'Memes que siempre te hacen reír.' }
        ]
    }
};

// Fotos por sección (EDITA AQUÍ las rutas si quieres actualizarlas)
const photosBySection = {
    gaming: [
        'Pictures/gaming/4504530866_5233782396_1729011393934.png',
        'Pictures/gaming/image (1).png',
        'Pictures/gaming/image.png',
        'Pictures/gaming/WhatsApp Image 2025-12-01 at 23.18.03 (1).jpeg',
        'Pictures/gaming/WhatsApp Image 2025-12-01 at 23.18.03.jpeg'
    ],
    music: [
        'Pictures/music/0f0ecd4bad376ae16a5ac5942fd1d36d.jpg',
        'Pictures/music/1900x1900-000000-80-0-0.jpg',
        'Pictures/music/252629.jpg',
        'Pictures/music/cfc713f0bb9c7b88cb3ad71ebced2321.jpg',
        'Pictures/music/Portada_DS_Digital-1-scaled.jpg',
        'Pictures/music/system-of-a-down-1.webp'
    ],
    movies: [
        'Pictures/movies/5479684.webp',
        'Pictures/movies/MV5BODUyZjkxZDMtZGI3ZC00ZmEwLTgwMTUtYTU4OTQ5YjU4ZjRlXkEyXkFqcGc@._V1_.jpg',
        'Pictures/movies/salchichas__310x443.jpg',
        'Pictures/movies/WhatsApp Image 2025-12-01 at 23.23.34 (1).jpeg',
        'Pictures/movies/WhatsApp Image 2025-12-01 at 23.23.36 (1).jpeg'
    ],
    cats: [
        'Pictures/cats/20241022_173425.jpg',
        'Pictures/cats/20241211_144651.jpg',
        'Pictures/cats/WhatsApp Image 2025-12-01 at 23.23.34.jpeg',
        'Pictures/cats/WhatsApp Image 2025-12-01 at 23.23.35 (1).jpeg',
        'Pictures/cats/WhatsApp Image 2025-12-01 at 23.23.35 (2).jpeg',
        'Pictures/cats/WhatsApp Image 2025-12-01 at 23.23.35.jpeg',
        'Pictures/cats/WhatsApp Image 2025-12-01 at 23.23.36 (2).jpeg',
        'Pictures/cats/WhatsApp Image 2025-12-01 at 23.23.36.jpeg'
    ]
    ,
    memes: [
        // Usar versiones .jpg/.png si existen (orden fijo: imagen1, imagen2, imagen3)
        'Pictures/memes/imagen1.jpg',
        'Pictures/memes/imagen2.jpg',
        'Pictures/memes/imagen3.png'
    ]
};

// Alias: la sección en `index.html` está marcada como 'zoo' para Películas,
// mapear 'zoo' a las mismas imágenes de 'movies' para que renderice correctamente.
photosBySection.zoo = photosBySection.movies;

// Manejador de clics en botones
document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const section = this.dataset.section;
        displaySection(section);
    });
});

// Mostrar sección seleccionada
function displaySection(sectionKey) {
    const contentArea = document.getElementById('content-area');
    const content = sectionsContent[sectionKey];
    
    // Si la sección es 'memes' queremos una estructura específica:
    // un enunciado (statement) y una foto grande.
    if (sectionKey === 'memes') {
        // Estructura solicitada: tres enunciados, asegurando que el tercero sea la frase de Fortnite
            const statementTexts = ['Hablan de contaminación lumínica', 'Y EL ALA?!', "Están crackeando 90's en el Olimpo!!"];
        const photos = (photosBySection.memes && photosBySection.memes.length > 0) ? photosBySection.memes : [];

        let cardsHTML = '';

        if (photos.length === 0) {
            // Mostrar 3 placeholders si no hay imágenes. Usar el tercer enunciado para la tercera tarjeta.
            for (let i = 0; i < 3; i++) {
                const st = statementTexts[i] || statementTexts[0];
                cardsHTML += `<div class="meme-card">
                    <div class="meme-left">
                        <p class="meme-statement">${st}</p>
                        <div class="meme-photo meme-placeholder">😹</div>
                    </div>
                </div>`;
            }
        } else {
            // Mostrar hasta 3 fotos y asignar enunciados por índice (si existe uno, si no usar el primero)
            photos.slice(0,3).forEach((p, idx) => {
                const st = statementTexts[idx] || statementTexts[0];
                cardsHTML += `<div class="meme-card">
                    <div class="meme-left">
                        <p class="meme-statement">${st}</p>
                        <div class="meme-photo"><img src="${p}" alt="Meme"></div>
                    </div>
                </div>`;
            });
        }

        const html = `<div class="section-content memes-section">
            <h2>${content.title}</h2>
            <div class="memes-grid">${cardsHTML}</div>
        </div>`;

        contentArea.innerHTML = html;

        return;
    }

    let html = `<div class="section-content">
        <h2>${content.title}</h2>`;

    content.items.forEach(item => {
        html += `<div class="memory-item">
            <strong>${item.title}</strong>
            <p>${item.description}</p>
        </div>`;
    });
    
    // Agregar reproductor de música si es la sección de música
    if (sectionKey === 'music') {
        html += `<div class="music-player-section">
            <h3>🎶 Reproductor de Música</h3>
            <div class="music-player">
                <div class="player-controls">
                    <button id="play-btn" class="player-btn">▶</button>
                    <button id="pause-btn" class="player-btn">⏸</button>
                    <button id="stop-btn" class="player-btn">⏹</button>
                </div>
                <div class="volume-control">
                    <span class="volume-icon">🔊</span>
                    <input type="range" id="volume-slider" class="volume-slider" min="0" max="100" value="70">
                    <span class="volume-label" id="volume-label">70%</span>
                </div>
                <audio id="audio-player" style="width: 100%; margin-top: 15px;"></audio>
                <div id="playlist" class="playlist"></div>
            </div>
        </div>`;
    }
    
    // Agregar sección de fotos
    html += `<div class="photos-section">
        <h3>📸 Fotos de Nuestros Momentos</h3>
        <div class="photos-grid" id="photos-grid-${sectionKey}">
            <div class="photo-placeholder">
                <span>+</span>
            </div>
            <div class="photo-placeholder">
                <span>+</span>
            </div>
            <div class="photo-placeholder">
                <span>+</span>
            </div>
        </div>
    </div>`;
    
    html += `</div>`;
    
    contentArea.innerHTML = html;
    
    // Renderizar fotos usando la lista interna (editable)
    renderPhotosFromList(sectionKey);
    
    // Cargar música si es la sección de música
    if (sectionKey === 'music') {
        loadMusicPlaylist();
    }
    
    // Scroll suave hacia el contenido
    setTimeout(() => {
        contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Cargar fotos desde la carpeta Pictures
async function loadPhotosFromFolder(sectionKey, folderName) {
    const photosGrid = document.getElementById(`photos-grid-${sectionKey}`);
    const folderPath = `Pictures/${folderName}`;
    
    try {
        // Intentar cargar lista de archivos
        const response = await fetch(folderPath);
        
        if (!response.ok) {
            console.log(`Carpeta ${folderPath} no encontrada o vacía`);
            return;
        }
        
        const html = await response.text();
        // Extraer nombres de archivos de imagen
        const imageRegex = /href=["']([^"']+\.(?:jpg|jpeg|png|gif|webp))["']/gi;
        const matches = [];
        let match;
        
        while ((match = imageRegex.exec(html)) !== null) {
            matches.push(match[1]);
        }
        
        // Limpiar grid y agregar fotos
        if (matches.length > 0) {
            photosGrid.innerHTML = '';
            matches.slice(0, 3).forEach((filename, index) => {
                const photoPlaceholder = document.createElement('div');
                photoPlaceholder.className = 'photo-placeholder';
                photoPlaceholder.innerHTML = `<img src="${folderPath}/${filename}" alt="Foto ${index + 1}">`;
                photosGrid.appendChild(photoPlaceholder);
            });
        }
    } catch (error) {
        console.log(`No se pudo cargar fotos de ${folderPath}`);
    }
}

// Renderizar fotos desde la lista `photosBySection`
function renderPhotosFromList(sectionKey) {
    const photosGrid = document.getElementById(`photos-grid-${sectionKey}`);
    if (!photosGrid) return;
    // Elegir hasta `slots` imágenes aleatorias por sección cada vez que se renderiza
    const images = photosBySection[sectionKey] || [];
    photosGrid.innerHTML = '';

    const slots = 3;

    // Helper: devuelve una copia mezclada del array
    function shuffleArray(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    const shuffled = shuffleArray(images);
    const chosen = shuffled.slice(0, slots);

    for (let i = 0; i < slots; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'photo-placeholder';

        if (chosen[i]) {
            const img = document.createElement('img');
            img.src = chosen[i];
            img.alt = `Foto ${i + 1}`;
            placeholder.appendChild(img);
        } else {
            const span = document.createElement('span');
            span.textContent = '+';
            placeholder.appendChild(span);
        }

        photosGrid.appendChild(placeholder);
    }
}

// Cargar playlist de música
async function loadMusicPlaylist() {
    const audioPlayer = document.getElementById('audio-player');
    const playlistDiv = document.getElementById('playlist');
    const folderPath = 'Music';
    
    // Lista de canciones - EDITA AQUÍ TUS CANCIONES
    const songs = [
        "Brain Stew - Green Day.mp3",
        "Bring Me To Life (Remastered 2023) - Evanescence.mp3",
        "Green Day - American Idiot (Official Audio) - Green Day.mp3",
        "Happy Together - The Turtles (1967) - Cameron Posh.mp3",
        "Jesus Don't Like That I'm Gay but Satans Cool With It (New Version) - Lil Boodang.mp3",
        "Joost, Ski Aggu & Otto Waalkes - Friesenjung (Official Video) - aggu31.mp3",
        "Lil Uzi Vert - The End (Feat. BABYMETAL) [Official Audio] - LIL UZI VERT.mp3",
        "Limp Bizkit - Break Stuff - DrecoTheDragon88.mp3",
        "Nirvana - Lithium - NirvanaGrunge87.mp3",
        "Nirvana - Rape Me (Visualizer) - NirvanaVEVO.mp3",
        "On Melancholy Hill - Gorillaz.mp3",
        "Pixies - Where Is My Mind (Official Lyric Video) - PixiesOfficial.mp3",
        "Save a Horse (Ride a Cowboy) – Big & Rich - Karen Watson.mp3",
        "Secondhand Serenade - Fall For You - 2ndHandSerenadeVEVO.mp3",
        "SEE YOU AGAIN featuring Kali Uchis - Tyler, The Creator.mp3",
        "Shut Me Up - Mindless Self Indulgence.mp3",
        "Song 2 - Blur.mp3",
        "System Of A Down - Lonely Day (Official HD Video) - systemofadownVEVO.mp3",
        "System Of A Down - Toxicity (Official HD Video) - systemofadownVEVO.mp3",
        "Ya No Hay Verano - Depresión Sonora - Depresión Sonora.mp3"
    ];
    
    if (songs.length > 0) {
        // Guardar playlist en variable global
        window.currentPlaylist = songs;
        window.currentTrackIndex = 0;
        
        // Crear lista de reproducción
        let playlistHTML = '<div style="margin-top: 15px;">';
        songs.forEach((filename, index) => {
            playlistHTML += `<div class="playlist-item" data-src="${folderPath}/${filename}" data-index="${index}">
                <span class="playlist-number">${index + 1}</span>
                <span class="playlist-name">${filename}</span>
            </div>`;
        });
        playlistHTML += '</div>';
        playlistDiv.innerHTML = playlistHTML;
        
        // Cargar primera canción por defecto
        audioPlayer.src = `${folderPath}/${songs[0]}`;
        
        // Agregar click listeners a las canciones
        document.querySelectorAll('.playlist-item').forEach(item => {
            item.addEventListener('click', function() {
                const src = this.dataset.src;
                const index = parseInt(this.dataset.index);
                window.currentTrackIndex = index;
                audioPlayer.src = src;
                audioPlayer.play();
            });
        });
        
        // Configurar control de volumen
        const volumeSlider = document.getElementById('volume-slider');
        const volumeLabel = document.getElementById('volume-label');
        
        if (volumeSlider) {
            volumeSlider.addEventListener('input', function() {
                const volume = this.value / 100;
                audioPlayer.volume = volume;
                volumeLabel.textContent = this.value + '%';
            });
            
            // Establecer volumen inicial
            audioPlayer.volume = 0.7;
        }
    } else {
        playlistDiv.innerHTML = '<p style="color: #dda0dd;">No hay canciones en la lista</p>';
    }
}

// Controles del reproductor
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners se agregan dinámicamente cuando se carga la sección de música
    document.addEventListener('click', function(e) {
        const playBtn = document.getElementById('play-btn');
        const pauseBtn = document.getElementById('pause-btn');
        const stopBtn = document.getElementById('stop-btn');
        const audioPlayer = document.getElementById('audio-player');
        
        if (e.target === playBtn) {
            audioPlayer?.play();
        } else if (e.target === pauseBtn) {
            audioPlayer?.pause();
        } else if (e.target === stopBtn) {
            if (audioPlayer) {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
            }
        }
    });
});


        // Burger menu logic
        const burgerBtn = document.getElementById('burger-btn');
        const sideMenu = document.getElementById('side-menu');
        const closeMenu = document.getElementById('close-menu');
        const menuMemes = document.getElementById('menu-memes');

        function openMenu() {
            if (sideMenu) { sideMenu.classList.add('open'); sideMenu.setAttribute('aria-hidden','false'); }
        }
        function hideMenu() {
            if (sideMenu) { sideMenu.classList.remove('open'); sideMenu.setAttribute('aria-hidden','true'); }
        }

        if (burgerBtn) burgerBtn.addEventListener('click', (e) => { e.stopPropagation(); openMenu(); });
        if (closeMenu) closeMenu.addEventListener('click', (e) => { e.stopPropagation(); hideMenu(); });

        // Cerrar al pulsar fuera del menú
        document.addEventListener('click', (e) => {
            if (!sideMenu) return;
            if (!sideMenu.contains(e.target) && e.target !== burgerBtn) hideMenu();
        });

        // Acceder a la sección Memes
        if (menuMemes) {
            menuMemes.addEventListener('click', () => {
                displaySection('memes');
                hideMenu();
            });
            menuMemes.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { displaySection('memes'); hideMenu(); }
            });
        }
// Loader: mostrar gatito (emoji) que recorre la pantalla y luego reproducir 'Miau' real si existe,
// o un miau sintetizado como fallback.
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const catEmojiEl = document.getElementById('loader-cat-emoji');
    const dotsEl = document.getElementById('loader-dots');

    // Animación de puntos suspensivos (uno a uno)
    let dotsInterval = null;
    function startDots() {
        if (!dotsEl) return;
        let count = 0;
        dotsEl.textContent = '';
        dotsInterval = setInterval(() => {
            count = (count + 1) % 4; // 0..3
            dotsEl.textContent = '.'.repeat(count);
        }, 450);
    }
    function stopDots() {
        if (dotsInterval) { clearInterval(dotsInterval); dotsInterval = null; }
    }

    

    function finishLoader() {
        // detener animación de puntos
        stopDots();

        // ocultar loader con transición
        if (loader) {
            loader.classList.add('hide');
            setTimeout(() => {
                if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
            }, 600);
        }
    }

    if (catEmojiEl) {
        // Iniciar puntos cuando comience la animación y parar al terminar
        startDots();
        catEmojiEl.addEventListener('animationend', () => {
            finishLoader();
        });
    } else {
        startDots();
        setTimeout(finishLoader, 3500);
    }
});

