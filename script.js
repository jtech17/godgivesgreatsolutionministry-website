// Handle Prayer Request Form Submission
const form = document.getElementById('prayerRequestForm');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Prayer request sent successfully!');
    form.reset();
  });
}
