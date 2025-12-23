//your JS code here. If required.
let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submit = document.getElementById("submit");
let existing = document.getElementById("existing");

let key = "existing";

if(localStorage.getItem(key)){
	existing.style.display = "initial";
}

existing.addEventListener("click",()=>{
	let uname = localStorage.getItem(key).trim().split(" ")[0];
	alert(`Logged in as ${uname}`);
});

submit.addEventListener("click",()=>{
	let uname = username.value;
	let pass = password.value;
	alert(`Logged in as ${uname}`);

	if(checkbox.checked){
		localStorage.setItem(key,`${uname} ${pass}`);
	}else{
		localStorage.clear();
	}
	
})
