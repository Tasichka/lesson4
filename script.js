let money,
	name,
	time,
	prise


function start() {

	while (isNaN(money) || money == '' || money == null){
		money = prompt('Введите ваш месячный бюджет.');

	}
	name = prompt('Введите название магазина.').toUpperCase();
	time = 21;
}
start();

let mainlist = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
};


function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt('какой тип товаров будет продавать?');

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
			console.log('Good');
			mainlist.shopGoods[i];
		} else {
			i = i - 1;
			alert('Mistakel');
		}
	}
}
chooseGoods();

function makeDiscount() {
	if (mainlist.discount == true) {
		prise = (prise/100)*80;
	}
}

function workTime(time) {
	if (time < 0 || time > 24) {
		console.log('Такого не бывает!')
	} else if (time > 8 || time < 17) {
		console.log('Надо работать! Нужно бабло заробатывать!');
	} else if (time > 6 || time < 22) {
		console.log('Иди гуляй на 4 стороны! У ТЕБЯ ФРИ ТАЙМ!');
	} else {
		console.log('Иди дрыхны, завтра рано вставать!');
	} 
}
workTime();

function makeDiscount() {
	if (mainlist.discount == true) {
		prise = (prise/100)*80;
	}
}
makeDiscount();

function hireEmployers() {
	for (let i = 1; i < 4; i++){
		let name = prompt('Имя работодателя:');
		mainlist.employers[i] = name;
	}
}
hireEmployers();


alert('Ваш дневной бюджет: ' + mainlist.budget / 30);

console.log(mainlist);