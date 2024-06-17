const doctorNameInput = document.getElementById("doctor-name");
const doctorSpecialityInput = document.getElementById("doctor-speciality");
const doctorEmailInput = document.getElementById("doctor-email");
const submit = document.querySelector("form button");

const admin = document.querySelector(".updateEmail");

// get admin details (email to display under Administrator)
const adminEmail = "admin@admin.com";

// update email to actual admin email
admin.innerText = adminEmail;

const tableBody = document.querySelector("#doctors-table tbody");

const newDoctor = { name: "", speciality: "", email: "" };

doctorNameInput.addEventListener(
  "change",
  (event) => (newDoctor.name = event.target.value)
);
doctorSpecialityInput.addEventListener(
  "change",
  (event) => (newDoctor.speciality = event.target.value)
);
doctorEmailInput.addEventListener(
  "change",
  (event) => (newDoctor.email = event.target.value)
);

// add new doctor to db
submit.addEventListener("click", (event) => {
  event.preventDefault();

  // add to db

  // clearing form after submitting
  [doctorNameInput, doctorSpecialityInput, doctorEmailInput].map(
    (item) => (item.value = "")
  );
});
// then
// get actual data from db
const doctors = [
  {
    name: "doctor 1",
    speciality: "adjfk",
    email: "doctor1@gmail.com",
  },
  {
    name: "doctor 2",
    speciality: "rtuero",
    email: "doctor2@gmail.com",
  },
  {
    name: "doctor 3",
    speciality: "ljopiuret",
    email: "doctor3@gmail.com",
  },
  {
    name: "doctor 4",
    speciality: "lja;sjoi",
    email: "doctor4@gmail.com",
  },
];

doctors.map((doctor) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${doctor.name}</td><td>${doctor.speciality}</td><td>${doctor.email}</td><td>actions</td>`;
  tableBody.appendChild(newRow);
});
