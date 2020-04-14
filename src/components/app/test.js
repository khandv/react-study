function my_function(n) {
    if (n === 1) {
        return 1;             
    } else {
        return `${my_function(n-1)} ${n}`;      
    }
}

console.log(my_function(9));
