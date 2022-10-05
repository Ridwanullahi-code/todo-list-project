import '../styles/index.scss';

class ToDo {
  collection = [
    {
      description: 'Wash the dish',
      complete: false,
      index: 0,
    },
    {
      description: 'Complete To Do list project',
      complete: false,
      index: 1,
    },
    {
      description: 'Program Wesite',
      complete: false,
      index: 2,
    },
  ];

  displayToDo(data) {
    this.data = data;
    const parent = document.querySelector('.output');
    const list = document.createElement('ul');
    list.innerHTML = `
        <li class="display-list">
            <input type="checkbox" id= task${data.index}>
            <label for=task${data.index}>${data.description}</label>
            </input>
            <i class="fa-solid fa-ellipsis-vertical fa"></i>
        </li>
        `;
    parent.append(list);
  }

  addToDo() {
    this.collection.forEach((data, index) => {
      if (data.index === index) {
        this.displayToDo(data);
      }
    });
  }
  // method to
}
const obj = new ToDo();
obj.addToDo();
