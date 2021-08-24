class ProductController {
    //initialising constructor
    constructor() {
        this._items = [];
    }
//create object 
addItem(name, size, description, imageURL, price) {
    const item = {
        name: name,
        size: size,
        imageURL: imageURL,
        description: description,        
        price: price
    }
   this._items.push(item);
}

displayItem()
{
  console.log(this._items);
const productHTMLList = [];

    for(let i=0; i<this._items.length; i++) 
    {
    const item = this._items[i];
    const productHTML = createHTMLCard(i, item);
    productHTMLList.push(productHTML);
    console.log(productHTML);
    
    }

    const pHTML = productHTMLList.join("\n");
    console.log(pHTML);

    document.querySelector("#row").innerHTML = pHTML;

for(let j = 0; j < this._items.length; j++) {
    const item=this._items[j];
    document.getElementById(j).addEventListener("click", function() {
    displayProductDetail(item); 
    });
}
}
}

const createHTMLCard = (index, item) => `
<div class="col-lg-4 col-md-3 col-sm-6">
    <div class="card" style="width: 18rem; height: auto; border: none">
        <img src="${item.imageURL}"
            class="card-img-top"
            alt="image"
            />
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a id=${index} href="#" class="btn btn-info btn-large" data-toggle="modal" data-target="#productModal"> Quick View </a>
              </div>
            </div>
          </div>

`;

function displayProductDetail(item) 
{
    document.getElementById("modalName").innerText = item.name;
    document.getElementById("modalImg").src = item.imageURL;
    document.getElementById("modalSize").innerText = item.size;
   document.getElementById("modalDescription").innerText = item.description;
    document.getElementById("modalPrice").innerText = item.price;    
};

//Get the button:
mybutton = document.getElementById("back-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}