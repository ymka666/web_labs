function FormData(){

    // FullName
    const fieldFullName = document.getElementById("FullName").value;
    const checkFullName = /\w+\s+[A-Z]\.+[A-Z]\./;
    const caseFullName = checkFullName.test(fieldFullName);
    if(caseFullName) {
        document.getElementById('ValidFullName').innerHTML =`Full Name: ${fieldFullName}`;
        document.getElementById('ValidFullName').style.color = "#00FF40";
    } else {
        document.getElementById('ValidFullName').innerHTML = "Incorrect full name";
        document.getElementById('ValidFullName').style.color = "#9E0000";
    }

    // IDcard
    const fieldIDcard = document.getElementById("IDcard").value;
    const checkIDcard = /[A-Z][A-Z]+\s+\№+\d{6}/;
    const caseIDcard = checkIDcard.test(fieldIDcard);
    if(caseIDcard) {
        document.getElementById('ValidIDcard').innerHTML = `ID card: ${fieldIDcard}`;
        document.getElementById('ValidIDcard').style.color = "#00FF40";
    } else {
        document.getElementById('ValidIDcard').innerHTML = "Incorrect ID card";
        document.getElementById('ValidIDcard').style.color = "#9E0000";
    }

    // Faculty
    const fieldFaculty = document.getElementById("Faculty").value;
    const checkFaculty = /[A-Z]{4}/;
    const caseFaculty = checkFaculty.test(fieldFaculty);
    if(caseFaculty) {
        document.getElementById('ValidFaculty').innerHTML = `Faculty: ${fieldFaculty}`;
        document.getElementById('ValidFaculty').style.color = "#00FF40";
    } else {
        document.getElementById('ValidFaculty').innerHTML = "Incorrect faculty";
        document.getElementById('ValidFaculty').style.color = "#9E0000";
    }

    // DateOfBirth
    const fieldDateOfBirth = document.getElementById("DateOfBirth").value;
    const checkDateOfBirth = /\d{2}\.+\d{2}\.+\d{4}/;
    const caseDateOfBirth = checkDateOfBirth.test(fieldDateOfBirth);
    if(caseDateOfBirth) {
        document.getElementById('ValidDateOfBirth').innerHTML =`Date of birth: ${fieldDateOfBirth}`;
        document.getElementById('ValidDateOfBirth').style.color = "#00FF40";
    } else {
        document.getElementById('ValidDateOfBirth').innerHTML = "Incorrect date of birth";
        document.getElementById('ValidDateOfBirth').style.color = "#9E0000";
    }

    //Address
    const fieldAddress = document.getElementById("Address").value;
    const checkAddress = /^c.\s\w{1,15}/;
    const caseAddress = checkAddress.test(fieldAddress);
    if(caseAddress) {
        document.getElementById('ValidAddress').innerHTML = `Address: ${fieldAddress}`;
        document.getElementById('ValidAddress').style.color = "#00FF40";
    } else {
        document.getElementById('ValidAddress').innerHTML = "Incorrect address";
        document.getElementById('ValidAddress').style.color = "#9E0000";
    }

}

function FullNameCase(){
     const fieldFullName = document.getElementById("FullName").value;
     const checkFullName = /\w+\s+[A-Z]\.+[A-Z]\./;
     const caseFullName = checkFullName.test(fieldFullName);
     let p = document.querySelector(".info1");
     if(caseFullName) {
         document.getElementById("FullName").style.border='solid green';
         p.innerHTML = "";
     } else {
         document.getElementById("FullName").style.border='solid red';
         p.innerHTML = "";
         p.style.color = "red";
         p.innerHTML += "Full name must be in format: TTTT T.T.";
     }
}

function IDcardCase(){
     const fieldIDcard = document.getElementById("IDcard").value;
     const checkIDcard = /[A-Z][A-Z]+\s+\№+\d{6}/;
     const caseIDcard = checkIDcard.test(fieldIDcard);
     let p = document.querySelector(".info2");
     if(caseIDcard) {
         document.getElementById("IDcard").style.border='solid green';
         p.innerHTML = "";
     } else {
         document.getElementById("IDcard").style.border='solid red';
         p.innerHTML = "";
         p.style.color = "red";
         p.innerHTML += "ID card must be in format: ТТ №ЧЧЧЧЧЧ";
     }
}

function FacultyCase(){
     const fieldFaculty = document.getElementById("Faculty").value;
     const checkFaculty = /[A-Z]{4}/;
     const caseFaculty = checkFaculty.test(fieldFaculty);
     let p = document.querySelector(".info3");
     if(caseFaculty) {
         document.getElementById("Faculty").style.border='solid green';
         p.innerHTML = "";
     } else {
         document.getElementById("Faculty").style.border='solid red';
         p.innerHTML = "";
         p.style.color = "red";
         p.innerHTML += "Faculty must be in format: TTTT";
     }
}

function DateOfBirthCase(){
     const fieldDateOfBirth = document.getElementById("DateOfBirth").value;
     const checkDateOfBirth = /\d{2}\.+\d{2}\.+\d{4}/;
     const caseDateOfBirth = checkDateOfBirth.test(fieldDateOfBirth);
     let p = document.querySelector(".info4");
     if(caseDateOfBirth) {
         document.getElementById("DateOfBirth").style.border='solid green';
         p.innerHTML = "";
     } else {
         document.getElementById("DateOfBirth").style.border='solid red';
         p.innerHTML = "";
         p.style.color = "red";
         p.innerHTML += "Date of birth must be in format: ЧЧ.ЧЧ.ЧЧЧЧ";
     }
}

function AddressCase(){
     const fieldAddress = document.getElementById("Address").value;
     const checkAddress = /^c.\s\w{1,15}/;
     const caseAddress = checkAddress.test(fieldAddress);
     let p = document.querySelector(".info5");
     if(caseAddress) {
         document.getElementById("Address").style.border='solid green';
         p.innerHTML = "";
     } else {
         document.getElementById("Address").style.border='solid red';
         p.innerHTML = "";
         p.style.color = "red";
         p.innerHTML = "Address must be in format: c. TTTT";
     }
}

//task 2
const cell9 = document.getElementById("cell9");
const colorSelected = document.getElementById('colorSelected');
function randomColor(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}

cell9.addEventListener("mouseover", function() {
    cell9.style.backgroundColor = `rgb(${randomColor(0, 255)}, ${randomColor(0, 255)}, ${randomColor(0, 255)})`;
});

cell9.addEventListener("click", function() {
    cell9.style.backgroundColor= colorSelected.value;
});

cell9.addEventListener("dblclick", function() {
    document.getElementById('cell21').style.backgroundColor = colorSelected.value;
    document.getElementById('cell33').style.backgroundColor = colorSelected.value;
});