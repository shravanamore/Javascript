function formValidation() {
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var pnumber = document.getElementById('phoneNumber').value;
    var country = document.getElementById('country').value;
    var email = document.getElementById('e-mail').value;
    var password = document.getElementById('password').value;
    var text = "";
    var dateString = document.getElementById('date').value;
    if (FirstName(fname)) {}
    if (LastName(lname)) {}
    if (PhoneNumber(pnumber)) {}
    if (Country(country)) {}
    if (Email(email)) {}
    if (Password(password)) {}
    if (Date(dateString)) {}
    return false;
}

function FirstName(fname) {
    var message = document.getElementsByClassName("error-message");
    var letters = /^[A-Za-z]+$/;
    if (fname == "" || fname.match(letters)) {
        text = "";
        message[0].innerHTML = text;
        return true;
    } else {
        text = "First name should contain only letters";
        message[0].innerHTML = text;
        return false;
    }
}

function LastName(lname) {
    var message = document.getElementsByClassName("error-message");
    var letters = /^[A-Za-z]+$/;
    if (lname == "" || lname.match(letters)) {
        text = "";
        message[1].innerHTML = text;
        return true;
    } else {
        text = "Last name should contain only letters";
        message[1].innerHTML = text;
        return false;
    }
}

function Email(email) {
    var message = document.getElementsByClassName("error-message");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (email == "" || email.match(mailformat) || atpos > 1 && (dotpos - atpos > 2)) {
        text = "";
        message[2].innerHTML = text;
        return true;
    } else {
        text = "Please enter the correct email format";
        message[2].innerHTML = text;
        return false;
    }
}

function PhoneNumber(pnumber) {
    var message = document.getElementsByClassName("error-message");
    var numbers = /^[0-9]+$/;
    if (pnumber == "" || pnumber.match(numbers)) {
        text = "";
        message[3].innerHTML = text;
        return true;
    } else {
        text = "Phone number should contain only digits";
        message[3].innerHTML = text;
        return false;
    }
}


function Country(country) {
    var message = document.getElementsByClassName("error-message");
    var letters = /^[A-Za-z]+$/;
    if (country == "" || country.match(letters)) {
        text = "";
        message[4].innerHTML = text;
        return true;
    } else {
        text = "Country name should contain only letters";
        message[4].innerHTML = text;
        return false;
    }
}

function Date(dateString) {
    var lblError = document.getElementById("lblError");
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        lblError.innerHTML = ""
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "";
        return true;
    } else {
        lblError.innerHTML = "Enter date in DD/MM/YYYY format ONLY."
        return false;
    }
}

function Password(password) {
    var message = document.getElementsByClassName("error-message");
    var illegalChars = /[\W_]/;
    if (illegalChars.test(password)) {
        text = "Password contains illegal characters";
        message[5].innerHTML = text;
        return false;
    } else if ((password.search(/[0-9]+/) == -1)) {
        text = "Password should contain at least one digit";
        message[5].innerHTML = text;
        return false;
    } else {
        text = "";
        message[5].innerHTML = text;
        return true;
    }
}