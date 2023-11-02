function sum(...nums) {
    const suma = nums.reduce((a, b) => a + b);
    console.log(suma);
}

sum(1, 2, 3, 4, 5);