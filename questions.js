//Fetch the data from API with fetch() method.
window.onload = searchSports

function searchSports() {
  var url = "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((dataSports) => {
      console.log(dataSports);
      useApiData(dataSports)
    });
}

function useApiData(dataSports){
    document.querySelector("#question").innerHTML = `Question: ${dataSports.results[0].question}`
    document.querySelector("#answer1").innerHTML = dataSports.results[0].correct_answer
    document.querySelector("#answer2").innerHTML = dataSports.results[0].incorrect_answers[0]
    document.querySelector("#answer3").innerHTML = dataSports.results[0].incorrect_answers[1]
    document.querySelector("#answer4").innerHTML = dataSports.results[0].incorrect_answers[2]

  }