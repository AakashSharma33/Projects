document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('payment-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        simulatePaymentSubmission();
    });

    function simulatePaymentSubmission() {
        // Simulate a successful payment submission
        setTimeout(function () {
            form.reset();
            successMessage.style.display = 'block';
        }, 2000);
    }
});
