let getUsers = document.getElementById("btn");
let tbody = document.getElementById("users");

getUsers.addEventListener("click", function () {
  tbody.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      for (let i = 0; i < users.length; i++) {
        let id = document.createElement("td");
        id.textContent = users[i].id;

        let name = document.createElement("td");
        name.textContent = users[i].name;

        let username = document.createElement("td");
        username.textContent = users[i].username;

        let email = document.createElement("td");
        email.textContent = users[i].email;

        let phone = document.createElement("td");
        phone.textContent = users[i].phone;

        let website = document.createElement("td");
        website.textContent = users[i].website;

        let action = document.createElement("td");
        action.textContent = "Delete Item";
        action.id = "action";

        let row = document.createElement("tr");
        row.append(id, name, username, email, phone, website, action);
        tbody.append(row);
      }

      let buttons = document.querySelectorAll("#action");
      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          let row = this.parentElement; // assuming the button is inside a td, and you want to remove the entire tr
          row.remove();
        });
      });
    });
});
