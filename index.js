// fill in javascript code here


let form = document.querySelector("form")
let namee = document.getElementById("name")
let id = document.getElementById("docID")
let dep = document.getElementById("dept")
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mobile = document.getElementById("mbl")
let tbody = document.querySelector("tbody")

 let arr = []
form.addEventListener('submit',function(e){
e.preventDefault();


let obj ={}
obj.name = namee.value
obj.docID = id.value
obj.dept = dep.value
obj.exp = exp.value
obj.email =email.value
obj.mbl = mobile.value



let delte = "Delete"

obj.delte = delte
let role =""



if (exp.value>5){
     role = "Senior"
}
else if (exp.value>2 && exp.value<5){
     role ="Junior"
}
else{
     role ="Trainee"
}


obj.role =role



arr.push(obj);
console.log(arr)


tbody.innerHTML =null
arr.map((ele,index) => {
    let row = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3= document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")

    td.innerText = ele.name
    td1.innerText = ele.docID
    td2.innerText = ele.dept
    td3.innerText = ele.exp
    td4.innerText = ele.email
    td5.innerText = ele.mbl
    td6.innerText = ele.role
    td7.innerText = ele.delte

    td7.addEventListener("click",function(){
     arr.splice(index)
     row.remove()
    })


     

    row.append(td,td1,td2,td3,td4,td5,td6,td7)
    tbody.append(row)
     td7.style.backgroundColor = "red"
  
 })



})