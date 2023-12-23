//QUESTION 1
function personal_info() {
    let name1 = document.getElementById('input1.1').value;
    let age = document.getElementById('input1.2').value;
    
    let gender;
    if (document.getElementById('input1.3.1').checked) {
        gender = document.getElementById('input1.3.1').value;
    } else if (document.getElementById('input1.3.2').checked) {
        gender = document.getElementById('input1.3.2').value;
    } else {
        gender = "Not specified";
    }
    
    let contact = document.getElementById('input1.4').value;

    document.getElementById('result1').innerHTML =
        'STUDENT DETAILS' + '<br><br>' +
        'Name: ' + name1 + '<br><br>' +
        'Age: ' + age + '<br><br>' +
        'Gender: ' + gender + '<br><br>' +
        'Contact: ' + contact;
}
//QUESTION 1 END


//QUESTION 2
    function college_info() {
        let collegeName = document.getElementById('input2.1').value;
        let collegeDistrict = document.getElementById('input2.2').value;
    
        let university;
        if (document.getElementById('input2.3.1').checked) {
            university = document.getElementById('input2.3.1').value;
        } else if (document.getElementById('input2.3.2').checked) {
            university = document.getElementById('input2.3.2').value;
        } else {
            university = "Not specified";
        }

        const collegeDetails = {
            college_name: collegeName,
            college_district: collegeDistrict,
            college_uni: university
        };

        let displayContent =
            'COLLEGE DETAILS' + '<br><br>' +
            'College Name: ' + collegeDetails.college_name + '<br><br>' +
            'College District: ' + collegeDetails.college_district + '<br><br>' +
            'Affiliated University: ' + collegeDetails.college_uni;

        displayContent = "College Details in Object Form:<br>" + JSON.stringify(collegeDetails, null, 2) + "<br><br>" + displayContent;

        document.getElementById('result2').innerHTML = displayContent;
    }
//QUESTION 2 END

//QUESTION 3

//3.1
function displayStudentDetails() {
  const studentName = document.getElementById('input3.1.1').value;
  const studentAge = document.getElementById('input3.1.2').value;
  const fatherName = document.getElementById('input3.1.3').value;

  const departmentName = document.getElementById('input3.1.4').value;
  const cgpa = document.getElementById('input3.1.5').value;

  let student_personal = {
    name: studentName,
    age: studentAge,
    father: fatherName
  };

  let student_academic = {
    name: departmentName,
    marks: cgpa
  };
  let studentPersonalDetails = `
    <h2>Student Personal Details:</h2>
    <p>Student Name: ${student_personal.name}</p>
    <p>Age: ${student_personal.age}</p>
    <p>Father's Name: ${student_personal.father}</p>
  `;

  let studentAcademicDetails = `
    <h2>Student Academic Details:</h2>
    <p>Department: ${student_academic.name}</p>
    <p>Obtained CGPA: ${student_academic.marks}</p>
  `;
  displayContent = "Student Personal Details in Object Form:<br>" + JSON.stringify(student_personal, null, 2) + "<br><br>" + "Student Academic Details in Object Form:<br>" + JSON.stringify(student_academic, null, 2) + "<br><br>" ;
  document.getElementById('result3.1').innerHTML = displayContent + studentPersonalDetails +  studentAcademicDetails;
}
//3.1 END

//3.2
function displayLearner_testDetails() {
    const learnertName = document.getElementById('input3.2.1').value;
    const learnerAge = document.getElementById('input3.2.2').value;
    const learner_qual = document.getElementById('input3.2.3').value;


    const testName = document.getElementById('input3.2.4').value;
    const totalMarks = parseFloat(document.getElementById('input3.2.5').value);
    const obtainedScore = parseFloat(document.getElementById('input3.2.6').value);

    const percentage = (obtainedScore / totalMarks) * 100;

    let learner_personal = {
        name: learnertName,
        age: learnerAge,
        qual: learner_qual
    };

    let learner_test = {
        test: testName,
    totalMarks: totalMarks,
        o_score: obtainedScore,
        percentage: percentage.toFixed(2),
        evaluateTest: function () {
            if (this.o_score >= 30) {
                return `<p>Congratulations! You passed the ${this.test} test with ${this.percentage}%.</p>`;
            } else {
                return `<p>Sorry, you did not pass the ${this.test} with ${this.percentage}%.</p>`;
            }
        }
    };
    let learnerPersonalDetails = `
        <h2>Learner Personal Details:</h2>
        <p>Learner Name: ${learner_personal.name}</p>
        <p>Age: ${learner_personal.age}</p>
        <p>Last Qualification: ${learner_personal.qual}</p>
  `;
    let leanerTestDetails = `
        <h2>Learner Test Details:</h2>
        <p>Test Name: ${learner_test.test}</p>
        <p>Total Marks: ${learner_test.totalMarks}</p>
        <p>Obtained Marks: ${learner_test.o_score}</p>
        ${learner_test.evaluateTest()}
    `;

    displayContent = "Learner Personal Details in Object Form:<br>" + JSON.stringify(learner_personal, null, 2) + "<br><br>" + "Learner Test Details in Object Form:<br>" + JSON.stringify(learner_test, null, 2) + "<br><br>";
    document.getElementById('result3.2').innerHTML = displayContent + learnerPersonalDetails + leanerTestDetails;
}
//3.2 END

//QUESTION 3 END
