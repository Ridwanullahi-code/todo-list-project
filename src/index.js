import '../styles/index.scss';
import Delete from './delete.js';

class ToDo {
  collection = [];

  list = document.querySelector('.add-list');

  displayToDo(data) {
    this.data = data;
    const parent = document.querySelector('.output');
    const ul = document.createElement('ul');
    this.data.forEach((d) => {
      ul.innerHTML = `
        <li class="display-list">
            <input type="checkbox" id= task${d.index} class="check"></input>
             <input class="desc" value=${d.description}></input>
            <i class="fa-solid  fa fa-ellipsis-vertical dot"></i>
            <i id= ${d.index} class="fa-solid  fa fa-trash fa-hide"></i>
        </li>
        `;
    });
    parent.append(ul);
  }

  check() {
    this.parent = document.querySelector('.output');
    this.parent.addEventListener('click', (e) => {
      if (e.target.className === 'check') {
        const la = e.target.parentElement.children[1];
        la.classList.toggle('text');
      }
    });
  }

  createObj() {
    const obj = {
      description: this.list.value,
      complete: false,
      index: 0,
    };
    return obj;
  }

  addItem() {
    const obj = this.createObj();
    this.collection.push(obj);
    obj.index += this.collection.length;
    localStorage.setItem('list', JSON.stringify(this.collection));
    return this.collection;
  }

  addBtn() {
    this.list.addEventListener('keypress', (e) => {
      const en = document.querySelector('.add-list');
      if (e.key === 'Enter') {
        this.displayToDo(this.addItem());
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
obj.addBtn();
obj.check();
obj.btn();
del.trash(obj.collection);
