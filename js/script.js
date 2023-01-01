

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


"use strict";
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
// console.log(personalMovieDB);
//start();
// rememberMyFilms();
personFilmLevel();
// writeYourGenres();
//showMyDB();
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



