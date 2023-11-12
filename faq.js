let counter1=0;
let counter2=0;
let counter3=0;
let counter4=0;

function q1(){
    counter1=counter1+1;
    if(counter1%2 != 0){
        document.querySelector('#ans1').style.display="block";
        document.querySelector('#btn1').innerHTML="HIDE"
    }

    if(counter1%2 == 0){
        document.querySelector('#ans1').style.display="none";
        document.querySelector('#btn1').innerHTML="SHOW"
    }

}

function q2(){
    counter2=counter2+1;
    if(counter2%2 != 0){
        document.querySelector('#ans2').style.display="block";
        document.querySelector('#btn2').innerHTML="HIDE"
    }

    if(counter2%2 == 0){
        document.querySelector('#ans2').style.display="none";
        document.querySelector('#btn2').innerHTML="SHOW"
    }

}

function q3(){
    counter3=counter3+1;
    if(counter3%2 != 0){
        document.querySelector('#ans3').style.display="block";
        document.querySelector('#btn3').innerHTML="HIDE"
    }

    if(counter3%2 == 0){
        document.querySelector('#ans3').style.display="none";
        document.querySelector('#btn3').innerHTML="SHOW"
    }

}

function q4(){
    counter4=counter4+1;
    if(counter4%2 != 0){
        document.querySelector('#ans4').style.display="block";
        document.querySelector('#btn4').innerHTML="HIDE"
    }

    if(counter4%2 == 0){
        document.querySelector('#ans4').style.display="none";
        document.querySelector('#btn4').innerHTML="SHOW"
    }

}


