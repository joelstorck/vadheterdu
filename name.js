let newDiv = document.createElement("div");
let newPara = document.createElement("p");
    document.body.appendChild(newDiv).style.display = "none";
let newbtn = document.createElement("button");
let t = document.createTextNode("Radera!");
    newbtn.appendChild(t);
    newDiv.appendChild(newPara);
    newDiv.appendChild(newbtn);

let checkLS = localStorage.getItem("name");
if(checkLS){
    document.body.appendChild(newDiv).style.display = "block";
    newPara.innerHTML = "<strong>" + localStorage.getItem("name") + "</strong>";
    }

newbtn.addEventListener("click", function() {
    localStorage.removeItem("name");
    document.body.appendChild(newDiv).style.display = "none";
            
})

let saveButton = document.getElementById("btn");
    saveButton.addEventListener("click", function() {
        let nameInput = document.getElementById("txt").value;
        let userName = String(nameInput);
        
        if(userName !== null) 
            localStorage.setItem("name", userName);
            newPara.innerHTML = "<strong>" + localStorage.getItem("name") + "</strong>";
        
if(localStorage.getItem("name")) 
    console.log(localStorage.getItem("name"));
    document.body.appendChild(newDiv).style.display = "block";

        });
  