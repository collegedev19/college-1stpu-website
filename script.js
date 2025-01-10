// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const currentMode = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
    document.getElementById("themeToggle").textContent = currentMode;
});

// Change Tabs
function changeTab(tab) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(tab).classList.add('active');

    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-btn[onclick="changeTab('${tab}')"]`).classList.add('active');
}

// File Upload Logic
document.getElementById("uploadBtn").addEventListener("click", () => {
    const fileInput = document.getElementById("fileUpload");
    const subject = document.getElementById("subjectSelect").value;
    const resourceType = document.getElementById("resourceSelect").value;

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        if (file.size <= 200 * 1024 * 1024) { // 200 MB limit
            const fileName = file.name;
            const resourceDisplay = document.getElementById("resourcesDisplay");
            const resourceItem = document.createElement("div");
            resourceItem.classList.add("resource-item");
            resourceItem.innerHTML = `
                <h4>${subject} - ${resourceType}</h4>
                <p>File: ${fileName} | Size: ${(file.size / 1024 / 1024).toFixed(2)} MB</p>
            `;
            resourceDisplay.appendChild(resourceItem);
        } else {
            alert("File is too large! Max size: 200 MB.");
        }
    } else {
        alert("Please select a file to upload.");
    }
});

