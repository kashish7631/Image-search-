document.getElementById("btn").addEventListener("click", getImages);

const article = document.querySelector("article");

async function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Client-ID"
    },
  })
  
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
        return.response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something Went Wrong - Khurpi Side");
        });
      }
  })
  .catch((error) => {
      console.log(error);
      throw new Error("Something Went Wrong - Khurpi Side");
    });
}


var input = document.getelementById("searchField");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    getImages();
  }
});

function func() {
  console.log("It Works");

  document.getelementById("slike").setAttribute("attribute_on_click");
  async function getImages() {
    try {
      const userInput = document.getElementById("searchField").value;
      console.log(userInput);

      const method = "GET";
      const url = "https://api.unsplash.com/search/photos?query=${userInput}";
      const responseData = await sendHttpRequest(method, url);

      responseData.results.forEach((res) => {
        const method = "afterend";
        const url = `<div class="image" onclick="func()"><img class="slike" src="${res.urls.small}"/></div>`;
        article.insertAdjacentHTML(method, url);
      });

      return responseData;
    } catch (error) {
      alert(error.message);
    }
    }
  }
}
