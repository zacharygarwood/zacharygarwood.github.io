let header = document.querySelector('#intro');
let anim = [
    { t: "_", ms: 200 },
    { t: "Z_", ms: 100 },
    { t: "ZA_", ms: 100 },
    { t: "ZAC_", ms: 100 },
    { t: "ZACH_", ms: 100 },
    { t: "ZACHA_", ms: 100 },
    { t: "ZACHAR_", ms: 100 },
    { t: "ZACHARY_", ms: 100 },
    { t: "ZACHARY _", ms: 100 },
    { t: "ZACHARY G_", ms: 100 },
    { t: "ZACHARY GA_", ms: 100 },
    { t: "ZACHARY GAR_", ms: 100 },
    { t: "ZACHARY GARW_", ms: 100 },
    { t: "ZACHARY GARWO_", ms: 100 },
    { t: "ZACHARY GARWOO_", ms: 100 },
    { t: "ZACHARY GARWOOD_", ms: 100 },
    { t: "ZACHARY GARWOOD ", ms: 400 },
    { t: "ZACHARY GARWOOD_", ms: 400 },
    { t: "ZACHARY GARWOOD ", ms: 400 },
    { t: "ZACHARY GARWOOD_", ms: 400 },
    { t: "ZACHARY GARWOOD", ms: 400 },
    { t: "ZACHARY GARWOOD_", ms: 400 },
    { t: "ZACHARY GARWOOD", ms: 300 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();