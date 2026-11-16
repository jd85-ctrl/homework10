if (!localStorage.getItem("counter")){
    localStorage.setItem("counter", JSON.stringify ({
        count: 0,
        lastUpdated: null,
        best: 0
    }));
}

let counter = JSON.parse (localStorage.getItem("counter"));

const countDisplay = document.getElementById("count");
const lastUpdatedDisplay = document.getElementById("lastUpdated");
const bestDisplay = document.getElementById("best");


function writeDisplay() {
    document.getElementById("count").innerHTML = counter.count;
    document.getElementById("lastUpdated").innerHTML =
        "Last updated:" + (counter.lastUpdated || "Never");

    document.getElementById("best").innerHTML = "Best: " + counter.best;

}

function saveCounter(){
    localStorage.setItem("counter", JSON.stringify(counter));

}

document.getElementById("add").addEventListener("click", () => {

    counter.count++;

    if (counter.count > counter.best) {
        counter.best = counter.count;
    }
    counter.lastUpdated = new Date ().toLocaleString();

    saveCounter();
    writeDisplay();
})




document.getElementById("subtract").addEventListener("click", () => {

    if (counter.count > 0){
        counter.count--;
        counter.lastUpdated = new Date().toLocaleString();

        saveCounter();
        writeDisplay();
    }


});

document.getElementById("reset").addEventListener("click", () => {
    counter.count = 0;
    counter.lastUpdated = new Date().toLocaleString();

    saveCounter();
    writeDisplay();


});

writeDisplay();
