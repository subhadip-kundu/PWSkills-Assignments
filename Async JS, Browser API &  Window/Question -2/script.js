let instance = new XMLHttpRequest();
let userList = document.getElementById("userList");

instance.open("GET", "https://jsonplaceholder.typicode.com/users", true);

instance.onreadystatechange = function () {
  if (instance.readyState === XMLHttpRequest.DONE) {
    if (instance.status === 200) {
      let responseData = JSON.parse(instance.responseText);
      // Clear previous content
      userList.innerHTML = "";
      // Populate the userList div with user data
      responseData.forEach(function (user) {
        userList.innerHTML += "<li>" + user.name + "</li>";
      });
    } else {
      console.error("Request failed with status : ", instance.status);
    }
  }
};

instance.onerror = function () {
  console.error("Request failed");
};

instance.send();
