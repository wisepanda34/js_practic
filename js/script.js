"use strict";

// const answers = [];
/* answers[0] = prompt("What is your name?", '');
answers[1] = prompt("What is your surname?", '');
answers[2] = prompt("How is your old?", '');

document.write(answers); */
// console.log(typeof (answers));

/* const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = "Ivan";
alert(`Hello, ${user}`); */




// Lesson #1
/*1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// let numberOfFilms = +prompt("How much did you watch the films?", "");
// console.log(numberOfFilms);




/* 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" */






/* 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять */

// do {
// 	watchedFilm = prompt("What film did you watch recently?", "");
// } while (watchedFilm.length < 10)




// watchedFilm = prompt("What film did you watch recently?", "");

// while (watchedFilm.length < 10) {
// 	watchedFilm = prompt("What film did you watch recently?", "");
// }

// let gradeOfFilm = +prompt("What is your rating of this film?", "");


// let watchedFilm1 = prompt("What film did you watch recently?", "");
// let gradeOfFilm1 = +prompt("What is your rating of this film?", "");


// personalMovieDB.movies[watchedFilm] = gradeOfFilm;
// personalMovieDB.movies[watchedFilm1] = gradeOfFilm1;

// personalMovieDB.movies.watchedFilm1;
// personalMovieDB.movies.watchedFilm1 = gradeOfFilm1;
// console.log(personalMovieDB);


/* let num = 50;
(!num == 50) ? console.log('ok!') : console.log('NO!');
 switch (num) {
	case 49:
		console.log('wrong');
		break;
	case 100:
		console.log('wrong');
		break;
	case 50:
		console.log('right');
		break;
	default: console.log('error'); break;
}
 */

// let num = 50;
/* while (num < 55) {
	console.log(num);
	num++;
} */

/* do {
	console.log(num);
	num++;
} while (num < 55) */

// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		// break;
// 		continue;
// 	}
// 	console.log(i);
// }
// let num = 20;
// function showFirstMessage(text) {
// 	console.log(text);
// 	console.log(num);
// }
// showFirstMessage("Hello JS!");
// console.log(num);

// const logg = "Hello world";
// console.log(logg.slice(6, 11));
// console.log(logg.indexOf("r"));
// console.log(logg.indexOf("w"));
// console.log(logg.toUpperCase());
// console.log(logg.slice(3));
// console.log(logg.substring(3, 4));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "15.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres



// const numberOfFilms = +prompt("How much did you watch the films?", "");
// //let numberOfFilms;
// let watchedFilm;
// let gradeOfFilm;


// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false

// };
// console.log(personalMovieDB);
// // start();
// rememberMyFilms();
// personFilmLevel();
// writeYourGenres();
// showMyDB();
// showHidden(personalMovieDB.privat);

// function start() {
// 	numberOfFilms = +prompt("How much did you watch the films?", "");

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt("How much did you watch the films?", "");
// 	}
// }

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {

// 		watchedFilm = prompt("What film did you watch recently?", "");
// 		gradeOfFilm = +prompt("What is your rating of this film?", "");

// 		if (watchedFilm != null && gradeOfFilm != null && watchedFilm != '' && gradeOfFilm != '' && watchedFilm.length < 10) {

// 			personalMovieDB.movies[watchedFilm] = gradeOfFilm;
// 			console.log('done');
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// 	console.log(personalMovieDB);
// }

// function personFilmLevel() {
// 	if (personalMovieDB.count < 10) {
// 		console.log('Просмотрено довольно мало фильмов');
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log('Вы классический зритель');
// 	}
// 	else if (personalMovieDB.count >= 30) {
// 		console.log('Вы киноман');
// 	}
// 	else {
// 		console.log('Произошла ошибка');
// 	}
// }

// function showMyDB() {
// 	if (personalMovieDB.privat == false) {
// 		console.log(personalMovieDB);
// 	} else {
// 		console.log('privat is true');
// 	}
// }

// function writeYourGenres() {
// 	for (let i = 0; i < 3; i++) {

// 		let genre = prompt("Ваш любимый жанр под номером " + `${i + 1}` + "?", "");
// 		if (genre != null && genre != '') {
// 			personalMovieDB.genres[i] = genre;
// 		}
// 		else i--;
// 	}
// }

// function showHidden(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

const numberOfFilms = +prompt("How much did you watch the films?", "");
//let numberOfFilms;
let watchedFilm;
let gradeOfFilm;


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false

};
console.log(personalMovieDB);
// start();
rememberMyFilms();
personFilmLevel();
writeYourGenres();
showMyDB();
showHidden(personalMovieDB.privat);

