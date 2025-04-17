(function() {
  // Create the ad HTML
  function createAdHTML() {
    const adContainer = document.createElement('div');
    adContainer.className = 'welib-ad-container';
    
    // Create the main link element
    const mainLink = document.createElement('a');
    mainLink.href = 'https://welib.org/';
    mainLink.target = '_blank';
    mainLink.className = 'welib-ad-link';
    
    // Create the ad content
    const adContent = document.createElement('div');
    adContent.className = 'welib-ad-content';
    
    // Create row for content
    const row = document.createElement('div');
    row.className = 'welib-ad-row';
    
    // Logo column
    const logoCol = document.createElement('div');
    logoCol.className = 'welib-ad-col welib-ad-logo-col';
    const logo = document.createElement('div');
    logo.className = 'welib-ad-logo';
    logo.textContent = 'WeLib';
    logoCol.appendChild(logo);
    
    // Tagline column
    const taglineCol = document.createElement('div');
    taglineCol.className = 'welib-ad-col welib-ad-tagline-col';
    const tagline = document.createElement('p');
    tagline.className = 'welib-ad-tagline';
    
    // Add the tagline content with highlighted text
    const books = document.createElement('span');
    books.className = 'welib-ad-highlight';
    books.textContent = '43 million';
    
    const papers = document.createElement('span');
    papers.className = 'welib-ad-highlight';
    papers.textContent = '98 million';
    
    tagline.appendChild(books);
    tagline.appendChild(document.createTextNode(' books, '));
    tagline.appendChild(papers);
    tagline.appendChild(document.createTextNode(' papers.'));
    tagline.appendChild(document.createElement('br'));
    tagline.appendChild(document.createTextNode('All free. All yours.'));
    
    taglineCol.appendChild(tagline);
    
    // Button column
    const buttonCol = document.createElement('div');
    buttonCol.className = 'welib-ad-col welib-ad-button-col';
    const button = document.createElement('button');
    button.className = 'welib-ad-button';
    button.textContent = 'Explore Now';
    buttonCol.appendChild(button);
    
    // Assemble the components
    row.appendChild(logoCol);
    row.appendChild(taglineCol);
    row.appendChild(buttonCol);
    adContent.appendChild(row);
    mainLink.appendChild(adContent);
    adContainer.appendChild(mainLink);
    
    return adContainer;
  }
  
  // Create and inject CSS
  function injectStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .welib-ad-container {
        max-width: 730px;
        margin: 0px auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      }
      
      .welib-ad-link {
        text-decoration: none;
        color: inherit;
        display: block;
      }
      
      .welib-ad-content {
        height: 100px;
        background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
        color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s ease;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      
      .welib-ad-content:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
      }
      
      .welib-ad-row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
      
      .welib-ad-col {
        display: flex;
        align-items: center;
      }
      
      .welib-ad-logo-col {
        width: 25%;
        justify-content: center;
      }
      
      .welib-ad-tagline-col {
        width: 55%;
      }
      
      .welib-ad-button-col {
        width: 17%;
        justify-content: center;
      }
      
      .welib-ad-logo {
        font-weight: 800;
        font-size: 2rem;
        background: -webkit-linear-gradient(white, rgba(255,255,255,0.7));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .welib-ad-tagline {
        font-size: 1.1rem;
        line-height: 1.4;
        margin: 0;
      }
      
      .welib-ad-highlight {
        color: #fffacd;
        font-weight: 600;
      }
      
      .welib-ad-button {
        background-color: white;
        color: #1a2980;
        border: none;
        border-radius: 4px;
        padding: 8px 12px;
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .welib-ad-button:hover {
        background-color: #fffacd;
        transform: scale(1.05);
      }
      
      /* Responsive adjustments */
      @media (max-width: 600px) {
        .welib-ad-logo {
          font-size: 1.7rem;
        }
        
        .welib-ad-tagline {
          font-size: 0.9rem;
        }
        
        .welib-ad-button {
          font-size: 0.8rem;
          padding: 6px 10px;
        }
      }
    `;
    document.head.appendChild(styleElement);
  }
  
  // Create a wrapper div with an ID to inject into
  function createWrapper() {
    const wrapper = document.createElement('div');
    wrapper.id = 'welib-ad-wrapper';
    return wrapper;
  }
  
  // Main function to insert the ad
  function insertAd() {
    // Inject the CSS
    injectStyles();
    
    // Create and insert the HTML
    const script = document.currentScript;
    const wrapper = createWrapper();
    
    // Insert the wrapper where the script is located
    script.parentNode.insertBefore(wrapper, script);
    
    // Create the ad and append it to the wrapper
    const ad = createAdHTML();
    wrapper.appendChild(ad);
  }
  
  // Run the insertion
  insertAd();
})();