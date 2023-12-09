function submitForm() {
    // alert("Thank you for your message!");
    // window.location.href = "contact.html";

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
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
    
    .then(response => response.json())

    .then(data => {
      console.log("Pesan Berhasil Dikirim", data);
      
      const baseUrl = window.location.href.split("/").slice(0, 3).join("/");
      window.location.replace(baseUrl + "contact.html");
      showAlert({
        type: "success",
        message: "Pesan Berhasil Dikirim"
      });
    })
    
    .catch(error => {
      console.error("Gagal mengirim data:", error);
      showAlert({
        type: "error",
        message: "Gagal mengirim data"
      });
    });
}