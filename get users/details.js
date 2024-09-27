var tbody = document.getElementById("users");
var buttonIndex = localStorage.getItem("buttonIndex");
window.onload = function () {
  tbody.innerHTML = "";
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + buttonIndex);
  xhr.send("");

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var users = JSON.parse(xhr.response);
      console.log(users);

      var id = document.createElement("td");
      id.textContent = users.id;

      var name = document.createElement("td");
      name.textContent = users.name;

      var username = document.createElement("td");
      username.textContent = users.username;

      var email = document.createElement("td");
      email.textContent = users.email;

      var phone = document.createElement("td");
      phone.textContent = users.phone;

      var website = document.createElement("td");
      website.textContent = users.website;

      // console.log(id, name, username, email);

      var row = document.createElement("tr");
      row.append(id, name, username, email, phone, website);
      tbody.append(row);

      // console.log(row);
    }
  };
};
