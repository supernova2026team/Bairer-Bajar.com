const loginSection = document.getElementById("login-section");
const signUpSection = document.getElementById("sign-up-section");

let userData = {}; 

document.getElementById("loginBtn").addEventListener("click", function () {

    const inputValue = document.getElementById("number-email").value.trim();
    const password = document.getElementById("password").value.trim();


    if (!userData.name) {
        alert("প্রথমে নিবন্ধন করুন");
        return;
    }


    const isNumber = /^[0-9]+$/.test(inputValue);

    if (isNumber) {
        if (inputValue !== userData.phone) {
            alert("মোবাইল নাম্বার ভুল");
            return;
        }
    } else {
        if (inputValue !== userData.email) {
            alert("Gmail ভুল");
            return;
        }
    }

    if (password !== userData.password) {
        alert("পাসওয়ার্ড ভুল");
        return;
    }

    alert("সফলভাবে লগইন হয়েছে");
    window.location.assign("dashboard.html")
});

document.getElementById("signUpBtn").addEventListener("click", function () {
    loginSection.classList.add("hidden");
    signUpSection.classList.remove("hidden");
});


document.getElementById("registerBtn").addEventListener("click", function () {

    const name = document.getElementById("full-name").value.trim();
    const phone = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password-signUp").value.trim();
    const confirmPassword = document.getElementById("password-signup").value.trim();

    if (name === "") {
        alert("নাম দিতে হবে");
        return;
    }

    if (phone.length !== 11) {
        alert("মোবাইল নাম্বার অবশ্যই ১১ ডিজিট হতে হবে");
        return;
    }

    if (email !== "") {
        const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!gmailPattern.test(email)) {
            alert("Gmail format ভুল");
            return;
        }
    }

    if (password === "") {
        alert("পাসওয়ার্ড দিতে হবে");
        return;
    }

    if (password !== confirmPassword) {
        alert("পাসওয়ার্ড মিলে নেই");
        return;
    }
const loginCheckbox = document.getElementById("loginCheck"); 
if (!loginCheckbox.checked) {
    alert("শর্তাবলী মেনে লগইন করুন");
    return;
}

 
    userData = {
        name: name,
        phone: phone,
        email: email,
        password: password
    }

    alert("আপনি সফলভাবে নিবন্ধন করেছেন। এখন লগইন করুন।");

    signUpSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
});

