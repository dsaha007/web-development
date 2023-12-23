//QUESTION-1
        function ludo() {
            let number = Math.floor(Math.random() * 6) + 1;
            document.getElementById("result1").innerHTML = "Your Dice Throw Value is : " + number;

            let imgContainer = document.getElementById('img');

            imgContainer.innerHTML = ""; 

            let newImage = document.createElement('img');
            newImage.src = "images/dice-six-faces-" + number + ".png";
            newImage.alt = "Dice " + number;
            newImage.setAttribute("width","200px");
            imgContainer.appendChild(newImage);
}
//QUESTION-1 END

//QUESTION-2
function collectNames() {
        let number = document.getElementById("input2.1").value;
        let nameInputsDiv = document.getElementById("nameInputs");
        nameInputsDiv.innerHTML = ""; 

        for (let i = 1; i <= number; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            label.textContent = `Enter Student ${i} Name : `;
            input.type = "text";
            input.placeholder = `Enter Name ${i}`;
            input.id = `name${i}`;
            nameInputsDiv.appendChild(label);
            nameInputsDiv.appendChild(input);
            nameInputsDiv.appendChild(document.createElement("br"));
        }
    }

    function namesort() {
        let number = document.getElementById("input2.1").value;
        let studentNames = [];

        for (let i = 1; i <= number; i++) {
            let name = document.getElementById(`name${i}`).value;
            studentNames.push(name);
        }

        studentNames.sort(); 
        let result=document.getElementById('result2').innerHTML = studentNames.join(', ');
        document.getElementById('result2').innerHTML = "The Sorted Student Names in Alphabatical Order are : <br>" + result;
    }
//QUESTION-2

//QUESTION-3
function collectRoll() {
        let number = document.getElementById("input3.1").value;
        let rollInputsDiv = document.getElementById("rollInputs");
        rollInputsDiv.innerHTML = ""; 

        for (let i = 1; i <= number; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            label.textContent = `Enter Student ${i} Roll Number : `;
            input.type = "number";
            input.placeholder = `Enter Roll Number ${i}`;
            input.id = `roll${i}`;
            rollInputsDiv.appendChild(label);
            rollInputsDiv.appendChild(input);
            rollInputsDiv.appendChild(document.createElement("br"));
        }
    }

    function rollsort() {
        let number = document.getElementById("input3.1").value;
        let studentRolls = [];

        for (let i = 1; i <= number; i++) {
            let roll = document.getElementById(`roll${i}`).value;
            studentRolls.push(roll);
        }

        studentRolls.sort((a, b) => a - b);
        let result=document.getElementById('result3').innerHTML = studentRolls.join(', ');
        document.getElementById('result3').innerHTML = "The Student Roll Numbers in Ascending Order are : <br>" + result;
    }
//QUESTION-3

//QUESTION-4
function leapyear() {
    let year = document.getElementById('input4').value;
    if (!year) {
        document.getElementById("result4").innerHTML = "Please enter a year.";
        return;
    }
    
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        document.getElementById("result4").innerHTML = year + " is a leap year.";
    } else {
        document.getElementById("result4").innerHTML = year + " is not a leap year.";
    }
}
//QUESTION-4 END

//QUESTION-5
function vowel() {
    let sentence = document.getElementById("input5").value;
    let countVowel = 0;
    let lower = sentence.toLowerCase(); 
    let vowels = ['a', 'e', 'i', 'o', 'u']; 

    for (let i = 0; i < lower.length; i++) {
        if (vowels.includes(lower[i])) {
            countVowel++;
        }
    }

    document.getElementById('result5').innerHTML = "Vowel Count : " + countVowel; 
}
//QUESTION-5 END

//QUESTION-6
function collectElements() {
                let number = document.getElementById("input6.1").value;
                let arrayInputsDiv = document.getElementById("arrayInputs");
                arrayInputsDiv.innerHTML = "";

                for (let i = 1; i <= number; i++) {
                    let input = document.createElement("input");
                    let label = document.createElement("label");
                    label.textContent = `Enter Array Element ${i} : `;
                    input.type = "number";
                    input.placeholder = `Enter Element ${i}`;
                    input.id = `element${i}`;
                    arrayInputsDiv.appendChild(label);
                    arrayInputsDiv.appendChild(input);
                    arrayInputsDiv.appendChild(document.createElement("br"));
                }
            }

