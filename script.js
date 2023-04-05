// 1
function sumFive(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 5)
            sum += arr[i];
    }
    return sum;
}
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));

// 2
function objectToArray(obj) {
    let arr = Object.entries(obj);
    return arr;
}
console.log(objectToArray({ D: 1, B: 2, C: 3 }));
console.log(objectToArray({ likes: 2, dislikes: 3, followers: 10 }));

// 3
function numbersSum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(numbersSum([1, 2, "13", "4", "645"]));
console.log(numbersSum(true, false, "123", "75"));
console.log(numbersSum([1, 2, 3, 4, 5, true]));

// 4
function keysAndValues(obj) {
    let arr = Object.keys(obj)
    let arr1 = Object.values(obj);
    console.log(arr, arr1);
}
keysAndValues({ a: 1, b: 2, c: 3 });
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
keysAndValues({ key1: true, key2: false, key3: undefined });
