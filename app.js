// Parts IDs in reveal - index matches wrong guesses
const PARTS = [
    'p-head', 'p-body',
    'p-left-arm', 'p-right-arm',
    'p-left-leg', 'p-right-leg'
];

// updateHangman called after each wrong guess  
// satisfies: classList, setAttributes requirements
function updateHangman() {
    if (wrongGuesses > PARTS.length) return;
}

//Get the part for this wrong-guess count
const partID = PARTS[wrongGuesses - 1];
const el = document.getElementById(partID);

//Remove .hidden + CSS transition fades it in 
//This satifies: classlist modification requirement
el.classList.remove('hidden');

//Set Attribute satisfies: attribute modification requirement
//data-state lets CSS do extra styling on game over
el.setAttribute('data-state', 'revealed');