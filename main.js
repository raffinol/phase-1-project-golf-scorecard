const currentHole = document.getElementById('holeSelect');
const table = document.getElementById('table');
const holeDisplay = document.querySelector('span#hole-display');
const parDisplay = document.querySelector('span#par-display');
const yardsDisplay = document.querySelector('span#yards-display');
const strokesInput = document.querySelector('form.input-strokes');

fetch('http://localhost:3000/holes')
  .then((resp) => resp.json())
  .then((holes) => holeSelection(holes));

const holeSelection = (holes) => {
  currentHole.addEventListener('change', (e) => {
    const holeSelection = parseInt(e.target.value);
    const holeObject = holes.find((hole) => hole.id === holeSelection);
    holeDisplay.textContent = holeObject.hole;
    parDisplay.textContent = holeObject.par;
    yardsDisplay.textContent = holeObject.yards;
  });
};

strokesInput.addEventListener('submit', (e) => {
  e.preventDefault();
  const hole = holeDisplay.textContent;
  const par = parDisplay.textContent;
  const parNum = parseInt(par);
  const strokes = e.target[0].value;
  const strokesNum = parseInt(strokes);
  table.rows[hole].cells[1].textContent = strokes;
  const scoreNumber = table.rows[hole].cells[2];
  const score = table.rows[hole].cells[3];

  //Always Score "Ace" if hole-in-one
  if (strokes === '1') {
    scoreNumber.textContent = `-${parNum - 1}`;
    score.textContent = 'Ace';
  }
  //Limits Score to double-par
  else if (strokesNum >= parNum * 2) {
    scoreNumber.textContent = parNum * 2;
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
  document.querySelector('input.input-text').value = '';
});
