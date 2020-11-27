<template>
  <div>
    <Menu />
    <Fab type="todo" />
    <div class="container">
      <li
        v-for="item in todoByStatus"
        :class="item.done ? 'done' : ''"
        :key="item.id"
      >
        <span class="label">{{ item.label }}</span>
        <div class="actions">
          <button
            class="btn-picto"
            type="button"
            @click="markAsDoneOrUndone(item)"
            :aria-label="item.done ? 'Undone' : 'Done'"
            :title="item.done ? 'Undone' : 'Done'"
          >
            <i aria-hidden="true" class="material-icons">{{
              item.done ? "check_box" : "check_box_outline_blank"
            }}</i>
          </button>
          <button
            class="btn-picto"
            type="button"
            @click="deleteItemFromList(item)"
            aria-label="Delete"
            title="Delete"
          >
            <i aria-hidden="true" class="material-icons">delete</i>
          </button>
        </div>
      </li>

      <todo-toggle-btn
        label="Move done items at the end?"
        name="todosort"
        @clicked="clickontoogle"
      />
    </div>
  </div>
</template>

<script>
import Fab from "@/components/tte/Fab.vue";
import Menu from "@/components/Menu.vue";
import TodoToggleBtn from "@/components/tte/TodoToggleBtn.vue";

export default {
  components: { Fab, Menu, TodoToggleBtn },
  data() {
    return {
      newitem: "",
      sortByStatus: false,
      todo: [
        { id: 1, label: "Learn VueJs", done: true },
        { id: 2, label: "Code a todo list", done: false },
        { id: 3, label: "Learn something else", done: false }
      ]
    };
  },

  methods: {
    addItem: function() {
      this.todo.push({
        id: Math.floor(Math.random() * 9999) + 10,
        label: this.newitem,
        done: false
      });
      this.newitem = "";
    },
    markAsDoneOrUndone: function(item) {
      item.done = !item.done;
    },
    deleteItemFromList: function(item) {
      let index = this.todo.indexOf(item);
      this.todo.splice(index, 1);
    },
    clickontoogle: function(active) {
      this.sortByStatus = active;
    }
  },

  computed: {
    todoByStatus: function() {
      if (!this.sortByStatus) {
        return this.todo;
      }

      var sortedArray = [];
      var doneArray = this.todo.filter(function(item) {
        return item.done;
      });
      var notDoneArray = this.todo.filter(function(item) {
        return !item.done;
      });

      sortedArray = [...notDoneArray, ...doneArray];
      return sortedArray;
    }
  }
};
</script>

<style scoped>
.container {
  margin: 3rem 0px;
  padding: 1.5rem;
}
@keyframes strikeitem {
  to {
    width: calc(100% + 1rem);
  }
}

ul {
  margin-top: 2.6rem;
  list-style: none;
}

li {
  display: flex;
  margin: 0 -1rem 4px;
  padding: 1.1rem 3rem;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #372faf;
  color: #372faf;
}

.actions {
  flex-shrink: 0;
  padding-left: 0.7em;
}
.label {
  position: relative;
  transition: opacity 0.2s linear;
}
.done .label {
  opacity: 0.6;
}
.done .label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -0.5rem;
  display: block;
  width: 0%;
  height: 1px;
  background: #6c63ff;
  animation: strikeitem 0.3s ease-out 0s forwards;
}
.btn-picto {
  border: none;
  background: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: #6c63ff;
}

/* FORM */
form {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
}
form label {
  min-width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}
form input {
  flex-grow: 1;
  border: none;
  background: #f7f1f1;
  padding: 0 1.5em;
  font-size: initial;
}
form button {
  padding: 0 1.3rem;
  border: none;
  background: #ff6666;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 5px;
  cursor: pointer;
  transition: background 0.2s ease-out;
}
form button:hover {
  background: #ff5e5e;
}
form input,
form button {
  font-family: "Quicksand", sans-serif;
  height: 3rem;
}
</style>
