let teas = ["masala", "ginger", "oolong", "orange", "rose", "lemon"];

teas[0]
teas[5]

teas.length //6

let h = 6 //h <= 5 || h < 6

// loop - itration
// variable leke aaao
// limit batao
// incre/decre => h = h +1

for (let h = 0; h < teas.length; h++) {
    console.log(`tea at index ${h} : ${teas[h]}`);
}


// if contion is always true then loop run infinitely
// if condition is always false then loop run 0 times

// if condition not given then

for (let i = 0; ; i++) {
    console.log(teas[i]);
}

//if condition and increment not given then loop run infinitely

for (let i = 0; ;) {
    // console.log(teas[i]);
}