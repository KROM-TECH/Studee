<template>
  <div class="rating">
    <!--elements are in reversed order, to allow "previous sibling selectors" in CSS-->
    <input
      type="radio"
      name="rating"
      value="5"
      id="5"
      :disabled="selected == 5"
    /><label for="5">☆</label>
    <input
      type="radio"
      name="rating"
      value="4"
      id="4"
      :disabled="selected == 4"
    /><label for="4">☆</label>
    <input
      type="radio"
      name="rating"
      value="3"
      id="3"
      :disabled="selected == 3"
    /><label for="3">☆</label>
    <input
      type="radio"
      name="rating"
      value="2"
      id="2"
      :disabled="selected == 2"
    /><label for="2">☆</label>
    <input
      type="radio"
      name="rating"
      value="1"
      id="1"
      :disabled="selected == 1"
    /><label for="1">☆</label>
  </div>
</template>

<script>
export default {
  props: ["selected"],
  created() {
    console.log(this.selected);
    console.log(typeof this.selected);
  }
};
</script>

<style scoped>
.rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

/*hides the radio buttons*/
.rating > input {
  display: none;
}

/*style the empty stars, sets position:relative as base for pseudo-elements*/
.rating > label {
  position: relative;
  overflow: hidden;
  width: 1.1em;
  font-size: 20px;
  color: #6c63ff;
  cursor: pointer;
}

/* sets filled star pseudo-elements */
.rating > label::before {
  content: "\2605";
  position: absolute;
  opacity: 0;
}
/*overlays a filled start character to the hovered element and all previous siblings*/
/* .rating > label:hover:before,
.rating > label:hover ~ label:before {
  opacity: 1 !important;
} */

/*overlays a filled start character on the selected element and all previous siblings*/
/* .rating > input:checked ~ label:before {
  opacity: 1;
} */
.rating > input:disabled ~ label:before {
  opacity: 1;
}

/*when an element is selected and pointer re-enters the rating container, selected rate and siblings get semi transparent, as reminder of current selection*/
/* .rating:hover > input:checked ~ label:before {
  opacity: 0.4;
} */
</style>
