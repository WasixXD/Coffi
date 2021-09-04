document.querySelector('.navbar-toggler').addEventListener('click', () => {
    let navbarMenu = document.querySelector('.navbar-menu');

    if (navbarMenu.style.display === 'flex') {
        navbarMenu.style.display = 'none';
        return
    }

    navbarMenu.style.display = 'flex';
    navbarMenu.style.zIndex = 300000;
});

function getInfo(url){
    let req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    return req.responseText;
}

function addCard(coffee){
    card = document.createElement('div');
    cardMain = document.createElement('div');
    cardRow = document.createElement('div');
    cardImg = document.createElement('div');
    coffeeImg = document.createElement('img');
    cardCol = document.createElement('div');
    cardBody = document.createElement('div');
    coffeeTitle = document.createElement('h5');
    coffeeIng = document.createElement('p');
    coffeeDesc = document.createElement('div');
    descSub = document.createElement('h5');
    descText = document.createElement('p');

    card.className = 'col-md-6';
    cardMain.className = 'card bg-card-custom rounded-0 text-light px-3 py-3 mb-3';
    cardRow.className = 'row g-0';
    cardImg.className = 'col-md-4';
    coffeeImg.className = 'img-fluid mx-auto d-block rounded-circle';
    cardCol.className = 'col-md-8';
    cardBody.className = 'card-body';
    coffeeTitle.className = 'card-title';
    coffeeIng.className = 'card-text';
    coffeeDesc.className = 'mt-3 text-center';
    descSub.className = 'card-subtitle mt-2';
    descText.className = 'card-text mt-2 pb-2';

    cardMain.setAttribute('style', 'max-width: 540px;');
    coffeeImg.setAttribute('src', coffee.imgURL);

    coffeeTitle.innerHTML = coffee.nome;
    coffeeIng.innerHTML = coffee.ingredientes;
    descSub.innerHTML = 'Description';
    descText.innerHTML = coffee.desc;

    card.appendChild(cardMain);
    cardMain.appendChild(cardRow);
    cardRow.appendChild(cardImg);
    cardRow.appendChild(cardCol);
    cardRow.appendChild(coffeeDesc);
    cardImg.appendChild(coffeeImg);
    cardCol.appendChild(cardBody);
    cardBody.appendChild(coffeeTitle);
    cardBody.appendChild(coffeeIng);
    coffeeDesc.appendChild(descSub);
    coffeeDesc.appendChild(descText);

    return card;
}

function main(){
    let data = getInfo('menu/menu.json');
    let coffee = JSON.parse(data);
    let product = document.getElementById('products');

    coffee.forEach(prod => {
        let card = addCard(prod);
        product.appendChild(card);
    });
}

main();