window.onload = function () {
    document.getElementById("welcome").innerText = "Welcome to my portfolio page!";
};

function toggleSection(id) {
    var section = document.getElementById(id);

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function toggleMode() {
    document.body.classList.toggle("dark");
}

function addSkill() {
    var input = document.getElementById("newSkill");
    var skill = input.value;

    if (skill === "") return;

    var li = document.createElement("li");
    li.innerText = skill;

    document.getElementById("skills").appendChild(li);

    input.value = "";
}

function showProject(element) {
    document.getElementById("projectDetails").innerText =
        "Details about: " + element.innerText;
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var msg = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        msg.innerText = "All fields are required!";
        msg.style.color = "red";
        return false;
    }

    if (!email.includes("@")) {
        msg.innerText = "Enter a valid email!";
        msg.style.color = "red";
        return false;
    }

    msg.innerText = "Message sent successfully!";
    msg.style.color = "green";

    return false;
}