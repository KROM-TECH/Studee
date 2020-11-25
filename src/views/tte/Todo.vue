<template>
  <div>
    <Menu />
    <Fab type="todo" />
    <main>
      <h1>
        Todo List
        <span>Get things done, one item at a time.</span>
      </h1>

      <!-- <template v-if="todo.length"> -->
      <!-- <transition-group name="todolist" tag="ul"> -->
      <li v-for="item in todoByStatus" v-bind:class="item.done ? 'done' : ''" v-bind:key="item.id">
        <span class="label">{{ item.label }}</span>
        <div class="actions">
          <button
            class="btn-picto"
            type="button"
            @click="markAsDoneOrUndone(item)"
            v-bind:aria-label="item.done ? 'Undone' : 'Done'"
            v-bind:title="item.done ? 'Undone' : 'Done'"
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
      <!-- </transition-group> -->
      <!-- <togglebutton
          label="Move done items at the end?"
          name="todosort"
          @clicked="clickontoogle"
        /> -->
      <!-- </template> -->
      <!-- <p v-else class="emptylist">Your todo list is empty.</p> -->

      <form name="newform" @submit.prevent="addItem">
        <label for="newitem">Add to the todo list</label>
        <input type="text" name="newitem" id="newitem" v-model="newitem" />
        <button type="submit">Add item</button>
      </form>
    </main>
  </div>
</template>

<script>
// import togglebutton from "@/components/tte/TodoToggleBtn.vue";
import Fab from "@/components/tte/Fab.vue";
import Menu from "@/components/Menu.vue";

export default {
  components: {
    //   togglebutton,
    Fab,
    Menu,
  },

  data() {
    return {
      newitem: "",
      sortByStatus: false,
      todo: [
        { id: 1, label: "Learn VueJs", done: true },
        { id: 2, label: "Code a todo list", done: false },
        { id: 3, label: "Learn something else", done: false },
      ],
    };
  },

  methods: {
    addItem: function() {
      this.todo.push({
        id: Math.floor(Math.random() * 9999) + 10,
        label: this.newitem,
        done: false,
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
    },
  },

  computed: {
    todoByStatus() {
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
    },
  },
};
</script>

<style scoped>
@keyframes strikeitem {
  to {
    width: calc(100% + 1rem);
  }
}

#todolist {
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 500px;
  background: #ff6666;
  color: #fff;
  box-shadow: -20px -20px 0px 0px rgba(100, 100, 100, 0.1);
}
#todolist h1 {
  /*text-align:center;*/
  font-weight: normal;
  font-size: 2.6rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
#todolist h1 span {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
  margin-left: 3px;
  margin-top: 0.2rem;
}

#todolist .emptylist {
  margin-top: 2.6rem;
  text-align: center;
  letter-spacing: 0.05em;
  font-style: italic;
  opacity: 0.8;
}
#todolist ul {
  margin-top: 2.6rem;
  list-style: none;
}
#todolist .todolist-move {
  transition: transform 1s;
}
#todolist li {
  display: flex;
  margin: 0 -3rem 4px;
  padding: 1.1rem 3rem;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
}

#todolist .actions {
  flex-shrink: 0;
  padding-left: 0.7em;
}
#todolist .label {
  position: relative;
  transition: opacity 0.2s linear;
}
#todolist .done .label {
  opacity: 0.6;
}
#todolist .done .label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -0.5rem;
  display: block;
  width: 0%;
  height: 1px;
  background: #fff;
  animation: strikeitem 0.3s ease-out 0s forwards;
}
#todolist .btn-picto {
  border: none;
  background: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: #fff;
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
