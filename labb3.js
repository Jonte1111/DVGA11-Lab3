/*let newP = document.createElement('p');
let div = document.querySelector('.container');
let text = document.createTextNode(menu.Dryck[0].name); // tar namnet på det första objektet i dryck
newP.appendChild(text);
div.appendChild(newP);*/
var menu = {
	"Pizzor klass 1": [
		{"name": "Margherita", "contents": ["Tomatsås", "Ost"], "price": 65 },
		{"name": "Vesuvio", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 65 },
		{"name": "Altono", "contents": ["Tomatsås", "Ost", "Tonfisk"], "price": 65 }
	],
	"Pizzor klass 2": [
		{"name": "Calzone", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 80 },
		{"name": "Capricciosa", "contents": ["Tomatsås", "Ost", "Skinka", "Champinjoner" ], "price": 70 },
		{"name": "Tomaso", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor" ], "price": 70 },
		{"name": "Hawaii", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas" ], "price": 70 },
		{"name": "Oriental", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs" ], "price": 70 },
		{"name": "Venezia", "contents": ["Tomatsås", "Ost", "Skinka", "Tonfisk" ], "price": 70 },
		{"name": "Bolognese", "contents": ["Tomatsås", "Ost", "Köttfärs", "Lök" ], "price": 70 },
		{"name": "Napoli", "contents": ["Tomatsås", "Ost", "Räkor", "Champinjoner" ], "price": 70 }
	],
	"Pizzor klass 3": [
		{"name": "Bravo", "contents": ["Tomatsås", "Ost", "Skinka", "Bacon", "Lök", "a:Ägg" ], "price": 75 },
		{"name": "Princessa", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner" ], "price": 75 },
		{"name": "Kroppkärr", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "Champinjoner" ], "price": 75 },
		{"name": "Afrikano", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas", "Curry", "Banan" ], "price": 75 },
		{"name": "Önska", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner" ], "price": 85 },
		{"name": "Lambada", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "a:Räkor" ], "price": 75 },
		{"name": "Alsterdalen", "contents": ["Tomatsås", "Ost", "Skinka", "a:Crabfish", "a:Räkor" ], "price": 75 },
		{"name": "Paradis", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Ananas" ], "price": 75 },
		{"name": "Roma", "contents": ["Tomatsås", "Ost", "Skinka", "Kantareller", "Tomater (färska)" ], "price": 75 },
		{"name": "Banjogatan", "contents": ["Tomatsås", "Ost", "Skinka", "Salami", "Paprika" ], "price": 75 },
		{"name": "Rimini", "contents": ["Tomatsås", "Ost", "Köttfärs", "Gorgonzolaost", "Lök" ], "price": 75 },
		{"name": "Opera", "contents": ["Tomatsås", "Ost", "Köttfärs", "Ananas", "Curry", "Banan" ], "price": 75 },
		{"name": "Mesopotamia", "contents": ["Tomatsås", "Ost", "Salami", "Köttfärs", "a:Nötter"], "price": 75 }
	],
	"Såser": [
		{"name": "Bearnaisesås 10 cl", "price":  10 },
		{"name": "Kebabsås mild 10 cl", "price":  10 },
		{"name": "Kebabsås stark 10 cl", "price":  10 },
		{"name": "Kebabsås blandad 10 cl", "price":  10 },
		{"name": "Tzatzikisås 10 cl", "price":  10 },
		{"name": "Vitlökssås 10 cl", "price": 10}
	],
	"Dryck": [
		{"name": "Coca-Cola 33 cl", "price":  15 },
		{"name": "Coca-Cola light 33 cl", "price":  15 },
		{"name": "Fanta 33 cl", "price":  15  },
		{"name": "Sprite 33 cl", "price":  15 },
		{"name": "Mineralvatten 33 cl", "price":  15 },
		{"name": "Lättöl 33 cl", "price":  15 },
		{"name": "Coca-Cola 50 cl", "price":  20 },
		{"name": "Fanta 50 cl", "price":  20 }
		
	]
}

function addItems() { 
	//En array av rubrikerna för menyn
	let titleArr = ["Pizzor klass 1", "Pizzor klass 2", "Pizzor klass 3", "Såser", "Dryck"];
	for(let i = 0; i < titleArr.length; i++) {
		//Skapar nya divar för varje rubrik och lägger dem i container
		let hr = document.createElement('hr');
		hr.setAttribute('class', 'my-4');
		let container = document.querySelector('.container');
		let newRow = document.createElement('div');
		newRow.setAttribute('class', 'nyRad');
		let titleH1 = document.createElement('h1');
		let titleText = document.createTextNode(titleArr[i]);
		titleH1.appendChild(titleText);
		newRow.appendChild(titleH1);
		newRow.appendChild(hr);
		container.appendChild(newRow);
	}
}
//Lägger till alla objekt under korrekt rubrik, använder ett grid system med rows och columns
//Funktionen tar emot en kategori från json filen samt ett index som bestämmer under vilken kategori objekten skall hamna
/*function addItems2(category, index) {
		let kategori = document.querySelectorAll('.nyRad')[index];
	for(let i = 0; i < category.length; i++) {
		let name = document.createTextNode(category[i].name);
		let allergiButton = document.createElement('input');
		let hr = document.createElement('hr');
		//En linje 
		hr.setAttribute('class', 'my-4');
		let price = document.createTextNode(category[i].price + 'kr');
		let addButton = document.createElement('input');
		let nameCol = document.createElement('div');
		let priceCol = document.createElement('div');
		let buttonCol = document.createElement('div');
		let allergiCol = document.createElement('div');
		let newRow = document.createElement('div');
		let nameH2 = document.createElement('h3');
		let priceH2 = document.createElement('h3');
		let blankDiv = document.createElement('div');
		let buttonText = 'köp';
		let collapseDiv = document.createElement('div');
		let collapseCard = document.createElement('div');
		let testText = document.createTextNode(category[i].contents);
		//Gör diven lika bred som raden
		collapseDiv.setAttribute('class', 'collapse col-12');
		collapseDiv.id = 'collapseTarget' + i + index;
		collapseCard.setAttribute('class', 'card card-body');

		collapseCard.appendChild(testText);
		collapseDiv.appendChild(collapseCard);

		allergiButton.type = 'button';
		allergiButton.value = 'Ingredienser';

		addButton.type = 'button';
		addButton.value = buttonText;

		
		addButton.addEventListener('click', buy);

		nameCol.setAttribute('class','col');
		priceCol.setAttribute('class', 'col');
		buttonCol.setAttribute('class', 'col');
		allergiCol.setAttribute('class', 'col');
		newRow.setAttribute('class', 'row');
		addButton.setAttribute('class', 'btn btn-primary');
		allergiButton.setAttribute('class', 'btn btn-primary');
		allergiButton.dataset.toggle = 'collapse';
		allergiButton.dataset.target = '#collapseTarget' + i + index;
		allergiButton.ariaExpanded = 'false';
		allergiButton.ariaBusy = 'collapseTarget' + i + index;
		//Lägger till text i h2
		nameH2.appendChild(name);
		priceH2.appendChild(price);
		//Lägger till h2 i kolumn	
		nameCol.appendChild(nameH2);
		priceCol.appendChild(priceH2);
		buttonCol.appendChild(addButton);
		
		//Lägger till kolumn i rad
		newRow.appendChild(nameCol);
		newRow.appendChild(priceCol);
		if(category != menu.Såser && category != menu.Dryck) {
			allergiCol.appendChild(allergiButton);
			newRow.appendChild(allergiCol);
		}
		newRow.appendChild(buttonCol);
		newRow.appendChild(collapseDiv);
		//Lägger till rad i div
		blankDiv.appendChild(newRow);
		//Lägger till div + sträck i kategori
		kategori.appendChild(blankDiv);
		kategori.appendChild(hr);
	}
}*/

function buy() {
	console.log('köp');
}

function addItems2(menu) {
/*for(let j = 0; j < 5; j++) {
	let category = menu;
	if(j == 0)
		category = menu["Pizzor klass 1"];	

	else if(j == 1)
		category = menu["Pizzor klass 2"];
		
	else if(j == 2)
		category = menu["Pizzor klass 3"];

	else if(j == 3)
		category = menu.Såser;

	else
		category = menu.Dryck;*/
	let kategori = $('.nyRad',j);
	for(let i = 0; i < category.length; i++) {
		let name = document.createTextNode(category[i].name);
		let allergiButton = $('<input></input>').attr({'class':'btn btn-primary','type':'button', 'value':'Ingredienser',
		'data-toggle': 'collapse', 'data-target':'#collapseTarget', 'aria-expanded': 'false', 'aria-controls':'collapseTarget'});
		//En linje 
		let hr = $('<hr></hr>').attr('class', 'my-4');
		let price = category[i].price + 'kr';
		let addButton = $('<input></input>').attr({'class':'btn btn-primary','type':'button', 'value':'+'});
		let newRow = $('<div></div>').attr('class', 'row');
		let nameH2 = $('<h3></h3>').append(name);
		let priceH2 = $('<h3></h3>').append(price);
		let nameCol = $('<div></div>').attr('class', 'col').append(nameH2);
		let buttonCol = $('<div></div>').attr('class', 'col').append(addButton);
		let priceCol = $('<div></div>').attr('class', 'col').append(priceH2);
		let allergiCol = $('<div></div>').attr('class', 'col').append(allergiButton);
		let blankDiv = $('<div></div>');
		let collapseContainer= $('<div></div>').attr({'class': 'collapse col-12', 'id':'collapseTarget'
		+ i + j});
		let collapseCard = $('<div></div>').attr({'class':'card card-body'});
		let ingredienser= category[i].contents;
		//Gör diven lika bred som raden
		nameCol.append(nameH2);
		newRow.append(nameCol, priceCol, buttonCol);
		if(category != menu.Dryck && category != menu.Såser) {
			newRow.append(allergiCol);
		}
		kategori.append(newRow);
	}
}

window.addEventListener('load', init, true);
function init() {
	addItems2(menu);
}