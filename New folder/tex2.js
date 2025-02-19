let productsDiv = document.querySelector(".product-wrapper")

async function Getdatas() {
    let result = await axios.get("https://northwind.vercel.app/api/suppliers")


    for (i = 0; i < result.data.length; i++) {


        productsDiv.innerHTML += `
                     <div class="products">
                  
                         <ul class="card-title">
                         <li>${result.data[i].companyName}</li>
                         <li>${result.data[i].contactName}</li>
                         <li>${result.data[i].contactTitle}</li>
                         </ul>
                                          
                         <br>
                         <p class="card-text">
                        
                         <ul>
                         <li>${result.data[i].street}</li>
                         <li>${result.data[i].city}</li>
                         <li>${result.data[i].region}</li>
                         <li>${result.data[i].postalCode}</li>
                         <li>${result.data[i].country}</li>
                         <li>${result.data[i].phone}</li>
                         </ul>
                         </p>
                         <br>
                         <div class="prbutton">
                             <button>View</button>
                         </div>
                    </div>`

      








    }


}

Getdatas()
//kart daxili undefined verir və template formada yazdığım css ilə run etdiyim üçün verilən api-dən daha çox data alaraq səliqəsi qismən düşür.