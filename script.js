let month = (new Date()).getMonth() + 1;
document.getElementById("curDate").innerText = ("0" + (new Date()).getDate()).slice(-2) + "/" + ("0" + month).slice(-2) + "/" + (new Date()).getFullYear();

let currencyid = document.getElementById("currency");
let currency = currencyid.value;
// console.log(currency);

let arr1 = [];

let card =  document.getElementById("card");
let btn = document.getElementById("btn");

function form_card (){
    let currency = document.getElementById("currency").value;
    console.log(currency);
    let a0 = document.createElement("div");
    let a = document.createElement("div");
    a.classList.add("flex");
    let b =  document.createElement("div");
    b.classList.add("flex1");
    let c = document.createElement("input");
    c.type = "text"
    c.classList.add('mb' , 'bg' , 'w');
    c.placeholder = "Item Name";
    c.required = true;
    let d = document.createElement("input");
    d.type = "text"
    d.classList.add('mb' , 'bg' , 'w');
    d.placeholder = "Item Name";
    d.required = true;
    b.append(c);
    b.append(d);
    a.append(b);
    let e = document.createElement("input");
    e.classList.add('mb' , 'bg' , 'w45' , 'qty');
    e.type = "number";
    e.value = 0;
    a.append(e);
    let f =  document.createElement("h3"); 
    f.classList.add("bg" , "right");
    let g = document.createElement("span");
    g.classList.add("bround");
    g.innerText = currency;
    
    arr1.push(g);
    
    f.append(g);
    a.append(f);
    let h = document.createElement("input");
    h.classList.add('bg' , 'left' , 'w100' , 'rate');
    h.type = "number";
    h.value = 0;
    a.append(h);
    let i = document.createElement("div");
      
    i.addEventListener("click", (el) => {     
     i.parentElement.parentElement.remove();
     subtotaleverytime();
    })  //() => {}
    i.innerHTML = ` <svg class="bgred"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-white mt-1 btn btn-danger" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="height: 33px; width: 33px; padding: 7.5px;"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path></svg>`;  
      
    a.append(i); 

     a0.append(a);
     let hr = document.createElement("hr");
     a0.append(hr);
     card.append(a0);
     subtotaleverytime();
     
    //  <div>
    //  <div  class="flex">
    //       <div class="flex1">
    //       <input class="mb bg w" type="text" placeholder="Item Name" required> <br>
    //       <input class="mb bg w" type="text" placeholder="Item description" required>
    //       </div>
    //       <input class="mb bg w45" type="number" value="1" name="" id="">
    //       <h3 class="bg right"><span class="bround">$</span></h3>
    //       <input class="bg left w100" type="number" value="1.00">
    //      <div>
    //       <svg class="bgred"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-white mt-1 btn btn-danger" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="height: 33px; width: 33px; padding: 7.5px;"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path></svg>
    //      </div>
    //      </div> 
    //      <hr>
    //   </div>    
   
    // strfinal += str;
    // card.innerHTML = strfinal;

}

form_card();

btn.addEventListener("click",(ele) => {
    ele.preventDefault();
      form_card(); 
 })

  currencyid.addEventListener("change" , () => {
    // console.log("change")
    let currency = document.getElementById("currency").value;
    arr1.forEach(element => {
        element.innerText= currency;
    });
     let curry = document.getElementsByClassName("curry");
     Array.from(curry).map(element => {
      element.innerText= currency;
     }) 
  })

  function subtotaleverytime(){
   let total = 0;
  let qty = document.getElementsByClassName("qty");
  let rate = document.getElementsByClassName("rate");
  function funsubtotal (){
        total = 0;
    if(qty.length === 0){
      document.getElementById("subto").innerText = total;
    }
    for(let i = 0; i < qty.length; i++){
        total += parseFloat(Array.from(qty)[i].value) * parseFloat(Array.from(rate)[i].value);
        document.getElementById("subto").innerText = total;
        let tax = document.getElementById("tax").value;
        document.getElementById("taxp").innerText ="(" + tax + "%)" ; 
       let discount = document.getElementById("discount").value;
       document.getElementById("disp").innerText ="(" + discount+ "%)" ; 
       tax != 0 ? tax = total*tax/100 : tax = 0;
      document.getElementById("taxamt").innerText = tax;
       discount != 0 ? discount = total*discount/100 : discount = 0;
       document.getElementById("disamt").innerText = discount;
       let tot = total + tax - discount; 
        document.getElementById("tot").innerText = tot;
    }
  } 
  
  Array.from(qty).map(e => {
      e.addEventListener("change", funsubtotal); 
    })

    Array.from(rate).map(e => {
      e.addEventListener("change", funsubtotal); 
    })

    funsubtotal();
  };
  subtotaleverytime();


  document.getElementById("tax").addEventListener("change",() => {
    subtotaleverytime();
  })
  document.getElementById("discount").addEventListener("change",() => {
    subtotaleverytime();
  })
  
  

  
 



  



