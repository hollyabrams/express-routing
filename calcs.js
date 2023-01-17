function findMean(numbers) {
    let sum = 0;
    numbers.forEach((number) => {
    sum += parseFloat(number);
});
    return sum / numbers.length;
}

function findMedian(numbers) {
    numbers.sort((a, b) => a - b);
    let median;
    if (numbers.length % 2 !== 0) {
        median = numbers[Math.floor(numbers.length / 2)];
    } else {
        const middle = numbers.length / 2;
        return (numbers[middle - 1] + numbers[middle]) / 2;
    }
}

function findMode(numbers) {
    let mode = {};
    let maxCount = 0;
    let modeVal;
    numbers.forEach((val) => {
        if (!mode[val]) mode[val] = 0;
        mode[val]++;
        if (mode[val] > maxCount) {
            maxCount = mode[val];
            modeVal = val;
        }
    });
    return modeVal;
}


module.exports = {
    findMean,
    findMedian,
    findMode,
};
