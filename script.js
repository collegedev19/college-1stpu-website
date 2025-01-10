// Firebase configuration (add your Firebase config here)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

// Set Subject for file upload
let selectedSubject = '';

function setSubject(subject) {
    selectedSubject = subject;
    document.getElementById('status').innerText = `Selected Subject: ${subject}`;
}

// Dark Mode Toggle
const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle("dark-mode");
    themeToggleButton.classList.toggle("dark-mode");
});

// File Upload Function
function uploadFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select a file to upload.");
        return;
    }

    if (selectedSubject === '') {
        alert("Please select a subject first.");
        return;
    }

    // Create a storage reference to upload the file
    const storageRef = storage.ref(`${selectedSubject}/${file.name}`);
    const uploadTask = storageRef.put(file);

    uploadTask.on('state_changed', function(snapshot) {
        // Optionally show upload progress here
    }, function(error) {
        console.error("Error uploading file:", error);
        alert("Error uploading file");
    }, function() {
        alert("File uploaded successfully!");
        document.getElementById('status').innerText = "Upload complete!";
    });
}
