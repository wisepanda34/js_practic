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

let numberOfFilms = +prompt("How much did you watch the films?", "");
console.log(numberOfFilms);


const personalMovieDB = {
	coumt: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

let watchedFilm = prompt("What film did you watch recently?", "");
let gradeOfFilm = +prompt("What is your rating of this film?", "");

// logan: 8.3

let watchedFilm1 = prompt("What film did you watch recently?", "");
let gradeOfFilm1 = +prompt("What is your rating of this film?", "");

// logan: 8.3
personalMovieDB.movies[watchedFilm] = gradeOfFilm;
personalMovieDB.movies[watchedFilm1] = gradeOfFilm1;

/* personalMovieDB.movies.watchedFilm1;
personalMovieDB.movies.watchedFilm1 = gradeOfFilm1; */
console.log(personalMovieDB);

