# Hole-in-One Golf Scorecard

This is a Single Page Application built with Javascript, HTML and CSS that communicates with JSON server to track a 9-hole golf course score.

User will get information for each hole before playing it and then will be able to submit the amount of strokes it took to complete the hole, this will then fill out a table with each hole score and total score.

## Requirements

---

This SPA uses JSON server to fetch each hole data. Install JSON server if it's not installed already.

install JSON Server globally on your machine, from the terminal:

`npm install -g json-server`

## Installation

---

- Clone this repo to your desire folder:

  `git clone git@github.com:raffinol/phase-1-project-golf-scorecard.git`

- Navigate into its directory in the terminal:

  `cd "repo-folder-path"`

- Start JSON Server from the repo folder:

  `json-server --watch db.json`

- Open index.html on your favorite browser (You need to do this in a new terminal window as the first one would be busy running JSON server):

  `explorer.exe index.html`

- **Enjoy!**

## How it works

---

1. Select current hole.
2. Play the hole using the information provided by the app (Hole number, Par, Yards)
3. Input the amount of strokes it took to complete the hole.
4. Select another hole and repeat until you finish the course.

- Feel free to reenter a stroke amount for any hole if needed.
- Click "Start new game" button at any time to clear the scorecard.

## Support

---

Send an e-mail to [raffinol.dev@gmail.com](mailto:raffinol.dev@gmail.com)

## Roadmap

---

For future versions we expect to add:

- More courses, full 18-hole included.
- The ability to save scorecard data.
- The ability to add score for multiple players.
- Better interface.
- And more.. Stay tuned!

## Authors and acknowledgment

---

Thanks to flatiron school and the instructors for the guidance for this phase-1 bootcamp project.

## License

---

This project is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license
