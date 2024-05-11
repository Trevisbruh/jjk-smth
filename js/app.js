window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if ( scrollY >= 100 ) {
        const navbar = document.querySelector('.navbar');
        navbar.classList.add('bg-dark');
        navbar.classList.add('navbar-dark');
    } else {
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('bg-dark');
        navbar.classList.remove('navbar-dark');
    }
})

const characters = {
    "Gojo Saturo" : {
        "src": "gojo.jpg",
        "intro": "Gojo Satoru, a charismatic sorcerer with limitless power, enters with an enigmatic smile, commanding respect and awe effortlessly."
    },

    "Fushiguro Megumi" : {
        "src": "megumi.png",
        "intro": "Fushiguro Megumi, a stoic yet determined shaman, strides in with an aura of mystery, his presence speaking volumes silently."
    },

    "Itadori Yuji": {
        "src": "yuji.png",
        "intro": "Itadori Yuji, a spirited and kind-hearted youth, bursts onto the scene with boundless energy, ready to defy fate and protect."
    },

    "Nobara Kugisaki": {
        "src": "nobara.png",
        "intro": "Nobara Kugisaki, a fiery and independent exorcist, steps forward with a sharp tongue and even sharper skills, unapologetically herself."
    },

    "Yuta Okkotsu": {
        "src": "yuta.png",
        "intro": "Yuta Okkotsu, a haunted yet determined young exorcist, emerges with a burdened past, seeking redemption and control amidst chaos."
    },

    "Ryomen Sukuna": {
        "src": "sukuna.png",
        "intro": "Ryomen Sukuna, the infamous King of Curses, materializes with an aura of dread, his power unmatched, embodying chaos and destruction."
    },

    "Kento Nanami": {
        "src": "nanami.jpg",
        "intro": "Kento Nanami, the methodical and pragmatic sorcerer, strides forth with precision, his resolve unwavering, embodying duty and discipline."
    },

    "Suguru Geto": {
        "src": "geto.jpg",
        "intro": "Suguru Geto, the cunning and enigmatic sorcerer, moves with calculated grace, his allegiance shrouded, wielding power with sinister intent."
    }
}

Object.entries(characters).forEach(([name, about]) => {
    const chaCard = `
        <div class="card" style="width: 18rem; align-self: flex-start;">
            <img src='./assets/imgs/characters/${about.src}' class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${about.intro}</p>
            </div>
        </div>
    `

    const charactersContainer = document.querySelector('.ch-card-container');
    charactersContainer.innerHTML += chaCard;
})

