// CS0049 
/*
	Program: Computation of grades using function
	Programmer: Rina V. Mangali
	Section: AN22
	Start date: June 2, 2023
	End date: June 2, 2023
*/


function calculateLetterGrade(numGrade) {
  if (numGrade >= 90) {
    return 'A';
  } else if (numGrade >= 80) {
    return 'B';
  } else if (numGrade >= 70) {
    return 'C';
  } else if (numGrade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}


function calculateAverageGrade(classParticipation, summativeGrade, finalExam) {
  return (classParticipation * 0.3) + (summativeGrade * 0.3) + (finalExam * 0.4);
}


var students = [];



for (var i = 0; i < 5; i++) {
  var student = {};
  student.name = prompt('Enter the name of the student:');
  
  
  var enablingAssessments = [];
  for (var j = 0; j < 5; j++) {
    enablingAssessments.push(parseInt(prompt('Enter enabling assessment ' + (j+1) + ':')));
  }
  student.classParticipation = enablingAssessments.reduce((a, b) => a + b) / enablingAssessments.length;
  
  
  var summativeAssessments = [];
  for (var j = 0; j < 3; j++) {
    summativeAssessments.push(parseInt(prompt('Enter summative assessment ' + (j+1) + ':')));
  }
  student.summativeGrade = summativeAssessments.reduce((a, b) => a + b) / summativeAssessments.length;
  
  student.finalExam = parseInt(prompt('Enter major exam grade:'));
  
  
  student.grade = calculateAverageGrade(student.classParticipation, student.summativeGrade, student.finalExam);
  student.letterGrade = calculateLetterGrade(student.grade);
  
  students.push(student);
  console.log();
}

calculateAverageGrade()

console.log('Student\t\tClass Participation\tSummative Grade\t\tGrade\t\tLetter Grade');
students.forEach(function(student) {
  console.log(student.name + '\t\t' + student.classParticipation.toFixed(2) + '\t\t\t' + student.summativeGrade.toFixed(2) + '\t\t\t' + student.grade.toFixed(2) + '\t\t' + student.letterGrade);
});






