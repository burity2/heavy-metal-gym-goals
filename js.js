$(document).ready(() => {

let bodyweight;
let squatGoal;
let benchPressGoal;
let deadliftGoal;
let militaryPressGoal;
let weightedPullUpGoal;
let weightedDipGoal;

$("#enter-bw-btn").on("click", function(){
  bodyweight = $('#body-weight').val();
  let goals = goalCalculator(bodyweight);
  let ul = $('#goals-ul')
  ul.text('');

for (const keys in goals) {
  let li = $('<li>')
  li.text(keys + ': ' + goals[keys] + 'kg');
  ul.append(li)
}
})

function goalCalculator(bodyweight) {
  squatGoal = Math.floor(bodyweight * 2);
  benchPressGoal = Math.floor(bodyweight * 1.5);
  deadliftGoal = Math.floor(bodyweight * 2.5);
  militaryPressGoal = Math.floor(bodyweight * 3/4);
  weightedPullUpGoal = Math.floor(bodyweight / 4);
  weightedDipGoal = Math.floor(bodyweight / 4);
  let goalsObj = {'Squat': squatGoal, 'Benchpress': benchPressGoal, 'Deadlift': deadliftGoal, 'Military Press': militaryPressGoal, 'Weighted Pull-Ups': weightedPullUpGoal, 'Weighted Dips':weightedDipGoal};
  return goalsObj;
}

});