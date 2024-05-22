// Click animation Link

function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener("click", () => {
  scrollToElement(".me");
});

link2.addEventListener("click", () => {
  scrollToElement(".header");
});

link3.addEventListener("click", () => {
  scrollToElement(".header-comp");
});
link4.addEventListener("click", () => {
  scrollToElement(".meet-us");
});

//  Button on top

function scrollToTop() {
  window.scrollTo(0, 0);
}

// Mail

const form = document.querySelector("form");
const Fullmail = document.getElementById("email");
const fullName = document.getElementById("name");
const mess = document.getElementById("message");
const phone = document.getElementById("phone");

function sendEmail() {
  const bodyMessage = `Nom, Prénom: ${fullName.value} <br> Mail: ${Fullmail.value} <br>
    Numéro: ${phone.value} <br> Message: ${mess.value}`;

  Email.send({
    SecureToken: "b7847404-c4b3-4708-8ccc-9f3bf3bccde7",
    To: "lahmikael@gmail.com",
    From: "lahmikael@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Merci pour votre message, bien reçu !",
        text: "Réponse sous 48h",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!Fullmail.value.match(emailRegex)) {
    Fullmail.classList.add("error");
    Fullmail.parentElement.classList.add("error");
  } else {
    Fullmail.classList.remove("error");
    Fullmail.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !Fullmail.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !mess.classList.contains("error") &&
    !subject.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});
