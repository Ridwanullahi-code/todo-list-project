export default class Action {
  parent = document.querySelector('.output');

  // Method to update the status of the action
  complete(col) {
    this.parent.addEventListener('click', () => {
      this.checks = document.querySelectorAll('.check');
      this.checks.forEach((check, index) => {
        if (check.checked) {
          col[index].complete = check.checked;
        } else {
          col[index].complete = check.checked;
        }
      });
      localStorage.setItem('list', JSON.stringify(col));
    });
  }
}
