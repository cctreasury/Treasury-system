//Helper function to get value by id
function getValue(name){
    return document.getElementById(name).value
  }
  
  function validateSubmission(){
    //save all the input values
    const name = getValue('name')
    const role = getValue('role')
    const ada = getValue('ada')
    const wallet = getValue('wallet')
    const description = getValue('description')
    const pool = getValue('pool')
    
    //generate a filename
    const filename = new Date().getTime().toString() + '-' + name.replace(/\s/g, '-') + ".md"
    
    
    //Generate a string mimicing the file structure
    //Indentation is important here
    let fileText = `---
Date: ${new Date().toUTCString()}
name: "${name}"
role: "${role}"
ada: "${ada}"
wallet: "${wallet}"
pool: "${pool}"
---
${description}`
    
    //Encode string to URI format
    const encodedFileText = encodeURIComponent(fileText)
  
    //Generate a github link with query parameter
    const githubQueryLink = "https://github.com/Glaxas/CC-treasury/new/main/Form%20recordings/new?value=" + encodedFileText +"&filename=" + filename
    
    //Open in a new tab
  window.open(githubQueryLink) 
    
  }