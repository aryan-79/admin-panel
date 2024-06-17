const patientsTableBody = document.querySelector("#doctors-table tbody");

const admin = document.querySelector(".updateEmail");

// get admin details (email to display under Administrator)
const adminEmail = "admin@admin.com";

// update email to actual admin email
admin.innerText = adminEmail;

// get patient data from db
const patients = [
  {
    name: "patient 1",
    tel: "1231231",
    email: "patient1@gmail.com",
    dob: new Date(2001, 11, 1).toLocaleDateString("en-GB"),
  },
  {
    name: "patient 2",
    tel: "1231231",
    email: "patient2@gmail.com",
    dob: new Date(2002, 10, 21).toLocaleDateString("en-GB"),
  },
  {
    name: "patient 3",
    tel: "1231231",
    email: "patient3@gmail.com",
    dob: new Date(2001, 9, 29).toLocaleDateString("en-GB"),
  },
  {
    name: "patient 4",
    tel: "1231231",
    email: "patient4@gmail.com",
    dob: new Date(2003, 1, 19).toLocaleDateString("en-GB"),
  },
];

patients.map((patient) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${patient.name}</td><td>${patient.tel}</td><td>${patient.email}</td><td>${patient.dob}</td>`;
  patientsTableBody.appendChild(newRow);
});
