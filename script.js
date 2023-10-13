document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const confirmEmail = document.getElementById("confirmEmail").value;
        const source = document.getElementById("source").value;
        const acceptTerms = document.getElementById("acceptTerms");

        if (!name || !email || !confirmEmail || !source || !acceptTerms.checked) {
            message.textContent = "Kérjük, töltse ki az összes kötelező mezőt!";
            message.classList.add("hidden");
        } else if (email !== confirmEmail) {
            message.textContent = "Az email címek nem egyeznek!";
            message.classList.remove("hidden");
        } else {
            message.textContent = "Sikeres regisztráció!";
            message.classList.remove("hidden");
            form.reset();
        }
    });
});
