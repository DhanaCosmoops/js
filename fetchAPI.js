fetch("https://fakestoreapi.com/users/abc")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Data not found");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

async function fetchData() {
  try {
    let response = await fetch("https://fakestoreapi.com/users");

    if (!response.ok) {
      throw new Error("Data Not Found");
    }
    let data = await response.json();
    console.log(data[0]);
  } catch (error) {
    console.log(error.message);
  }
}
fetchData();
