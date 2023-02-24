const containerDom = document.querySelector('.container');

//approccio con innerHtml
for (let i = 1; i <= 100; i++ ) {
    const quadratino = `<div class="square">${i}</div>`;
    containerDom.innerHTML += quadratino;
}

//approccio con creazione dinamica di elementi
/*
for (let i = 1; i <= 100; i++ ) {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    quadratino.append(i);
    containerDom.append(quadratino);
}
*/