const chosen = document.querySelector("#chosen");
const mangaList = document.querySelector(".manga-container");

let chapters = {
    all: [
        "chapter0.jpg",
        "chapter1.jpg",
        "chapter2.jpg",
        "chapter3.jpg",
        "chapter4.jpg",
        "chapter5.jpg",
        "chapter6.jpg",
        "chapter7.jpg",
        "chapter8.jpg",
        "chapter9.jpg",
        "chapter10.jpg",
        "chapter11.jpg",
        "chapter12.jpg",
        "chapter13.jpg",
        "chapter14.jpg",
        "chapter15.jpg",
        "chapter16.jpg",
        "chapter17.jpg",
        "chapter18.jpg",
        "chapter19.jpg",
        "chapter20.jpg",
        "chapter21.jpg",
        "chapter22.jpg",
        "chapter23.jpg",
        "chapter24.jpg",
        "chapter25.jpg",
        "chapter26.jpg",
    ],
    one: [
        "chapter0.jpg",
    ],
    two: [
        "chapter1.jpg",
        "chapter2.jpg",
        "chapter3.jpg",
    ],
    three: [
        "chapter3.jpg",
        "chapter4.jpg",
    ],
    four: [
        "chapter4.jpg",
        "chapter5.jpg",
        "chapter6.jpg",
        "chapter7.jpg",
    ],
    five: [
        "chapter7.jpg",
        "chapter8.jpg",
    ],
    six: [
        "chapter8.jpg",
        "chapter9.jpg",
    ],
    seven: [
        "chapter10.jpg",
        "chapter11.jpg",
        "chapter12.jpg",
        "chapter13.jpg",
        "chapter14.jpg",
        "chapter15.jpg",
        "chapter16.jpg"
    ],
    eight: [
        "chapter16.jpg",
        "chapter17.jpg",
    ],
    nine: [
        "chapter17.jpg",
        "chapter18.jpg",
    ],
    ten: [
        "chapter18.jpg",
        "chapter19.jpg",
        "chapter20.jpg",
        "chapter21.jpg",
        "chapter22.jpg",
        "chapter23.jpg",
        "chapter24.jpg",
        "chapter25.jpg",
    ],
    eleven: [
        "chapter25.jpg",
        "chapter26.jpg",
    ]
}

count = 0;

chosen.addEventListener('change', () => {
    const mangas = document.querySelectorAll('.manga');
    mangas.forEach((ma) => {
        ma.classList.remove('active');
    })

    chapters[chosen.value].forEach((chapter) => {
        mangas[chapters['all'].indexOf(chapter)].classList.add('active');
    })
})

chapters['all'].forEach((chapter) => {
    let manga = `
        <div class="manga bg-dark">
            <img src="assets/imgs/chapters/${chapter}" alt="...">
            <h1>Chapter ${count}</h1>
        </div>  
    `

    mangaList.innerHTML += manga;
    const mangas = document.querySelectorAll('.manga')
    mangas.forEach((manga) => {
        manga.classList.add('active');
    })
    count++;
})