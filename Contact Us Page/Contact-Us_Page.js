// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contact-form');
    
//     contactForm.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         // Collecting form data
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;
//         const subject = document.getElementById('subject').value;
//         const question = document.getElementById('question').value;

//         // Basic validation
//         if (!name || !email || !phone || !subject || !question) {
//             alert('Please fill out all required fields.');
//             return;
//         }
        
//         // Email format validation
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(email)) {
//             alert('Please enter a valid email address.');
//             return;
//         }
        
//         // Phone number format validation
//         const phonePattern = /^[0-9]{10,15}$/;
//         if (!phonePattern.test(phone)) {
//             alert('Please enter a valid phone number.');
//             return;
//         }
        
//         // Displaying a simple alert with form data
//         alert(`Thank you, ${name}. We have received your message: "${question}".`);
//     });
// });
