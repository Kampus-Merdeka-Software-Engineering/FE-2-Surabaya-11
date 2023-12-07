function submitForm() {
    console.log("Data masuk");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch("http://localhost:3000/submit-form", {
  method: 'POST',
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  body: formData
})

    .then(response => response.json())
    .then(data => {
        console.log("Pesan Berhasil Dikirim", data);
    })

    .catch(error => {
        console.error("Gagal mengirim data:", error);
      });
}