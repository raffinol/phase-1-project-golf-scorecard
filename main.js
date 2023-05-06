const currentHole = document.getElementById('holeSelect');

fetch('http://localhost:3000/holes')
  .then((resp) => resp.json())
  .then((holes) => holeSelection(holes));

const holeSelection = (holes) => {
  currentHole.addEventListener('change', (e) => {
    const holeSelection = parseInt(e.target.value);
    const holeObject = holes.find((hole) => hole.id === holeSelection);
    showHoleInfo(holeObject);
  });
};

const showHoleInfo = (holeObject) => {
  const holeDisplay = document.querySelector('span#hole-display');
  const parDisplay = document.querySelector('span#par-display');
  const yardsDisplay = document.querySelector('span#yards-display');
  holeDisplay.textContent = holeObject.hole;
  parDisplay.textContent = holeObject.par;
  yardsDisplay.textContent = holeObject.yards;
};

const strokesInput = document.querySelector('form.input-trokes');
strokesInput.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
});

// const table = document.getElementById('table');
// console.log(table.rows[0].cells[0]);
