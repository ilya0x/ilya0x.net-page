// JavaScript to load the image and add it to the HTML page
window.addEventListener('DOMContentLoaded', (event) => {
    // Get a reference to the image element with the ID 'color-changing-image'
    const imageElement = document.getElementById('color-changing-image');
    
    // Replace the 'src' attribute with the path to your image (e.g., 'image.png')
    imageElement.src = '{{ logo_image_path }}'; // Replace with the path to your image
});

// set up text to print, each item in array is new line
var aText = new Array(
    "I am a seasoned content strategist with a background in event production, media coordination, and IT services.", 
    " ",
    "My expertise lies in event conceptualization and execution with a focus on target demographics and cultural insights, alongside adept negotiation, financial management, and strategic social media marketing."
    );
    var iSpeed = 50; // time delay of print out
    var iIndex = 0; // start printing array at this position
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 100; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialize text position
    var sContents = ''; // initialize contents variable
    var iRow; // initialize current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();


const element = document.querySelector('.rabbit-on-hover');

element.addEventListener('mouseenter', () => {
    element.style.opacity = 0;
});

element.addEventListener('mouseleave', () => {
    setTimeout(() => {
    element.style.opacity = 1;
    }, 1000); // 1000 milliseconds = 1 second
});

