const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload);

    console.log([...payload])

    fetch('http://localhost:5500/api/contacts/addContact', {
        method: "POST",
        body: prePayload,
    })
        .then(res => res.json())
        .then(data => {
          console.log('Data from server:', data);
      })
        .catch(err => console.log(err));
})

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    submitForm();
});

function submitForm() {
    alert("Thank you for your message!");
    window.location.href = "contact.html";
}

