console.log("xyz");

let currency = document.getElementById("currency").value;
console.log(currency);


let card =  document.getElementById("card");
let btn = document.getElementById("btn");

function call_card (){
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
    e.classList.add('mb' , 'bg' , 'w45');
    e.type = "number";
    e.value = 1;
    a.append(e);
    let f =  document.createElement("h3"); 
    f.classList.add("bg" , "right");
    let g = document.createElement("span");
    g.classList.add("bround");
    g.innerText = currency;
    f.append(g);
    a.append(f);
    let h = document.createElement("input");
    h.classList.add('bg' , 'left' , 'w100');
    h.type = "number";
    h.value = 1;
    a.append(h);
    let i = document.createElement("div");
      
    i.addEventListener("click", (el) => {

     i.parentElement.parentElement.remove()})  //() => {}
    i.innerHTML = ` <svg class="bgred"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-white mt-1 btn btn-danger" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="height: 33px; width: 33px; padding: 7.5px;"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path></svg>`;  
   
    a.append(i); 

     a0.append(a);
     let hr = document.createElement("hr");
     a0.append(hr);
     card.append(a0);

     
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

call_card();

btn.addEventListener("click",(ele) => {
    ele.preventDefault();
      call_card();
    
})
