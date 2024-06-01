function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with ").concat(printMessage, " print in shirt"));
}
//calling a function with by default values
make_shirt();
//calling a function now with medium size and default message
make_shirt("Medium");
//calling a function with Small size and also different print message
make_shirt("small", "ILove java srcipt");
