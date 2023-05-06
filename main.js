const currentHole = document.getElementById('holeSelect');

currentHole.addEventListener('change', (e) => {
  e.preventDefault();
  const holeSelection = parseInt(e.target.value);
  fetch('http://localhost:3000/holes')
    .then((resp) => resp.json())
    .then(function (holes) {
      const holeObject = holes.find((hole) => hole.id === holeSelection);
      showHoleInfo(holeObject);
    });
});

const showHoleInfo = (holeObject) => {
  const holeDisplay = document.querySelector('span#hole-display');
  const parDisplay = document.querySelector('span#par-display');
  const yardsDisplay = document.querySelector('span#yards-display');
  holeDisplay.textContent = holeObject.hole;
  parDisplay.textContent = holeObject.par;
  yardsDisplay.textContent = holeObject.yards;
};
