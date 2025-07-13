function hin() {
  var log=document.getElementById('log')
  log.innerHTML += "your birth-date(dd/mm/yyyy)"
}
function lo() {
  var pass=document.getElementById("pass").value 
  if(pass === ""){
    alert("Password cannot be empty ")
  }else{
  if(pass === "18012010" || pass === "18/01/2010"){
    window.location.href="msg.html"
  }else{
    alert("incorect password....login failed")
  }
  }
}
document.getElementById('pass').addEventListener('keydown', function (event){
  if(event.key==="Enter"){
    lo()
  }
})