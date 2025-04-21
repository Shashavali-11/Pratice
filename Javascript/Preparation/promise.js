// fetch("https://fakestoreapi.com/products")
//   .then(response => response.json())
//   .then((data)=>{data.map((val)=>{
//     console.log("Id : " ,val.id)
//   })})
//   .catch(error => console.error("Error:", error));



// new Promise((resolve, reject) => {
//   resolve(5);
// })
// .then(num => {
//   console.log("First then:", num);
//   return num * 2;
// })
// .then(result => {
//   console.log("Second then:", result);
//   return result + 3;
// })
// .then(final => {
//   console.log("Final result:", final); // Output: 13
// });




function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: id, name: "   john doe   " }), 500);
  });
}

function cleanName(user) {
  user.name = user.name.trim();
  return user;
}

function formatName(user) {
  user.name = user.name
    .split(" ")
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  return user;
}

fetchUser(101)
  .then(cleanName)
  .then(formatName)
  .then(user => {
    console.log("Formatted User:", user); 
    // Output: { id: 101, name: "John Doe" }
  })
  .catch(err => console.error("Error:", err));
