function submitForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch('url_server_anda', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the response from the server (optional)
        console.log(data);
    })
    .catch(error => {
        // Handle errors during the fetch
        console.error('There was a problem with the fetch operation:', error);
    });
}
