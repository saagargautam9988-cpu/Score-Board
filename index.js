    //     SCORE BOARD  //

let lhsTeamScore = document.querySelector(".lhsteamscore")
let rhsTeamScore = document.querySelector(".rhsteamscore")

let lhsScore = 0;
let rhsScore = 0;

function lhsPlusOne() {
    lhsScore += 1;
    lhsTeamScore.textContent = lhsScore;
}

function lhsPlusTwo() {
    lhsScore += 2;
    lhsTeamScore.textContent = lhsScore;
}

function lhsPlusThree() {
    lhsScore += 3;
    lhsTeamScore.textContent = lhsScore;
}


function rhsPlusOne() {
    rhsScore += 1;
    rhsTeamScore.textContent = rhsScore;
}

function rhsPlusTwo() {
    rhsScore += 2;
    rhsTeamScore.textContent = rhsScore;
}

function rhsPlusThree() {
    rhsScore += 3;
    rhsTeamScore.textContent = rhsScore;
}



//    FOUL COUNTER  //

let foulLhs = document.querySelector("#home-fouls");
let foulRhs = document.querySelector("#guest-fouls");

let lhsFoul = 0;
let rhsFoul = 0;

function lhsFoulOne() {
    lhsFoul += 1;
    foulLhs.textContent = lhsFoul;
}
function lhsFoulMinusOne() {
    if (lhsFoul > 0) {
        lhsFoul -= 1;
        foulLhs.textContent = lhsFoul;
    }
}


function rhsFoulOne() {
    rhsFoul += 1;
    foulRhs.textContent = rhsFoul;
}

function rhsFoulMinusOne() {
    if (rhsFoul > 0) {
        rhsFoul -= 1;
        foulRhs.textContent = rhsFoul;
    }
}


//   RESTART BUTTTON  //

function restart() {
    lhsScore = rhsScore = lhsFoul = rhsFoul = 0;
    lhsTeamScore.textContent = lhsScore;
    rhsTeamScore.textContent = rhsScore;
    foulLhs.textContent = lhsFoul;
    foulRhs.textContent = rhsFoul;
}    