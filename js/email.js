function Validate() {
  var password = document.getElementById("pwrd").value;
  var confirmPassword = document.getElementById("pwrdConf").value;
  if (password != confirmPassword) {
    alert("Sorry, your password does not match.");
    return false;
  }
  return true;
}