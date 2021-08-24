/* Geetha
1) Store all the inputs from the user to the variables

2) Do all validation on your form to ensure the information to be passed to the backend are correct

3) If all information is correct, add all the information into an object array (e.g. formList)

4) Print out the formList to check if the information are in the object array */

const formList = [];
let isSelected = false;
let selectedText = " ";

// store all the values into the object array
function addForm() {
  let cakeId = document.querySelector("#cake_id").value;
  let cakeName = document.querySelector("#cake_name").value;
  let quantity = document.querySelector("#quantity").value;
  let price  = document.querySelector("#price").value;
  let description = document.querySelector("#description").value;
  let productImage = document.querySelector("#product_image").src;
  // check if any option is selected  
  if(!isSelected)
    {
      document.querySelector("#weight").setCustomValidity("Please select weight!");
      document.querySelector("#weight").reportValidity();
                             
    } else 
    {
      document.querySelector("#weight").setCustomValidity(""); 
      addToList(cakeId, cakeName, quantity, selectedText , price, description, productImage);
        
    }
 
}

//Adding the list of item in to the array , and push the array to formList object

function addToList(cakeId, cakeName, quantity, selectedText , price, description, productImage) {
  const item = {
    cakeId: cakeId, 
    cakeName: cakeName,
    quantity: quantity, 
    weight: selectedText, 
    price: price, 
    description: description,
    productImage: productImage
  }
  formList.push(item);
  console.log(formList);
// clear the form for the next input 
    clearForm();
    console.log(`Total Submission: ${formList.length}`.formList);
}
function clearForm() {
    document.querySelector("#cake_id").value =" ";
    document.querySelector("#cake_name").value =" ";
    document.querySelector("#quantity").value =" ";
    document.querySelector("#weight").selectedIndex = 0;
    document.querySelector("#price").value =" ";
    document.querySelector("#description").value =" ";
    document.querySelector("#product_image").src =" ";
}

//validation for Dropdown list

const selectOption = document.querySelector("#weight");
selectOption.addEventListener("change", function() {
  console.log(selectOption.selectedIndex);
    
    if(selectOption.selectedIndex != 0)
    {
        //let sel = document.getElementById("weight");
        selectedText = selectOption.options[selectOption.selectedIndex].text;
        selectOption.setCustomValidity("");
        selectOption.reportValidity();
        //document.querySelector("#weight").setCustomValidity("Please select weight!");
        isSelected = true;
    
    } else {
        isSelected = false;
      }      
});
 


    









