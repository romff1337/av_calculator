const numberList = [];

function addToList(number) {
    numberList.push(number);
    updateList();
    updateAverage();
}

function updateList() {
    const listElement = document.getElementById('numbers');
    listElement.textContent = numberList.join(' ');
}

function updateAverage() {
    const averageElement = document.getElementById('average');
    const sum = numberList.reduce((a, b) => a + b, 0);
    const average = (sum / numberList.length) || 0;
    averageElement.textContent = average.toFixed(2);
}

function deleteElement()
{
    numberList.pop();
    updateList();
    updateAverage();
}
