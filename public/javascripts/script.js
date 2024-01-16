// Assuming your form has the id "myForm"
var form = document.getElementById('myForm');

if (form) {
    form.addEventListener("submit", logSubmit);
}

function logSubmit(event) {
    event.preventDefault();

    // Gather form data
    const formData = {
        fullname: document.getElementById('fullname').value,
        email: document.querySelector('[name="email"]').value,
        message: document.querySelector('[name="message"]').value
    };

    // Make a POST request to your server to save form data
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Server Response:', data);

            // Assuming you have a route '/get-resume-data' to retrieve data
            fetch('/')
                .then(response => response.json())
                .then(resumeData => {
                    console.log('Resume Data:', resumeData);

                    // Call the function to display the retrieved data
                    displayResumeData(resumeData);
                })
                .catch(error => {
                    console.error('Error:', error);
                    toastr.error('Error retrieving data');
                });

            toastr.success('Your Data Sent Successfully', formData.fullname);
        })
        .catch(error => {
            console.error('Error:', error);
            toastr.error('Error sending data');
        })
        .finally(() => {
            // Reset the form
            form.reset();
        });
}

function displayResumeData(data) {
    // Assuming 'data' is an array of objects with properties like 'fullname', 'email', 'message'
    // You may need to loop through the array if there are multiple entries

    // Update the HTML to display the retrieved data
    $('#resume-info').html(`
    <p><strong>Name:</strong> ${data.fullname}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Message:</strong> ${data.message}</p>
  `);

    // You can customize the HTML structure and styling based on your design preferences
    toastr.success('Resume Data Retrieved Successfully', data.fullname);
}




