var totalMarks = prompt("Your total marks?");
var obtainedMarks = prompt("Your obtained marks?");

var percentage = (obtainedMarks * 100) / totalMarks;

if(percentage >= 80){
    document.write("Total Marks: " +totalMarks + "<br>")
    document.write("Obtained Marks: "+obtainedMarks + "<br>")
    document.write("Percentage: " +percentage + "<br>")
    document.write("Grade: A-one" + "<br>")
    document.write("Remarks: Excellent" + "<br>")
}
else if(percentage >= 70 && percentage < 80 ){
    document.write("Total Marks: " + totalMarks + "<br>")
    document.write("Obtained Marks: "+ obtainedMarks + "<br>")
    document.write("Percentage: " + percentage + "<br>")
    document.write("Grade: A" + "<br>")
    document.write("Remarks: Good" + "<br>")
}
else if(percentage >= 60 && percentage < 70 ){
    document.write("Total Marks: " + totalMarks + "<br>")
    document.write("Obtained Marks: "+ obtainedMarks + "<br>")
    document.write("Percentage: " + percentage + "<br>")
    document.write("Grade: B" + "<br>")
    document.write("Remarks: You need to improve" + "<br>")
}
else {
    document.write("Total Marks: " + totalMarks + "<br>")
    document.write("Obtained Marks: "+ obtainedMarks + "<br>")
    document.write("Percentage: " + percentage + "<br>")
    document.write("Grade: Fail" + "<br>")
    document.write("Remarks: Sorry" + "<br>")
}