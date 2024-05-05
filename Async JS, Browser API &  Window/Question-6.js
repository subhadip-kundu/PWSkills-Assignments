// localStorage:
/* localStorage and sessionStorage are two widely-used APIs in web development for client-side data storage. localStorage is employed for persisting data across browser sessions. It maintains the stored data even after the browser is closed and reopened, providing a means for applications to remember user preferences or settings. For instance, a web application might utilize localStorage to save a user's selected theme or language preference. This ensures that the user's choices remain consistent across visits to the website, enhancing their browsing experience.*/
// Storing data in localStorage
localStorage.setItem("username", "SubhadipKundu");

// Retrieving data from localStorage
const username = localStorage.getItem("username");
console.log(username);

// sessionStorage:
/*On the other hand, sessionStorage is intended for temporary data storage within a single browsing session. Data stored using sessionStorage is accessible only within the same tab or window and is cleared once the session ends, such as when the tab is closed or the browser is exited. This makes sessionStorage suitable for scenarios where data needs to be retained temporarily, like storing authentication tokens or managing state during a user's interaction with a web application. For example, an e-commerce website might use sessionStorage to temporarily store the contents of a user's shopping cart during their browsing session, ensuring that the items are preserved as they navigate between different pages of the site.*/

// Storing data in sessionStorage
sessionStorage.setItem("token", "abc123");

// Retrieving data from sessionStorage
const token = sessionStorage.getItem("token");
console.log(token); // Output: abc123
