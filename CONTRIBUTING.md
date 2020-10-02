# Contributing

This project uses Webpack to build the project and create a dist folder with the content to be loaded into the browser.

## How to add a new feature ?

1) Add the feature to the object in `src/features/index.js`.
2) Create a file in `src/features` folder with your feature logic.
3) In `src/content.js`, enable the feature with suitable settings.

## Workflow
1) Fork the repo.
2) Clone the repo locally using `git clone https://github.com/USERNAME/YourTube`.
3) Move to the `YourTube` directory.
4) Create a new branch and open it using `git checkout -b BRANCHNAME`.
5) Install the packages using `npm install`.
6) Do the changes and run `npm run watch` to build the files along.
7) Add and commit the files using `git add --a` and `git commit -m 'MESSAGE'`.
8) Push the branch.
9) Create a Pull Request.
10) Yaay ! You did it.