$('.popoverData').popover();

//contact us form
const myForm = document.querySelector('.my-form');
const firstNameInput = document.querySelector('#firstname');
const lastNameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const ordernumber = document.querySelector('#ordernumber');
const textArea = document.querySelector('#textArea');
const button = document.querySelector('#submitButton');
const msg = document.querySelector('.msg');


//on contact form submit
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault(); 
    button.style.background = '#373b4d';
    button.style.border = '0px';

    if (firstNameInput.value === '' || lastNameInput.value === '' || emailInput.value === '' ){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields.';

        setTimeout(() => msg.remove(), 3000);
    } else {
        //Clear fields
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = ''; 
        textArea.value = '';
        ordernumber.value = '';

        //Write success message
        msg.innerHTML = 'We will reply shortly!';

        setTimeout(() => msg.remove(), 3000);
    }

}

button.addEventListener('mouseover', (e) => {
    e.preventDefault();
    button.style.background = 'black';
})
button.addEventListener('mouseout', (e) => {
    e.preventDefault();
    button.style.background = '#373b4d';
})

//navigation bar
const home = document.querySelector('#navhome');
const collection = document.querySelector('#navcollection');
const aboutus = document.querySelector('#navaboutus');
const contact = document.querySelector('#navcontact');


home.addEventListener('mouseover', (e) => {
    e.preventDefault();
    home.style.color = '#b0aaa9';
})
home.addEventListener('mouseout', (e) => {
    e.preventDefault();
    home.style.color = 'white';
})

collection.addEventListener('mouseover', (e) => {
    e.preventDefault();
    collection.style.color = '#b0aaa9';
})
collection.addEventListener('mouseout', (e) => {
    e.preventDefault();
    collection.style.color = 'white';
})

aboutus.addEventListener('mouseover', (e) => {
    e.preventDefault();
    aboutus.style.color = '#b0aaa9';
})
aboutus.addEventListener('mouseout', (e) => {
    e.preventDefault();
    aboutus.style.color = 'white';
})


contact.addEventListener('mouseover', (e) => {
    e.preventDefault();
    contact.style.color = '#b0aaa9';
})
contact.addEventListener('mouseout', (e) => {
    e.preventDefault();
    contact.style.color = 'white';
})


//Button Borders
document.querySelector('#button1').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button1').style.border = "3px solid black";
})

document.querySelector('#button1').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button1').style.border = "1px solid black";
})

document.querySelector('#imgtop1').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button1').style.border = "3px solid black";
})

document.querySelector('#imgtop1').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button1').style.border = "1px solid black";
})


document.querySelector('#button2').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button2').style.border = "3px solid black";
})

document.querySelector('#button2').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button2').style.border = "1px solid black";
})

document.querySelector('#imgtop2').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button2').style.border = "3px solid black";
})

document.querySelector('#imgtop2').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button2').style.border = "1px solid black";
})

document.querySelector('#button3').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button3').style.border = "3px solid black";
})

document.querySelector('#button3').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button3').style.border = "1px solid black";
})

document.querySelector('#imgtop3').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button3').style.border = "3px solid black";
})

document.querySelector('#imgtop3').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button3').style.border = "1px solid black";
})

document.querySelector('#button4').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button4').style.border = "3px solid black";
})

document.querySelector('#button4').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button4').style.border = "1px solid black";
})

document.querySelector('#imgtop4').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button4').style.border = "3px solid black";
})

document.querySelector('#imgtop4').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button4').style.border = "1px solid black";
})

document.querySelector('#button5').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button5').style.border = "3px solid black";
})

document.querySelector('#button5').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button5').style.border = "1px solid black";
})

document.querySelector('#imgtop5').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button5').style.border = "3px solid black";
})

document.querySelector('#imgtop5').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button5').style.border = "1px solid black";
})

document.querySelector('#button6').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button6').style.border = "3px solid black";
})

document.querySelector('#button6').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button6').style.border = "1px solid black";
})

document.querySelector('#imgtop6').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button6').style.border = "3px solid black";
})

document.querySelector('#imgtop6').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button6').style.border = "1px solid black";
})

document.querySelector('#button7').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button7').style.border = "3px solid black";
})

document.querySelector('#button7').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button7').style.border = "1px solid black";
})

document.querySelector('#imgtop7').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button7').style.border = "3px solid black";
})

document.querySelector('#imgtop7').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button7').style.border = "1px solid black";
})

document.querySelector('#button8').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button8').style.border = "3px solid black";
})

document.querySelector('#button8').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button8').style.border = "1px solid black";
})

document.querySelector('#imgtop8').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button8').style.border = "3px solid black";
})

document.querySelector('#imgtop8').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button8').style.border = "1px solid black";
})

document.querySelector('#button9').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button9').style.border = "3px solid black";
})

document.querySelector('#button9').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button9').style.border = "1px solid black";
})

document.querySelector('#imgtop9').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button9').style.border = "3px solid black";
})

document.querySelector('#imgtop9').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button9').style.border = "1px solid black";
})

document.querySelector('#button10').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button10').style.border = "3px solid black";
})

document.querySelector('#button10').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button10').style.border = "1px solid black";
})

document.querySelector('#imgtop10').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button10').style.border = "3px solid black";
})

document.querySelector('#imgtop10').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button10').style.border = "1px solid black";
})

document.querySelector('#button11').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button11').style.border = "3px solid black";
})

document.querySelector('#button11').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button11').style.border = "1px solid black";
})

document.querySelector('#imgtop11').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button11').style.border = "3px solid black";
})

document.querySelector('#imgtop11').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button11').style.border = "1px solid black";
})

document.querySelector('#button12').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button12').style.border = "3px solid black";
})

