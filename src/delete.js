import { values } from "lodash";

export default class Delete {
  // delete list
  trash(col, item) {
    const parent = document.querySelector(".output");
    parent.addEventListener("click", (e) => {
      const check = e.target.parentElement.children[0].checked;
      if (e.target.classList.contains("fa-trash") && check) {
        this.clearStorage(col, item);
        e.target.parentElement.remove();
      }
    });
  }

  clearStorage(col, item) {
    const val = Object.values(col);
    val.forEach((el) => {
      if (val.indexOf(el) === item.index) {
        col.splice(val.indexOf(el), 1)
        val.index = col.indexOf(el);
      }
    })
    localStorage.setItem('list', JSON.stringify(col))
  }
}
