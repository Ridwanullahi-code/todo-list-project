import '../styles/index.scss';
import Delete from './delete.js';
import Action from './action.js';

class ToDo {
  collection = [];

  list = document.querySelector('.add-list');

  displayToDo(data) {
    this.data = data;
    const parent = document.querySelector('.output');
    const ul = document.createElement('ul');
    ul.innerHTML = `
      <li class="display-list">
          <input type="checkbox" id= ${this.data.index} class="check"></input>
          <input class="desc" value=${this.data.description}></input>
          <i class="fa-solid  fa fa-ellipsis-vertical dot"></i>
          <i id= ${this.data.index} class="fa-solid  fa fa-trash fa-hide"></i>
      </li>
      `;
    parent.append(ul);
  }

  // get book from local storage
  getStorage = () => {
    const list = JSON.parse(localStorage.getItem('list'));
    list.forEach((li) => this.displayToDo(li));
  };

  check() {
    this.parent = document.querySelector('.output');
    this.parent.addEventListener('click', (e) => {
      if (e.target.className === 'check') {
        const la = e.target.parentElement.children[1];
        la.classList.toggle('text');
      }
    });
  }

  addBtn() {
    this.list.addEventListener('keypress', (e) => {
      const en = document.querySelector('.add-list');
      if (e.key === 'Enter') {
        const obj = { description: this.list.value, complete: false, index: 0 };
        this.collection.push(obj);
        obj.index += this.collection.length;
        this.displayToDo(obj);
        localStorage.setItem('list', JSON.stringify(this.collection));
        en.value = '';
      }
    });
  }

  btn() {
    this.parent = document.querySelector('.output');
    this.parent.addEventListener('click', (e) => {
      if (e.target.classList.contains('dot')) {
        e.target.classList.toggle('fa-hide');
        e.target.nextElementSibling.classList.toggle('fa-show');
        e.target.parentElement.style.backgroundColor = 'yellow';
        e.target.parentElement.children[1].style.backgroundColor = 'yellow';
      }
    });
  }
}
const obj = new ToDo();
const del = new Delete();
const act = new Action();

obj.addBtn();
obj.check();
obj.btn();
del.trash(obj.collection);
del.delete(obj.collection);
act.complete(obj.collection);

// Display all todo list when page loaded
document.addEventListener('DOMContentLoaded', obj.getStorage());
