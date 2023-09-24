document.querySelector("#subscribe").addEventListener("click", function(e) {
    const email = document.querySelector("#email-input").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        document.getElementById("invalid").style.display = "flex"
    }
    else {
        const userEmail = document.getElementById("email-input").value;
        document.getElementById("email-bold").innerText = userEmail
        document.getElementById("main-card").style.display = "none"
        document.getElementById("success").style.display = "block"
    }
})

document.querySelector("#dismiss").addEventListener("click", function() {
    document.getElementById("main-card").style.display = "flex"
    document.getElementById("success").style.display = "none"
})