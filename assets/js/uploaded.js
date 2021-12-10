const Container = document.querySelector(".upload_list_container");

const addBtn = document.querySelector(".add_btn");

addBtn.addEventListener("click", () => {
  addUploadedFile();
});

function addUploadedFile() {
  const newEl = document.createElement("div");
  newEl.innerHTML = `
    <div class="img_container">
    <img src="assets/img/w-p (1).jpg" alt="">
</div>
<span>Apu Chandra Das</span>
<input type="button" value="Delete" class="delete">

    `;
  Container.appendChild(newEl);

  const deleteBtn = newEl.querySelector(".delete");

  deleteBtn.addEventListener("click", () => {
    newEl.remove();
  });
}

console.log(addBtn);