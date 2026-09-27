// Mobile menu

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("show");
}


// Appointment form

const form = document.getElementById("appointmentForm");

const confirmation = document.getElementById("confirmation");

const confirmationText =
    document.getElementById("confirmationText");


// Set minimum date as today

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


// Form submit

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const department =
        document.getElementById("department").value;

    const doctor =
        document.getElementById("doctor").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;


    // Format date

    const selectedDate = new Date(date);

    const formattedDate =
        selectedDate.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });


    // Show confirmation

    confirmationText.innerHTML =
        "Thank you, <strong>" + name + "</strong>.<br><br>" +

        "📧 Email: " + email + "<br>" +

        "📞 Phone: " + phone + "<br>" +

        "🏥 Department: " + department + "<br>" +

        "👨‍⚕️ Doctor: " + doctor + "<br>" +

        "📅 Date: " + formattedDate + "<br>" +

        "🕐 Time: " + time;


    confirmation.style.display = "block";


    // Clear form

    form.reset();


    // Scroll to confirmation

    confirmation.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// Close confirmation

function closeConfirmation() {

    confirmation.style.display = "none";

}