document.addEventListener('submit', function(event) {
    // You might need to adjust these selectors based on the actual structure of Workday's job application forms
    let company = document.querySelector('selector-for-company').innerText; // Adjust the selector
    let role = document.querySelector('selector-for-role').innerText; // Adjust the selector
    let location = document.querySelector('selector-for-location').innerText; // Adjust the selector
    let dateApplied = new Date().toISOString().split('T')[0]; // Current date

    chrome.runtime.sendMessage({
        type: "jobApplication",
        data: { company, role, location, dateApplied }
    });
});
