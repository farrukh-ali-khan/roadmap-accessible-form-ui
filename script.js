function updateProgress() {
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  let completeness = 0;

  // Calculate the completeness based on filled fields
  if (fullName) completeness += 25;
  if (email) completeness += 25;
  if (password.length >= 8) completeness += 25;
  if (password === confirmPassword && password) completeness += 25; // Only count if password is filled

  // Update the progress bar width and percentage text
  const progressBar = document.getElementById("progress-bar");
  const percentageText = document.getElementById("percentage-text");
  progressBar.style.width = completeness + "%";
  percentageText.textContent = completeness + "%";
}

// Add this function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const checklist = document.getElementById("checklist");

  // Show checklist and check the conditions
  checklist.removeAttribute("hidden"); // Show the checklist

  // Check each requirement and update the checklist
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  document.getElementById("check-full-name").style.textDecoration = fullName
    ? "none"
    : "line-through";
  document.getElementById("check-email").style.textDecoration = email
    ? "none"
    : "line-through";
  document.getElementById("check-password").style.textDecoration =
    password.length >= 8 ? "none" : "line-through";
  document.getElementById("check-match").style.textDecoration =
    password === confirmPassword ? "none" : "line-through";
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirm-password");
  const isPasswordVisible = passwordInput.type === "text";
  passwordInput.type = isPasswordVisible ? "password" : "text";
  confirmInput.type = isPasswordVisible ? "password" : "text";
}
