const currentHole = document.getElementById('holeSelect');

currentHole.addEventListener('change', (e) => {
  e.preventDefault();
  const holeSelection = parseInt(e.target.value);
  fetch('http://localhost:3000/holes')
    .then((resp) => resp.json())
    .then(function (holes) {
      const hole = holes.find((hole) => hole.id === holeSelection);
      showHoleInfo(hole);
    });
});

const showHoleInfo = (hole) => {
  console.log(hole);
};
