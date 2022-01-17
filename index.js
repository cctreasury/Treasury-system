//Helper function to get value by id
function getValue(name){
    return document.getElementById(name).value
  }
  
  function validateSubmission(){
    //save all the input values
    const name = getValue('name')
    const budgetB = getValue('budgetB')
    const ada = getValue('ada')
    const txid = getValue('txid')
    const description = getValue('description')
    const pool = getValue('pool')
    
    //generate a filename
    const filename = new Date().getTime().toString() + '-' + name.replace(/\s/g, '-') + ".md"
    
    
    //Generate a string mimicing the file structure
    //Indentation is important here
    let fileText = `---
Date: ${new Date().toUTCString()}
Name: "${name}"
Budget Breakdown Item: "${budgetB}"
ADA: "${ada}"
Transaction ID: "${txid}"
Funded Proposal: "${pool}"
---
Description: ${description}`
    
    //Encode string to URI format
    const encodedFileText = encodeURIComponent(fileText)
  
    //Generate a github link with query parameter
    
    function githubQueryLink(pool) {
      var answer = "";
      switch(pool) {
        case 'Power Up Catalyst Circle':
          answer = "https://github.com/cctreasury/treasury-system/new/main/Transaction%20recordings/Fund6/Power-Up-The-Catalyst-Circle/new?value=" + encodedFileText +"&filename=" + filename;
          break;
        case 'CC Admin Team Scope Expansion':
          answer = "https://github.com/cctreasury/treasury-system/new/main/Transaction%20recordings/Fund7/CC-Admin-Team-Scope-Expantion/new?value=" + encodedFileText +"&filename=" + filename;
          break;
        case 'CCv3 Sustaining The Circle':
          answer = "https://github.com/cctreasury/treasury-system/new/main/Transaction%20recordings/Fund7/CCv3-Sustaining-the-circle/new?value=" + encodedFileText +"&filename=" + filename;
          break;
        case 'CC Funding Mechanism':
          answer = "https://github.com/cctreasury/treasury-system/new/main/Transaction%20recordings/Fund7/CC-Funding-Mechanism/new?value=" + encodedFileText +"&filename=" + filename;
          break;
          case 'CC Treasury Management':
          answer = "https://github.com/cctreasury/treasury-system/new/main/Transaction%20recordings/Fund7/CC-Treasury-Management/new?value=" + encodedFileText +"&filename=" + filename;
          break;
        default:
          answer = "https://github.com/cctreasury/treasury-system/new/main/Transaction%20recordings/new?value=" + encodedFileText +"&filename=" + filename;
          break;
      }
    
      return answer;
    }
    //Open in a new tab
  window.open(githubQueryLink(pool)) 
    
  }
