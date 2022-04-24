function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4 );
    document.getElementById("Concatenate") .innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice") .innerHTML = Section;
}

function myFunction() {
    let text = 
    document.getElementById("demo") .innerHTML;
    document.getElementById("demo") .innerHTML = text.toUpperCase();
}

let str = "Please locate where 'locate' occurs!";
document.getElementById("demo").innerHTML = str.indexOf("locate");

function string_Method() {
    var x =182;
    document.getElementById("Numbers_to_string") .innerHTML = x.toString();
}

function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision") .innerHTML = x.toPrecision(10);
}

let x = 9.656;
document.getElementById("demo") .innerHTML =
 x.toFixed(0) + "<br>" + 
 x.toFixed(2) + "<br>" + 
 x.toFixed(4) + "<br>" +
 x.toFixed(6);

 let x = 123;
 document.getElementById("demo") .innerHTML = 
 x.valueOf() + "<br>" +
 (123).valueOf() + "<br>" +
 (100 + 23).valueOf();

