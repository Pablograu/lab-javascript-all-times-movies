/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

ratesAverage = movies => {
  const totalSum = movies.reduce((sum, movie) => {
    return sum + parseFloat(movie.rate);
  }, 0);

  let averageRate = totalSum / movies.length;
  console.log("the average rate is ", averageRate.toFixed(2));
  return parseFloat(averageRate.toFixed(2));
};
ratesAverage(movies);
// Iteration 2: Drama movies - Get the average of Drama Movies
dramaMoviesRate = movies => {
  let dramaArray = movies.filter(item => {
    return item.genre.includes("Drama");
  });
  const totalSum = dramaArray.reduce((sum, movie) => {
    return sum + parseFloat(movie.rate);
  }, 0);

  let averageRate = totalSum / movies.length;
  console.log(
    "the average rate is of drama movies is ",
    averageRate.toFixed(2)
  );
  return parseFloat(averageRate.toFixed(2));
};
dramaMoviesRate(movies);
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
// orderByYear = (movies) => {
//   const getHouts = function(str){
//     const separateHoursAndMinutes = str.split(" ")
//   }
function getDuration(str) {
  const separatedHoursAndMinutes = str.split(" ");
  let hours;
  let minutes;
  let totalMinutes;
  getHours = separatedHoursAndMinutes => {
    if (
      typeof parseFloat(separatedHoursAndMinutes[0][0]) === "number" &&
      separatedHoursAndMinutes[0][separatedHoursAndMinutes.length - 1] === "h"
    ) {
      hours = parseInt(separatedHoursAndMinutes[0][0]) * 60;
      totalMinutes = hours;
    } else {
      hours = 0;
      console.log(hours);
    }

    if (
      hours === 0 &&
      (typeof parseFloat(separatedHoursAndMinutes[0][0]) === "number" &&
        typeof parseFloat(separatedHoursAndMinutes[0][0]) === "number")
    ) {
      minutes = parseInt(
        separatedHoursAndMinutes[0][0].concat(separatedHoursAndMinutes[0][1])
      );
      totalMinutes = hours + minutes;
    } else if (
      typeof parseFloat(separatedHoursAndMinutes[1][0]) === "number" &&
      typeof parseFloat(separatedHoursAndMinutes[1][0]) === "number"
    ) {
      minutes = parseInt(
        separatedHoursAndMinutes[1][0].concat(separatedHoursAndMinutes[1][1])
      );
      totalMinutes = hours + minutes;
    } else if (
      typeof parseFloat(separatedHoursAndMinutes[1][0]) === "number" &&
      typeof parseFloat(separatedHoursAndMinutes[1][1]) !== "number"
    ) {
      minutes = separatedHoursAndMinutes[1][0];
      totalMinutes = hours + minutes;
    }
  };
  getHours(separatedHoursAndMinutes);
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

