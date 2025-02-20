let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function(){
   let taskText = input.value.trim(); //trim to remove extra space
   if(taskText === ""){
    alert("you didn't enter task, Enter your task to add task");
    return;
   }

    let item =document.createElement("li"); // create item to store tasks
    item.innerText = input.value; // task which we input add in item

    let delbtn= document.createElement("button");//creat delete btn
    delbtn.innerText = "clear"; // give text to button which created
    delbtn.classList.add("delete"); // give class to the created button

    item.appendChild(delbtn); // now delete buton which we create add in item 
    ul.appendChild(item); // item of input task add in ul
    input.value=""; // after creating item input reset empty
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName =="BUTTON"){ //what trigger the event occure is it button or div
        let listItem = event.target.parentElement; // so when we delete button parant element
        listItem.remove();
        console.log("delete");
    }
    
});


// when we click delete buttons then task is also deleted

// let delbtns = document.querySelectorAll(".delete");// all delete class btn access in js
// for(delbtn of delbtns){ 
//     delbtn.addEventListener("click", function(){ //add event listerner on button so when they click they deleted
        
//         let par= this.parentElement; // use navigation to delete par(li) when button clicked
//         par.remove();
//     });
// }