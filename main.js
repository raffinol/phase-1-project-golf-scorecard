const currentHole = document.getElementById('holeSelect');
const table = document.getElementById('table');
const holeDisplay = document.querySelector('span#hole-display');
const parDisplay = document.querySelector('span#par-display');
const yardsDisplay = document.querySelector('span#yards-display');
const strokesInput = document.querySelector('form.input-strokes');

fetch('http://localhost:3000/holes')
  .then((resp) => resp.json())
  .then((holes) => holeSelection(holes));
//shows hole information
const holeSelection = (holes) => {
  currentHole.addEventListener('change', (e) => {
    const holeSelection = parseInt(e.target.value);
    const holeObject = holes.find((hole) => hole.id === holeSelection);
    holeDisplay.textContent = holeObject.hole;
    parDisplay.textContent = holeObject.par;
    yardsDisplay.textContent = holeObject.yards;
  });
};

//Start new game button
const button = document.getElementById('new-game');
button.addEventListener('click', () => {
  const scorecardData = document.getElementsByClassName('data');
  for (const cell of scorecardData) {
    cell.textContent = '';
  }
});
//Submit event listener
strokesInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const hole = holeDisplay.textContent;
  const par = parseInt(parDisplay.textContent);
  const strokes = parseInt(e.target[0].value);
  let scoreNumber = null;
  let score = null;
  //Adds strokes to the scorecard, validates if 'hole' and 'strokes' have been input
  if (hole === '') {
    alert('Select a Hole first');
  } else if (Number.isNaN(strokes)) {
    alert('Input amount of strokes');
  } else {
    scoreNumber = table.rows[hole].cells[2];
    score = table.rows[hole].cells[3];
    table.rows[hole].cells[1].textContent = strokes;
  }
  //Always Score "Ace" if hole-in-one
  if (strokes === 1) {
    scoreNumber.textContent = `-${par - 1}`;
    score.textContent = 'Ace';
  }
  //Limits Score to double-par
  else if (strokes >= par * 2) {
    scoreNumber.textContent = `+${par * 2}`;
    score.textContent = 'Double Par';
  }
  //Score depending on hole par
  else if (par === strokes) {
    scoreNumber.textContent = 0;
    score.textContent = 'Par';
  } else if (par - strokes === 1) {
    scoreNumber.textContent = '-1';
    score.textContent = 'Birdie';
  } else if (par - strokes === 2) {
    scoreNumber.textContent = '-2';
    score.textContent = 'Eagle';
  } else if (par - strokes === 3) {
    scoreNumber.textContent = '-3';
    score.textContent = 'Double Eagle';
  } else if (par - strokes === 4) {
    scoreNumber.textContent = '-4';
    score.textContent = 'Triple Eagle';
  } else if (par - strokes === -1) {
    scoreNumber.textContent = '+1';
    score.textContent = 'Bogey';
  } else if (par - strokes === -2) {
    scoreNumber.textContent = '+2';
    score.textContent = 'Double Bogey';
  } else if (par - strokes === -3) {
    scoreNumber.textContent = '+3';
    score.textContent = 'Triple Bogey';
  } else if (par - strokes === -4) {
    scoreNumber.textContent = '+4';
    score.textContent = '+4';
  }

  //Total Strokes
  let tableLength = 'table tr th'.length;
  let strokesTotal = 0;
  let scoreTotal = 0;
  for (let i = 1; i < tableLength - 1; i++) {
    strokesTotal += Number(table.rows[i].cells[1].innerText);
  }
  table.rows[10].cells[1].textContent = strokesTotal;

  //Total Score#
  for (let i = 1; i < tableLength - 1; i++) {
    scoreTotal += Number(table.rows[i].cells[2].innerText);
  }
  if (scoreTotal < 0) {
    table.rows[10].cells[2].textContent = scoreTotal;
  } else {
    table.rows[10].cells[2].textContent = `+${scoreTotal}`;
  }

  //Total Score
  let writtenScore = table.rows[10].cells[3];
  let unsignedScore = Math.abs(scoreTotal);
  if (scoreTotal < 0) {
    writtenScore.textContent = `${unsignedScore} under par`;
  } else if (scoreTotal > 0) {
    writtenScore.textContent = `${unsignedScore} over par`;
  } else {
    writtenScore.textContent = 'Par';
  }

  //Clears input text value after submit
  document.querySelector('input.input-text').value = '';
});
