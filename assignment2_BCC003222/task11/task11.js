var input = prompt("Input time: ");

if(input >= 0000 && input < 1200){
    document.write("Good Morning!")
}
else if(input >= 1200 && input < 1700){
    document.write("Good Afternoon!")
}
else if(input >= 1700 && input <2100){
    document.write("Good Evening")
}
else if(input >= 2100 && input <= 2359){
    document.write("Good Night")
}