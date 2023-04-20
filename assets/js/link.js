function myLink() {
    // Get the text field
    var copyText = "https://docs.google.com/document/d/e/2PACX-1vRJzkxrq7QpwD72BA2PFNPGS75BfNG1hoAH8VrsNs0tfD8RG0SbaxYmoU6wf467v-0_X593aymKVXgG/pub";
  
    // Select the text field
    copyText.select(); 
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Copied the text: " + copyText);
  }