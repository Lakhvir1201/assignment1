"use strict";

$(document).ready(() => {
  $("#pickup_date").focus();
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  const form = document.getElementById("reservation_form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Reference:Chapter08Slides.pptx slide no.26 (screenshot also attached "reference/ref1.png")
    const pickupDate = $("#pickup_date");
    const daysInput = $("#days");
    const nameInput = $("#name");
    const emailInput = $("#email");
    const phoneInput = $("#phone");

    const pickup = pickupDate.val().trim();
    const daysValue = daysInput.val().trim();
    const nameValue = nameInput.val().trim();
    const emailValue = emailInput.val().trim();
    const phoneValue = phoneInput.val().trim();

    let isValid = true;

    if (pickup === "") {
      isValid = false;
      pickupDate.next().text("Please enter the pickup date.");
    } else {
      pickupDate.next().text("");
    }

    if (daysValue === "") {
      isValid = false;
      daysInput.next().text("Please enter the number of days.");
    } else if (isNaN(daysValue)) {
      isValid = false;
      daysInput.next().text("Number of days must be numeric.");
    } else {
      daysInput.next().text("");
    }

    if (nameValue === "") {
      isValid = false;
      nameInput.next().text("Please enter name.");
    } else {
      nameInput.next().text("");
    }

    //Reference:https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js
    if (emailValue === "") {
      isValid = false;
      emailInput.next().text("Please enter an email address.");
    } else if (!emailPattern.test(emailValue)) {
      isValid = false;
      emailInput.next().text("Please enter a valid email address.");
    } else {
      emailInput.next().text("");
    }

    if (phoneValue === "") {
      isValid = false;
      phoneInput.next().text("Please enter phone number.");
    } else {
      phoneInput.next().text("");
    }

    pickupDate.val(pickup);
    daysInput.val(daysValue);
    nameInput.val(nameValue);
    emailInput.val(emailValue);
    phoneInput.val(phoneValue);

    if (isValid) {
      form.submit();
    }
  });
});
