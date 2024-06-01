function make_shirt (size: string = "Large",printMessage:string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with ${printMessage} print in shirt`)
    }
    //calling a function with by default values
    make_shirt();

    //calling a function now with medium size and default message
    make_shirt("Medium")

    //calling a function with Small size and also different print message
    make_shirt("small", "ILove java srcipt")
    

