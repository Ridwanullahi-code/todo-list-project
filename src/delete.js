export default class Delete {
  // delete list
  trash(col) {
    const parent = document.querySelector('.output');
    parent.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-trash')) {
        this.clearStorage(col, e.target.id);
        e.target.parentElement.remove();
      }
    });
  }

  clearStorage(col, id) {
    col.forEach((el, index) => {
      if (el.index === Number(id)) {
        col.splice(index, 1);
      }
    });
    localStorage.setItem('list', JSON.stringify(col));
  }
}
