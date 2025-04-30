let add = document.getElementById("add");

let display = document.getElementById("display");
let customers = [];

function Customer(name,age,email){
    this.name = name;
    this.age = age;
    this.email = email;

    this.display = function(){
        return `  ---${this.name} --- ${this.age} --- ${this.email}`
    }
}

add.onclick = function(){
    //validation
    let name = document.getElementById("Name");
    let age = document.getElementById("Age");
    let email = document.getElementById("Email");

    let message = document.getElementById("message");
    let totalQueue = document.getElementById("totalQueue");

    if(name.value == ""|| age.value == ""|| email.value=="")
    {
        //message: All fields must be filled
        message.innerText = "all fields must be filled"
    }
    else
    {
        let customer = new Customer(name.value, age.value, email.value)
        customers.push(customer);
        totalQueue.innerText = "Total in queue: "+ customers.length;
    }
}

display.onclick = function(){
    let list = document.getElementById("list");

    let htmlCode = "No --- FullName ---- Age ---- Email<br>";
    let order = 1;

    for(let x in customers)
    {
        htmlCode+= (order++)+ x.display( + "<br>");
    }
    list.innerHTML = htmlCode;
}