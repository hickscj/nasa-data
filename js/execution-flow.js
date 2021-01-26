// demo of execution flow

function doThings() {
    console.log('two');
    console.log(this);
}

const doThings2 = () => {
    console.log(this);
}

// global
console.log('one');

// 
setTimeout(doThings, 0);

// global
console.log('three');
