// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

shedButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    const correctSpot = getRandomHidingSpot(hidingPlaces);
    handleGuess('shed', correctSpot);


    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

treeButton.addEventListener('click', () => {

    const correctSpot = getRandomHidingSpot(hidingPlaces);
    handleGuess('tree', correctSpot);
    // get a random item to call the 'correct spot'

    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

boulderButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    const correctSpot = getRandomHidingSpot(hidingPlaces);
    handleGuess('boulder', correctSpot);
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});
 
// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

   let correctGuesses = 0;
    let totalGuesses = 0;

function getRandomHidingSpot(hidingPlaces) {
    {
        const index = Math.floor(Math.random() * hidingPlaces.length);

        return hidingPlaces[index];  
    }


    



    // use the random index above and the array of hidingPlaces to get a random hiding place string

    // return that random hiding place string
}

function handleGuess(userGuess, correctSpot) {
    // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    treeContainer.classList.remove('face');


    ++totalGuesses;

    const correctHidingSpotEl = document.getElementById(`${correctSpot}-container`);

    correctHidingSpotEl.classList.add('face');

    if (userGuess === correctSpot){
        ++correctGuesses; 
    }

    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;


    // we can do that by removing the .face class from all containers

    // then increment the guesses

    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM

    // then add the .face css class to that element so that the face shows up

    // then if the user guess is correct, increment the correct guesses

    // update the DOM to show the new value of wins, losses and total guesses to the user
}