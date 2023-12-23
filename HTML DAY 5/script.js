//QUESTION-1
function digit(){
    let number=document.getElementById('input1').value;
    let rem=0;
    let temp=number;
    let digits=[];
    while(number>0){
        rem=number%10;
        digits.push(rem);
        number=Math.floor(number/10);
    }
    digits.reverse();
    document.getElementById('result1').innerHTML='The Digits of ' + temp + ' are ' + digits.join(', ');
}
//QUESTION-1 END


//QUESTION-2
function reverse() {
    let number = document.getElementById('input2').value;
    let rem = 0;
    let rev = 0;
    let temp = number;
    while (number > 0) {
        rem = number % 10;
        rev = rev * 10 + rem;
        number = Math.floor(number / 10);
    }
    document.getElementById('result2').innerHTML = 'Reverese of ' + temp + ' is ' + rev;
}
//QUESTION-2 END


//QUESTION-3
function fibonacci() {
    let number = document.getElementById('input3').value;
    let fibSequence = [];
    if (number === 1) {
        fibSequence = [0];
    } else if (number === 2) {
        fibSequence = [0, 1];
    } else {
        fibSequence = [0, 1];
        for (let i = 2; i < number; i++) {
            fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
        }
    }
    document.getElementById('result3').innerHTML = 'The Fibonacci Sequqnce of ' + number + ' is ' + fibSequence;
}
//QUESTION-3 END


//QUESTION-4
function palindrome(){
    let number = document.getElementById('input4').value;
    let rem = 0;
    let rev = 0;
    let temp = number;
    while (number > 0) {
        rem = number % 10;
        rev = rev * 10 + rem;
        number = Math.floor(number / 10);
    }
    if(temp==rev){
        document.getElementById('result4').innerHTML = temp + ' is a Palindrome Number';
    }
    else{
        document.getElementById('result4').innerHTML = temp + ' is not a Palindrome Number';
    }   
}
//QUESTION-4 END


//QUESTION-5
function factorial(){
    let number=document.getElementById('input5').value;
    if (number < 0) {
        document.getElementById('result5').innerHTML='Enter a Positive Number.';
    }
    let fact=1;
    for( let i=1;i<=number;i++){
        fact*=i;
    }
    document.getElementById('result5').innerHTML='Factorial of ' + number + ' is ' + fact;
}
//QUESTION-5 END


//QUESTION-6
function factorial_recursion() {
    let number = document.getElementById('input6').value;
    if (number < 0) {
        document.getElementById('result6').innerHTML='Enter a Positive Number.';
    }
    else{
        let result=recursion(number);
        document.getElementById('result6').innerHTML='Factorial of ' + number + ' is ' + result;
    }
}
function recursion(number){
    if (number == 0 || number == 1) {
        return 1;
    }
    else {
        return number*recursion(number-1);
    }
}        
//QUESTION-6 END


//QUESTION-7
function is_prime(){
    let number=document.getElementById('input7').value;
    let flag=0;
    if(number<=1){
         document.getElementById('result7').innerHTML= number + ' is Neither Prime nor Composite';
    }
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            flag=1;
            break;
        }
    }
    if(flag===1){
        document.getElementById('result7').innerHTML= number + ' is Composite Number';
    }
    else{
        document.getElementById('result7').innerHTML= number + ' is Prime Number';
    }
}
//QUESTION-7 END


//QUESTION-8
function range_prime(){
    let start=document.getElementById('input8.1').value;
    let end=document.getElementById('input8.2').value;
    let result="";
    for(let i=start;i<=end;i++){
        if(check_prime1(i)){
            result+= i + ", ";
        }
    }
    document.getElementById('result8').innerHTML= 'Prime Numbers from ' + start +  ' to ' + end +' are : ' + result;
}
function check_prime1(number){
    let flag=0;
    if(number<=1){
         return false;
    }
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}
//QUESTION-8 END


//QUESTION-9
function sum_range_prime(){
    let start=document.getElementById('input9.1').value;
    let end=document.getElementById('input9.2').value;
    let result=0;
    for(let i=start;i<=end;i++){
        if(check_prime2(i)){
            result+=i;
        }
    }
    document.getElementById('result9').innerHTML= 'Sum of all Prime Numbers from ' + start +  ' to ' + end +' is : ' + result;
}
function check_prime2(number){
    let flag=0;
    if(number<=1){
         return false;
    }
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}
//QUESTION-9 END


//QUESTION-10
function armstrong(){
    let number = document.getElementById('input10').value;
    let rem = 0;
    let sum1 = 0;
    let temp = number;
    numberofDigits = number.length;
    while (number > 0) {
        rem = number % 10;
        sum1+=Math.pow(rem,numberofDigits);
        number = Math.floor(number / 10);
    }
    if(temp==sum1){
        document.getElementById('result10').innerHTML = temp + ' is a Armstrong Number';
    }
    else{
        document.getElementById('result10').innerHTML = temp + ' is not a Armstrong Number';
    }   
}
////QUESTION-10 END