function duplicate() {
    let number = document.getElementById("input6.1").value;
    let array = [];

    for (let i = 1; i <= number; i++) {
        let element = document.getElementById(`element${i}`).value;
        array.push(element);
    }

    array.sort();
    let duplicates = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1] && !duplicates.includes(array[i])) {
            duplicates.push(array[i]);
        }
    }

    let result = document.getElementById('result6');
    result.innerHTML = "Duplicate Elements: " + (duplicates.length > 0 ? duplicates.join(', ') : "None");
}
//QUESTION-6 END

//QUESTION-7
function maxOccurrence(sentence) {
    let words = sentence.split(' ');
    let wordCount = {};
    let maxCount = 0;
    let maxWord = '';

    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }

        if (wordCount[word] > maxCount) {
            maxCount = wordCount[word];
            maxWord = word;
        }
    });

    return { word: maxWord, count: maxCount };
}

function findMaxOccurrence() {
    let inputSentence = document.getElementById("input7.1").value;
    let result = maxOccurrence(inputSentence);
    let output = document.getElementById("result7");
    if (inputSentence.trim() === "") {
        output.innerHTML = "Please enter a sentence!";
    } else {
        output.innerHTML = `Word with maximum occurrence: '${result.word}' (${result.count} times)`;
    }
}
//QUESTION-7 END

//QUESTION-8
function findFirstPosition() {
    let sentence = document.getElementById('input8.1').value;
    let word = document.getElementById('input8.2').value;
    let words = sentence.split(' ');
    let position = words.indexOf(word);
    let result = position !== -1 ? position + 1 : 'Not found';
    document.getElementById('result8').innerHTML = "Position: " + result;
}
//QUESTION-8 END

//QUESTION-9
function createInputFields() {
    let numElements = parseInt(document.getElementById("input9.1").value);
    let elementsDiv = document.getElementById("elementsDiv");
    elementsDiv.innerHTML = "";

    for (let i = 1; i <= numElements; i++) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.textContent = `Enter Array Element ${i} : `;
        input.type = "text";
        input.placeholder = `Element ${i}`;
        input.id = `element${i}`;
        elementsDiv.appendChild(label);
        elementsDiv.appendChild(input);
        elementsDiv.appendChild(document.createElement("br"));
    }
}

function checkCharacterIndex() {
    let numElements = parseInt(document.getElementById("input9.1").value);
    let elements = [];

    for (let i = 0; i < numElements; i++) {
        let element = document.getElementById(`element${i + 1}`).value;
        elements.push(element);
    }

    let charToFind = document.getElementById("charToFind").value;
    let foundIndex = elements.findIndex(element => element === charToFind);

    if (foundIndex !== -1) {
        document.getElementById('result9').innerHTML = `Character '${charToFind}' found at index ${foundIndex}.`;
    } else {
        document.getElementById('result9').innerHTML = `Character '${charToFind}' not found in the array.`;
    }
}

//QUESTION-9 END

//QUESTION-10
function createStringFields() {
            let numElements = document.getElementById("input10.1").value;
            let stringsDiv = document.getElementById("stringsDiv");
            stringsDiv.innerHTML = "";

            for (let i = 1; i <=numElements; i++) {
                let input = document.createElement("input");
                let label = document.createElement("label");
                label.textContent = `Enter Array Element ${i} : `;
                input.type = "text";
                input.placeholder = `String ${i}`;
                input.id = `string${i}`;
                stringsDiv.appendChild(label);
                stringsDiv.appendChild(input);
                stringsDiv.appendChild(document.createElement("br"));
            }
        }

        function findLargestString() {
            let numElements = document.getElementById("input10.1").value;
            let strings = [];

            for (let i = 0; i < numElements; i++) {
                let str = document.getElementById(`string${i + 1}`).value;
                strings.push(str);
            }

            let maxLength = -1;
            let maxIndex = -1;

            strings.forEach((str, index) => {
                if (str.length > maxLength) {
                    maxLength = str.length;
                    maxIndex = index;
                }
            });

            if (maxIndex !== -1) {
                document.getElementById('result10').innerHTML = `The largest string is '${strings[maxIndex]}' at index ${maxIndex}.`;
            } else {
                document.getElementById('result10').innerHTML = "No strings provided or all empty strings.";
            }
        }
//QUESTION-10 END