function start() {
	numberOfFilms = +prompt("How much did you watch the films?", "");

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("How much did you watch the films?", "");
	}
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {

		watchedFilm = prompt("What film did you watch recently?", "");
		gradeOfFilm = +prompt("What is your rating of this film?", "");

		if (watchedFilm != null && gradeOfFilm != null && watchedFilm != '' && gradeOfFilm != '' && watchedFilm.length < 10) {

			personalMovieDB.movies[watchedFilm] = gradeOfFilm;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
	console.log(personalMovieDB);
}

function personFilmLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	}
	else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	}
	else {
		console.log('Произошла ошибка');
	}
}

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	} else {
		console.log('privat is true');
	}
}

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {

		let genre = prompt("Ваш любимый жанр под номером " + `${i + 1}` + "?", "");
		if (genre != null && genre != '') {
			personalMovieDB.genres[i] = genre;
		}
		else i--;
	}
}

function showHidden(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}



// //=========Callback================================================

// function first() {
// 	setTimeout(function () {
// 		console.log('111');
// 	}, 1000);
// }

// function second() {
// 	console.log('222');
// }

// first();
// second();

// function learnJS(lang, callback) {
// 	console.log(`I learn ${lang}`);
// 	callback();
// }

// function done() {
// 	console.log('I came this lesson');
// }

// learnJS('js', done);


// ===========OBJECT==============================================

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red',
// 	},
// 	makeTest: function () {
// 		console.log('Test');
// 	}
// };
//----created by developer method into object----
// options.makeTest();

//----Desrtucturization----------------------
// const { border, bg } = options.colors;
// console.log(border);

//-----print the number of object keys-----
// console.log(Object.keys(options).length);


// console.log(options);
// delete options.name;
// console.log(options);

// let counter = 0;
// for (let key in options) {
// 	if (typeof (options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Property ${i} has value ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`Property ${key} has value ${options[key]}`);
// 		counter++;
// 	}
// 	console.log(counter);
// }

//=========ARRAY============================
//const arr = [1, 52, 3, 46, 8];

//--function for sort the nums into array------
// arr.sort(compareNum);
// function compareNum(a, b) {
// 	return a - b;
// }


// arr.pop();
// arr.push(10);
//console.log(arr);
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(arr[value]);
// }
// arr.forEach(function (item, i, arr) {
// 	console.log(`${i}: ${item} into ${arr}`);
// });

// const str = prompt(",");
// const products = str.split(", ");
// products.sort();
// console.log(products);
// console.log(products.join('; '));


// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

//---Function for getting data to other object - copy of object
// function copy(mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}

// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4
// 	}
// };
// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// console.log(numbers);
// console.log(newNumbers);

// const add = {
// 	d: 17,
// 	e: 20
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

//====Create copy of Array=============
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'sdffg';
// console.log(newArray);
// console.log(oldArray);


//----  spread ... -------------------------
// const video = ['youtube', 'vimeo', 'rutube'],
// 	blogs = ['wordpress', 'livejournal', 'blogger'],
// 	internet = [...video, ...blogs, 'vk', 'fb'];
// console.log(internet);


// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const qqq = {
// 	one: 1,
// 	two: 2
// };
// const newQQQ = { ...qqq };
// console.log(newQQQ);

//=========  __proto__  ==========================

// const soldier = {
// 	health: 400,
// 	armor: 100,
// 	sayHello: function () {
// 		console.log('Hello');
// 	}
// };

// create object "john", who is prototip of "soldier"---!!!!!
// const john = Object.create(soldier);


//john.__proto__ = soldier; - old syntacsis, no use

//Dinamic bind to object- new syntacsis
// Object.setPrototypeOf(john, soldier);


// console.log(john.armor);
// john.sayHello();

