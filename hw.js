/* EXERCISE 1
  Given the object below, write a piece of code for programmatically removing the last skill from the skills array inside the me object.
 */
var items = ["victor", "Nigerian", "calabar"]

console.log(items.pop);
/* EXERCISE 2
Write a piece of code to create an array of only ODD numbers from 1 to 100*/

var oddNumbers = [];
for (var i = 1; i <= 100; i += 2) {
  if (i % 2 != 0) {
    oddNumbers.push(i);
    console.log(oddNumbers);
  } else {
  }
}

/* EXERCISE 3
Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 100 inclusive
 */

var randomArray = [];
for (let i = 1; i <= 10; i++) {
  var rand = Math.floor(Math.random() * 101 + 1);
  randomArray.push(rand);
}
console.log(randomArray);

/* EXERCISE 4
  Write a piece of code for getting only even numerical values from an array . 
 */
var randomArray = [];
for (let i = 0; i <= randomArray.length; i++) {
  if (randomArray[i] % 2 === 0) {
    console.log(randomArray.push(randomArray));
  } else {
  }
}

/* EXERCISE 5
Write a piece of code to sum up the numbers in an array
 */
var sum = 0;
for (var i = 1; i <= randomArray.length; i++) {
  sum = sum + myArray[i];
}
console.log(sum);
/* EXERCISE 6
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
var box = [2, 6, 7, 4, 3, 1];
for(let i = 0; i<=box.length; i++){
  box[i] = box[i] + 1
}
console.log(box);


/* EXERCISE 7 (EXTRA)
 Write a piece of code for deleting only even entries from an array.
*/
var vicArray = [1, 4, 7, 2, 9, 10, 23, 11, 18, 60];
for(var i = 0; i<=vicArray.length; i++){
  if(vicArray[i]%2 == 0){
    vicArray = vicArray[i].filter
  }
}
console.log(vicArray);
/* EXERCISE 8
Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 10 inclusive WITHOUT duplicates
 */
var randomNumbers = [];
for (let i = 0; i<=10; i++){
  var rand = Math.floor(Math.random() * 101 +1);
  if(!randomNumbers.includes(rand)){
    randomNumbers.push(rand);
  }
  
}
console.log(randomNumbers);
/* EXERCISE 9
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
var stringedArray = ["strive", "is", "great"];
for (var i = 0; i<=stringedArray.length; i++){
stringedArray[i] =  stringedArray[i].length   
}
console.log(stringedArray);
/* EXERCISE 10
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
var revertArray = [1, 3, 5];
revertArray.reverse();
console.log(revertArray);


/* EXERCISE 11
 Write a piece of code for getting the maximum numerical value from an array.
*/
var newArray = [1, 3, 5, 16, 19];
var maxValue = [0];
for(var i = 0; i<= newArray.length; i++){
if (newArray[i]>maxValue){
  maxValue = newArray[i]
}
}
console.log(maxValue);

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* EXERCISE 12
    Write a piece of code to  find the oldest movie in the provided movies array.
*/  var highestNumber = parseInt(movies[0].Year);
for (var i = 0; i <= movies.length; i++){
  var newYear = parseInt(movies.Year[i]);
    
  if (newYear>highestNumber){
    console.log(highestNumber)
  } else{
    
  }
} 

/* EXERCISE 13
    Write a piece of code to get the number of movies contained in the provided movies array.
*/
var noOfMovies = movies.length;




/* EXERCISE 14
    Write a piece of code to create an array with just the titles of the movies contained in the provided movies array.
*/
var movieTitles = [];
for (var i = 0; movies.length; i++){
  console.log(movieTitles.push(movies.Title[i]));
}

/* EXERCISE 15
   Write a piece of code to get only the movies produced in this millennium from the provided movies array.
*/
let movieYear =  parseInt(movies[0].Year); 
let melleniumYear = [];
for (var i =0; i<= movies.length; i++){
  if(movieYear[i] > 2000){

    melleniumYear.push(movieYear);


  }
}
/* EXERCISE 16
   Write a piece of code to get  the movie with the  id given below from the provided movies array.
*/
const id = "tt0355702";
var givenIdTitle;
for (var i=0; i<= movies.length; i++){
  if(movies[i].imdbID === id){
    givenIdTitle = movies[i];
  }else{

  }
}
/* EXERCISE 17
     Write a piece of code to get  the  the sum of all the years in which the movies in the provided movies array have been produced.
*/
var sumOfYears = 0;
for(var i = 0; i<= movies.length; i++){
sumOfYears = sumOfYears + parseInt(movies[i].Year); 
}
console.log(sumOfYears);


/* EXERCISE 18
   Write a piece of code to get  all the movies in the provided movies array which contain the string value (provided below) in the title.
*/
var movieQuery = [];
const query = "Ring";
for (var i = 0; i<= movies.length){
  if (movies[i].Title.includes(query)){
    movieQuery.push(movies[i])
  }else{

  }
}