document.querySelector('#button12').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button12').style.border = "1px solid black";
})

document.querySelector('#imgtop12').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button12').style.border = "3px solid black";
})

document.querySelector('#imgtop12').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button12').style.border = "1px solid black";
})

document.querySelector('#button13').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button13').style.border = "3px solid black";
})

document.querySelector('#button13').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button13').style.border = "1px solid black";
})

document.querySelector('#imgtop13').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button13').style.border = "3px solid black";
})

document.querySelector('#imgtop13').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button13').style.border = "1px solid black";
})

document.querySelector('#button14').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button14').style.border = "3px solid black";
})

document.querySelector('#button14').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button14').style.border = "1px solid black";
})

document.querySelector('#imgtop14').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button14').style.border = "3px solid black";
})

document.querySelector('#imgtop14').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button14').style.border = "1px solid black";
})

document.querySelector('#button15').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button15').style.border = "3px solid black";
})

document.querySelector('#button15').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button15').style.border = "1px solid black";
})

document.querySelector('#imgtop15').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button15').style.border = "3px solid black";
})

document.querySelector('#imgtop15').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button15').style.border = "1px solid black";
})

document.querySelector('#button16').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button16').style.border = "3px solid black";
})

document.querySelector('#button16').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button16').style.border = "1px solid black";
})

document.querySelector('#imgtop16').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button16').style.border = "3px solid black";
})

document.querySelector('#imgtop16').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button16').style.border = "1px solid black";
})

document.querySelector('#button17').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button17').style.border = "3px solid black";
})

document.querySelector('#button17').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button17').style.border = "1px solid black";
})

document.querySelector('#imgtop17').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button17').style.border = "3px solid black";
})

document.querySelector('#imgtop17').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button17').style.border = "1px solid black";
})

document.querySelector('#button18').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button18').style.border = "3px solid black";
})

document.querySelector('#button18').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button18').style.border = "1px solid black";
})

document.querySelector('#imgtop18').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button18').style.border = "3px solid black";
})

document.querySelector('#imgtop18').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button18').style.border = "1px solid black";
})

document.querySelector('#button19').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button19').style.border = "3px solid black";
})

document.querySelector('#button19').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button19').style.border = "1px solid black";
})

document.querySelector('#imgtop19').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button19').style.border = "3px solid black";
})

document.querySelector('#imgtop19').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button19').style.border = "1px solid black";
})

document.querySelector('#button20').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button20').style.border = "3px solid black";
})

document.querySelector('#button20').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button20').style.border = "1px solid black";
})

document.querySelector('#imgtop20').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button20').style.border = "3px solid black";
})

document.querySelector('#imgtop20').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button20').style.border = "1px solid black";
})

document.querySelector('#button21').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button21').style.border = "3px solid black";
})

document.querySelector('#button21').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button21').style.border = "1px solid black";
})

document.querySelector('#imgtop21').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button21').style.border = "3px solid black";
})

document.querySelector('#imgtop21').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button21').style.border = "1px solid black";
})

document.querySelector('#button22').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button22').style.border = "3px solid black";
})

document.querySelector('#button22').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button22').style.border = "1px solid black";
})

document.querySelector('#imgtop22').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button22').style.border = "3px solid black";
})

document.querySelector('#imgtop22').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button22').style.border = "1px solid black";
})

document.querySelector('#button23').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button23').style.border = "3px solid black";
})

document.querySelector('#button23').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button23').style.border = "1px solid black";
})

document.querySelector('#imgtop23').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button23').style.border = "3px solid black";
})

document.querySelector('#imgtop23').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button23').style.border = "1px solid black";
})

document.querySelector('#button24').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button24').style.border = "3px solid black";
})

document.querySelector('#button24').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button24').style.border = "1px solid black";
})

document.querySelector('#imgtop24').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button24').style.border = "3px solid black";
})

document.querySelector('#imgtop24').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button24').style.border = "1px solid black";
})

document.querySelector('#button25').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button25').style.border = "3px solid black";
})

document.querySelector('#button25').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button25').style.border = "1px solid black";
})

document.querySelector('#imgtop25').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button25').style.border = "3px solid black";
})

document.querySelector('#imgtop25').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button25').style.border = "1px solid black";
})

document.querySelector('#button26').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button26').style.border = "3px solid black";
})

document.querySelector('#button26').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button26').style.border = "1px solid black";
})

document.querySelector('#imgtop26').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button26').style.border = "3px solid black";
})

document.querySelector('#imgtop26').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button26').style.border = "1px solid black";
})

document.querySelector('#button27').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button27').style.border = "3px solid black";
})

document.querySelector('#button27').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button27').style.border = "1px solid black";
})

document.querySelector('#imgtop27').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button27').style.border = "3px solid black";
})

document.querySelector('#imgtop27').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button27').style.border = "1px solid black";
})

document.querySelector('#button28').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button28').style.border = "3px solid black";
})

document.querySelector('#button28').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button28').style.border = "1px solid black";
})

document.querySelector('#imgtop28').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button28').style.border = "3px solid black";
})

document.querySelector('#imgtop28').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button28').style.border = "1px solid black";
})

document.querySelector('#button29').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button29').style.border = "3px solid black";
})

document.querySelector('#button29').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button29').style.border = "1px solid black";
})

document.querySelector('#imgtop29').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button29').style.border = "3px solid black";
})

document.querySelector('#imgtop29').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button29').style.border = "1px solid black";
})

document.querySelector('#button30').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button30').style.border = "3px solid black";
})

document.querySelector('#button30').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button30').style.border = "1px solid black";
})

document.querySelector('#imgtop30').addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#button30').style.border = "3px solid black";
})

document.querySelector('#imgtop30').addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#button30').style.border = "1px solid black";
})