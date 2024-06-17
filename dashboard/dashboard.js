const totalDoctor = document.querySelector(".Doctor span");
const totalPatient = document.querySelector(".Patient span");
const admin = document.querySelector(".updateEmail");

// get admin details (email to display under Administrator)
const adminEmail = "admin@admin.com";

// update email to actual admin email
admin.innerText = adminEmail;

// get total count from db
const totalDoctorCount = 10;
const totalPatientCount = 30;

totalDoctor.innerHTML = `<p>${totalDoctorCount}</p>`;
totalPatient.innerHTML = `<p>${totalPatientCount}</p>`;
