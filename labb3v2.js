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

$(function() {
	//Skapar välj bord sida
	let bordContainer = $('<div></div>').attr('class','bordContainer').appendTo('body');
	let jumboBord = $('<div></div>').attr('class', 'jumbotron').appendTo(bordContainer);
	let jumboText = $('<h1></h1>').attr('class', 'display-4').text('Välj Bord').appendTo(jumboBord);
	let line = $('<hr></hr>').attr('class', 'my-4').appendTo(jumboBord);
	let formGroup =$('<div></div>').attr('class','form-group').appendTo(jumboBord);
	let selektion = $('<select></select>').attr({'class':'form-select form-select-lg mb-3', 'aria-label':'.form-select-lg'}).appendTo(formGroup);
	let option1 = $('<option></option>').attr('value','Default').text('Välj vilket bord som skall serveras: ').appendTo(selektion);
	let option2 = $('<option></option>').attr('value','1').text('Bord 1').appendTo(selektion);
	let option3 = $('<option></option>').attr('value','2').text('Bord 2').appendTo(selektion);
	let option4 = $('<option></option>').attr('value','3').text('Bord 3').appendTo(selektion);
	//Lite padding på selektionen för att göra den större
	selektion.css('padding', '10px');
	let continueButton = $('<input></input>').attr({'class':'btn btn-primary continue','value':'Gå vidare','type':'button'}).appendTo(formGroup);




	//Skapar menysidan
    let titleArr = ["Pizzor klass 1", "Pizzor klass 2", "Pizzor klass 3", "Såser", "Dryck"];
	let produktArr = [];
    for(let i = 0; i < titleArr.length; i++) {
        let hr = $('<hr></hr>').attr('class', 'my-4');
        let container = $('.container'); 
        let newRow = $('<div></div>').attr('class', 'nyRad');
        let titleH1 = $('<h1></h1>');
        let titleText = titleArr[i];
        titleH1.append(titleText);
        newRow.append(titleH1, hr);
        container.append(newRow);
    }
	//En array av menyobjekten
	var menuArr = [menu["Pizzor klass 1"], menu["Pizzor klass 2"], menu["Pizzor klass 3"],
	menu.Såser, menu.Dryck];
    console.log(menuArr[4][4].name);
	//Skapar botten menyn
	let cartDiv = $('<div></div>').attr({'class': 'cart w-100 fixed-bottom bg-primary rounded-top'}).appendTo('.container');
	let h3 = $('<h3>Visa Beställning</h3>').attr({'class':'h-15','id':'showOrder'})
	h3.css('color', 'white').appendTo(cartDiv);
	//Skapar en vit div inuti cartDiv
	let cartContentDiv  = $('<div></div>').attr('class', 'w-100 h-75 d-none bg-light contentDiv overflow-auto');
	//div
	let listContainer = $('<ul></ul>').attr({'class':'list-group','id':'#listContainer'}).appendTo(cartContentDiv);
	let cartButtonDiv = $('<div></div>').attr('class', 'hej');
	let	cartButton = $('<input></input>').attr({'class':'btn btn-light d-none cartButton','value': 'Gå vidare', 'type':'button'}).appendTo(cartButtonDiv); 
	cartContentDiv.appendTo(cartDiv);

	cartDiv.append(cartButtonDiv);
	//let toggleButton = $('<input></input>').attr({'class':'btn btn-light toggleCart','type':'button', 'value':'Visa Beställning'}).appendTo(cartDiv);
	for(let j = 0; j < 5; j++) {
		for(let k = 0; k < menuArr[j].length;k++) {
			//Printar alla objekt i alla arrayer
			//console.log(menuArr[j][k]);
			let contentArray = menuArr[j][k].contents;
			//Hämtar text som skall visas
			
			let name = document.createTextNode(menuArr[j][k].name);
			let price = menuArr[j][k].price + 'kr';
			//Hämtar/skapar nya rader/radbryt
			let kategori = $('.nyRad').eq(j);
			let rad = $('<div></div>').attr('class', 'row');
			let hr = $('<hr></hr>');
			//Collapse för Ingredienser
			let collapseDiv = $('<div></div>').attr({'class': 'collapse col-12', 'id': 'collapseTarget' + j + k});
			let collapseCard = $('<div></div>').attr('class', 'card-body').appendTo(collapseDiv);
			let ingrediensText = $('<p></p>').text(menuArr[j][k].contents);
			let allergiP = $('<p></p>');
		
			//Om kategorin är pizza 1,2,3 loopa igenom content arrayen.
			//Skapa en ny p tag
			//Om 'a:' finns i ett av elementen i arrayen
			//ta bort de första två tecknen (a:), gör texten röd i p tagen och lägg till den nya strängen
			if(j < 3) {
			for(const element of (menuArr[j][k].contents)) {
				let allergiP = $('<p></p>');
				if(element.indexOf('a:') >= 0) {
					let substring = element.substring(2);
					allergiP.css('color','red').text(substring);
				}
				else
					allergiP.text(element);
				collapseCard.append(allergiP);
			}
		}

			//Kolumner
			let nameCol = $('<div></div>').attr({'class': 'col-6', 'id':'namn'});
			let priceCol= $('<div></div>').attr({'class':'col-6', 'id':'pris'});
			let ingrediensCol= $('<div></div>').attr('class','col-6');
			let addCol= $('<div></div>').attr('class','col-6');
			//H2 taggar för att visa namn/pris
			let nameH2 = $('<h2></h2>').append(name);
			let priceH2 = $('<h2>').append(price);
			//Knappar
			let addButton = $('<input></input>').attr({'class':'btn btn-primary addButton','type':'button', 'value':'+'});
			let allergiButton = $('<input></input>').attr({'class':'btn btn-primary allergi','type':'button',
			 'value':'Ingredienser',
			'data-toggle': 'collapse',
			'data-target':'#collapseTarget' + j + k, 'aria-expanded': 'false', 
			'aria-controls':'collapseTarget'});

			//Ingrediensknapp skall inte visas på sås/dryck sektionen
			if(menuArr[j] != menu.Dryck && menuArr[j] != menu.Såser) {
				ingrediensCol.append(allergiButton);
			}
			//Lägger till knapp/namn/pris till rätt kolumner
			addCol.append(addButton);
			nameCol.append(nameH2);
			priceCol.append(priceH2);
			//Lägger till kolumner i raden
			rad.append(nameCol, priceCol,ingrediensCol, addCol, collapseDiv);
			//Lägger till raden av kolumner + ett mellanrum till kategorin
			kategori.append(rad);
			kategori.append(hr);
			//Lägger till en navbar
		}
	}

	//Skapar Kvittosidan
	let kvittoContainer = $('<div></div>').attr('class', 'kvittoContainer d-none').appendTo('body');
	let jumboKvittoDiv = $('<div></div>').attr('class', 'jumbotron jumbotron-fluid').appendTo(kvittoContainer);
	let jumboKvittoContainer = $('<div></div>').attr('class', 'container2').appendTo(jumboKvittoDiv);
	let kvittoH1 = $('<h1>Kvitto: </h1>').attr('class', 'display-5 text-center').appendTo(jumboKvittoContainer);
	let kvittoText = $('<p>Kontrollera uppgifterna </p>').attr('class', 'lead text-center').appendTo(kvittoH1);
	let orderListDiv = $('<div></div>').attr('class','orderListDiv').appendTo(kvittoContainer);
	let orderList = $('<ul></ul>').attr('class','list-group kvittoList').appendTo(orderListDiv);
	//Skapar en ny div samt li för att få totalkostnaden sist på sidan
	let totalDiv = $('<div></div>').attr('class','totalDiv');
	let totalContainer = $('<li></li>').attr('class', 'list-group-item list-group-item-action totalKostnad').appendTo(totalDiv);
	let backToOrderButton = $('<input></input>').attr({'class':'btn btn-primary backButtonOrder', 'type':'button','value':'Tillbaka'}).appendTo(totalDiv);
	totalDiv.appendTo(kvittoContainer);

	//Lyssnare för knappar

	$('.continue').on('click', function() {
		console.log($('.form-select').val());
		let formValue = $('.form-select').val();
		if(formValue != 'Default') {
			$('.bordContainer').hide();
			$('.container').toggleClass('d-none');
			let bordText = $('<li></li>').attr('class', 'list-group-item list-group-item-action').text('Bord ' + formValue + ':');
			$('.orderListDiv').prepend(bordText);
		}
		else 
			alert('Vänligen välj ett bord');
	});

	//Togglar collapse diven när knappen "ingredienser" klickas
	$('.allergi').on('click',function(event) {
		let clicked = event.target.dataset.target;
		$(clicked).collapse('toggle');
	});

	$('.addButton').on('click', function() {
		//Skapar ett objekt av namn + pris...
		var produkt = {
			namn: $(this).parent().siblings('#namn').children().text(),
			pris: $(this).parent().siblings('#pris').children().text()
		}
		//och pushar det till en array
		produktArr.push(produkt);
		//Loopar igenom arrayen och adderar priserna till totalpris
		var totalPris = 0;
		for(let i = 0; i < produktArr.length; i++) {
			var pris = produktArr[i].pris;
			var pris2 = pris.replace('kr','');
			var pris3 = parseInt(pris2);
			totalPris += pris3;
		}

		console.log(totalPris);
		var removeButton = $('<a>Ta bort</a>').attr({'class':'btn btn-danger removeButton'});
		let listItem = $('<li></li>').attr('class', 'list-group-item list-group-item-action');
		let listItemKvitto = $('<li></li>').attr('class', 'list-group-item list-group-item-action');
		let listItemTotalPris = $('<li></li>').attr('class', 'list-group-item list-group-item-action');
		let namnPris = produkt.namn + ' ' + produkt.pris;
		listItemTotalPris.append(totalPris);
		listItem.append(namnPris, removeButton);
		//listItem.append(removeButton);
		$('.list-group').append(listItem);
		$('.kvittoList').append(listItem);
		//Uppdaterar totalkostnaden när en ny vara läggs till
		$('.totalKostnad').text('Totalt: ' + totalPris + 'kr');
	});
	//Tar bort det list item som knappen ligger i
	$('.list-group').on('click','.removeButton', function(e) {
		console.log('fuck detta');
		$(this).parent().remove();
	});
	//Togglar visning av contentDiv
	$('#showOrder').on('click', function(e) {
		let divContent = $('.contentDiv');
		if(e.target !== this)
			return;
		$('.cart').toggleClass('h-50');
		$('.contentDiv').toggleClass('d-none');
		$('.cartButton').toggleClass('d-none');
	});
	//Döljer sidan efter att beställningen är klar
	$('.cartButton').on('click', function() {
		$('.container').hide();
		$('.kvittoContainer').toggleClass('d-none');
		$('#listContainer').appendTo('.kvittoList');
	});
	//Döljer kvittosidan och visar beställnings sidan
	$('.backButtonOrder').on('click', function() {
		$('.kvittoContainer').toggleClass('d-none');
		$('.container').show();
	});

	
});
