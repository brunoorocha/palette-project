<template>
  <div class="search-bar" :class="{'search-bar-active': isFocused}">
    <label for="search-field">
      <search-icon class="icon" />
      <input
        type="search"
        id="search-field"
        placeholder="Digite sua pesquisa aqui..."
        v-on:focus="handleFieldFocus"
        v-on:blur="handleFieldBlur" />
    </label>
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  name: 'search-bar',

  data () {
    return {
      isFocused: false
    }
  },

  components: {
    SearchIcon
  },

  methods: {
    handleFieldFocus: function (event) {
      this.isFocused = true
    },

    handleFieldBlur: function (event) {
      if (event.target.value === '') {
        this.isFocused = false
      }
    }
  }
}
</script>

<style>

.search-bar {
  display: flex;
}

.search-bar label {
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 56px;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  -moz-transition: .3s ease-out;
  transition: .3s ease-out;
}

.search-bar-active label,
.search-bar:hover label {
  border-bottom: 2px solid #333333;
}

.search-bar .icon {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

#search-field {
  width: 0px;
  border: none;
  outline: none;
  font-size: 16px;
  transition: .1s ease-out;
}

#search-field::-webkit-search-cancel-button {
  appearance: none;
}

.search-bar-active #search-field {
  width: 240px;
  margin-left: 8px;
}

</style>
