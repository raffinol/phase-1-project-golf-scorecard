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
  //   console.log(par);
  const strokes = e.target[0].value;
  //   console.log(strokes);
  table.rows[hole].cells[1].textContent = strokes;
  const scoreNumber = table.rows[hole].cells[2];
  const score = table.rows[hole].cells[3];
  if (par === strokes) {
    scoreNumber.textContent = 0;
    score.textContent = 'Par';
  }
  document.querySelector('input.input-text').value = '';
});
