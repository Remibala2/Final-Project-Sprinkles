const contactformList = []; 

function  contactaddForm() {
    
    let contact_name = document.querySelector("#contact_name").value;
    let contact_email = document.querySelector("#contact_email").value;
    let contact_mobile = document.querySelector("#contact_mobile").value;
    let contact_enquiry = document.querySelector("#contact_enquiry").value;
  
      addToListEnquiry(contact_name, contact_email, contact_mobile, contact_enquiry);
    }

    function addToListEnquiry (contact_name, contact_email, contact_mobile, contact_enquiry) {
        //just adding the list of item in to the array , and push the array to formList object
        //item object that contain one set of property and value of the inputs
        const contactitem = {
            contact_name: contact_name,
            contact_email: contact_email,
            contact_mobile: contact_mobile,
            contact_enquiry: contact_enquiry    
    
        }
        contactformList.push(contactitem);
        console.log(contactformList);
    
        //call the API that created by you in the backend to send the data back and store into the
        
        
        // clear the form for the next input
        clearEnquiryForm();
        console.log(`Total Submission: ${contactformList.length}`.contactformList);
    
    }

    function clearEnquiryForm() {
        document.querySelector("#contact_name").value = "";
        document.querySelector("#contact_email").value = "" ;
        document.querySelector("#contact_mobile").value = "";
        document.querySelector("#contact_enquiry").value = "";
        
    }