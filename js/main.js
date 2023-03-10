// **Descrizione:**
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// **MILESTONE 1**
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// **MILESTONE 2**
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// **MILESTONE 3**
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// **Bonus:**
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        {
          text: "Andare a fare la spesa",
          done: false,
        },
        {
          text: "Visita oculistica",
          done: false,
        },
        {
          text: "Appuntamento con Maria",
          done: true,
        },
        {
          text: "Meeting con Frank",
          done: true,
        },
        {
          text: "Passeggiata nel bosco",
          done: false,
        },
        {
          text: "Acquisto regalo compleanno",
          done: false,
        },
      ],
      newTask: "",
      doneTasks: [],
      todoTasks: [],
      errore: false,
    };
  },
  computed: {},
  methods: {
    removeToDoItem(i) {
      this.todoTasks.splice(i, 1);
    },

    removeDoneItem(i) {
      this.doneTasks.splice(i, 1);
    },

    addItem() {
      if (this.newTask.length >= 4) {
        this.errore = false;
        const newItem = {
          text: this.newTask,
          done: false,
        };
        this.todoTasks.push(newItem);
        this.newTask = "";
      } else {
        this.errore = true;
      }
    },

    toDoNot() {
      const taskCopy = [...this.tasks];
      for (task of taskCopy) {
        if (task.done) {
          this.doneTasks.push(task);
        } else {
          this.todoTasks.push(task);
        }
      }
    },
  },

  created() {
    this.toDoNot();
  },
}).mount("#root");
