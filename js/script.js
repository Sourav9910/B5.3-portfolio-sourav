
// When a nav-link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    // Remove active class from all nav-links
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    // Add active to the clicked one
    this.classList.add('active');
  });
});


// dark theme and light theme


const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-bs-theme', newTheme);

  // Change icon based on theme
  toggleBtn.innerHTML = newTheme === 'light'
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

// about section tab-links
let tablinks = document.querySelectorAll('.tab-links');
let tabcontents = document.querySelectorAll('.tab-contents');

function opentab(tabName) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

