function myFunction() {                                           //Defining a function and naming it
    var sentence = "I am learning";                               //Defining a variable and giving it a string
    sentence += " a lot from this book! ";                        //using the += concatenate
    document.getElementById("Concatenate") .innerHTML = sentence; //Putting the value
}                                                                 //of result into HTML element with "Concatenate" id