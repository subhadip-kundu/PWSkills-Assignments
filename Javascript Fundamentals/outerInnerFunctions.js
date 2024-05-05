function outerFunction(param) {
    var localVar = 10;

    function innerFunction() {
        // Accessing both parameter of outerFunction and localVar
        console.log("Parameter of outerFunction:", param);
        console.log("Local variable of outerFunction:", localVar);
    }

    // Returning the inner function
    return innerFunction;
}

var inner = outerFunction("Hello");

inner();
