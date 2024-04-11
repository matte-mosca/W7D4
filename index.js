const row = document.getElementById("row");
const LoadButton = document.getElementById("loadImages");
const SecondLoadButton = document.getElementById("loadSecondImages");
const ImageFunction = (URL) => {

  fetch(URL, {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Ny8bwYzDFyLIMkBGtpOQqBNFTGib4x7gmwbC1Y37REy3rEB0uJuHFydZ",
    }, 
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      console.log(data); 

      data.photos.forEach((obj) => {
        const img = obj.src.medium;
        const title = obj.photographer;
        const description = obj.alt;
        const id = obj.id;
        console.log(obj);
        const div = document.createElement("div");
        div.classList.add("col-md-4");
      
        div.innerHTML = ` <div class="card mb-4 shadow-sm">
          <img
            src="${img}"
            class="bd-placeholder-img card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">
              ${description}
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary Hide"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${id}</small>
            </div>
          </div>
        </div>`;
        row.appendChild(div);
      });
    })
    .then(() => {
        const hideButton = document.querySelectorAll(".Hide");
        console.log(hideButton);
        hideButton.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const card = e.target.parentNode.parentNode.parentNode.parentNode;
            card.remove();
          });
        });
      });
};


window.onload = () => {
    LoadButton.addEventListener("click", (URL) => {
      ImageFunction("https://api.pexels.com/v1/search?query=animal");
    });
    SecondLoadButton.addEventListener("click", (URL) => {
      ImageFunction("https://api.pexels.com/v1/search?query=car");
    });
    hideButton.remove()
  }

