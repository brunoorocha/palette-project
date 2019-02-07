<template>
  <div class="drop-down form-input">
    <label for="" class="title-3">{{ label }}</label>
    <select name="" id="" @change="handleSelectChanges">
      <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
    </select>
    <chevron-down-icon class="dropdown-arrow" />
  </div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
  name: 'drop-down',

  data: function () {
    return {
      value: null
    }
  },

  props: {
    label: String,
    options: Array
  },

  watch: {
    value: function () {
      this.$emit('input', this.value)
    }
  },

  components: {
    ChevronDownIcon
  },

  methods: {
    handleSelectChanges: function (event) {
      this.value = event.target.value
    }
  },

  mounted: function () {
    this.value = this.options[0]
  }
}
</script>

<style>

.drop-down select {
  border: none;
  background: #f0f0f0;
  padding: 12px;
  font-size: 16px;
  margin-top: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.drop-down .dropdown-arrow {
  width: 16px;
  height: 16px;
  position: relative;
  left: calc(100% - 28px);
  top: -28px;
}

</style>
