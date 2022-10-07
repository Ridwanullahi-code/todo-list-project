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

  // Add method to reset index
  clearStorage(col, id) {
    this.col = col;
    this.col.forEach((el, index) => {
      if (el.index === Number(id)) {
        this.col.splice(index, 1);
      }
    });
    localStorage.setItem('list', JSON.stringify(this.col));
  }

  // delete list
  delete(col) {
    this.clear = document.querySelector('.clear-btn');
    this.clear.addEventListener('click', () => {
      this.checks = document.querySelectorAll('.check');
      this.checks.forEach((check) => {
        if (check.checked === true) {
          check.parentElement.remove();
          this.clearStorage(col, check.id);
        }
      });
    });
  }
}
