// fill in javascript code here
let myform = document.querySelector("form")
let namee = document.getElementById("name")
let empid = document.getElementById("employeeID")
let department = document.getElementById("department")
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mobile = document.getElementById("mbl")
let tbody = document.querySelector("tbody")


let arr =[]

myform.addEventListener('submit',function(e){

e.preventDefault();
let obj ={}

obj.name = namee.value
obj.employeeID = empid.value
obj.department = department.value
obj.exp = exp.value
obj.email = email.value
obj.mbl = mobile.value

let dlt = "Delete"
let role=""
if (exp.value>5){
    role = "Senior"
}
else if (exp.value >2 && exp.value<5){
    role=  "junior"
}
else{
    role = "Trainee"
}


obj.role = role
obj.dlt = dlt
arr.push(obj)
console.log(obj)


tbody.innerHTML = "";

arr.map((ele,index) =>  {

let row =document.createElement("tr")
let td1 =document.createElement("td")
let td2 =document.createElement("td")
let td3 =document.createElement("td")
let td4 =document.createElement("td")
let td5 =document.createElement("td")
let td6 =document.createElement("td")
let td7 =document.createElement("td")
let td8 =document.createElement("td")


td1.innerText= ele.name
td2.innerText= ele.employeeID
td3.innerText= ele.department
td4.innerText= ele.exp
td5.innerText= ele.email  
td6.innerText= ele.mbl
td7.innerText= ele.role
td8.innerText= ele.dlt



td8.addEventListener("click",function(){
  arr.splice(index,1)
  row.remove()
})



row.append(td1,td2,td3,td4,td5,td6,td7,td8)
tbody.append(row)

td8.style.backgroundColor= "red";

})
})