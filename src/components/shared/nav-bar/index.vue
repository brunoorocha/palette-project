<template>
  <div class="nav-bar">
    <div class="nav-bar-section">
      <div class="nav-item nav-item-left">
        <router-link to="/"><h1>Palette Store</h1></router-link>
      </div>

      <div class="nav-item nav-item-right">
        <div class="nav-links">
          <router-link to="login">login</router-link>
          <router-link to="cart">
            <shopping-cart-icon class="icon" />
            <div v-if="cart_badge" class="badge"></div>
          </router-link>
          <search-bar />
        </div>
      </div>
    </div>

    <div class="nav-bar-section nav-bar-section-bottom">
      <div class="nav-item nav-item-centered">
        <div class="nav-links">
          <router-link v-for="(category, index) in categories" :key="index" :to="category.link">
            {{ category.name }} <chevron-down-icon v-if="category.sub_categories" class="icon icon-dropdown" />

            <div v-if="category.sub_categories" class="nav-bar-subsection">
              <div class="nav-item nav-item-centered">
                <div class="nav-links">
                  <router-link v-for="(subcategory, index) in category.sub_categories" :key="index" :to="subcategory.link">
                    {{ subcategory.name }}
                  </router-link>
                </div>
              </div>
            </div>

          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ShoppingCartIcon, ChevronDownIcon } from 'vue-feather-icons'
import SearchBar from '../search-bar'

export default {
  name: 'nav-bar',

  props: {
    categories: Array,
    cart_badge: Boolean
  },

  components: {
    ShoppingCartIcon,
    ChevronDownIcon,
    SearchBar
  }
}
</script>

<style>
.nav-bar {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: #ffffff;
}

.nav-bar .nav-bar-section {
  display: flex;
  flex-grow: 1;
  padding: 0px 16px;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  height: 56px;
}

.nav-bar .nav-bar-section .nav-bar-subsection {
  position: absolute;
  left: 0;
  margin-top: 51px;
  width: 100vw;
  height: 42;
  border-bottom: 1px solid #efefef;
  display: none;
  background-color: #ffffff;
}

.nav-bar .nav-item {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
}

.nav-bar .nav-item-centered {
  justify-content: center;
}

.nav-bar .nav-item-left h1 {
  font-size: 24px;
  font-weight: 900;
  padding: 0px 16px;
  text-decoration: none;
}

.nav-bar .nav-item-right {
  display: flex;
  flex-direction: row-reverse;
}

.nav-bar .nav-links {
  display: flex;
}

.nav-bar .nav-links a {
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0px 16px;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  -moz-transition: .3s ease-out;
  transition: .3s ease-out;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
}

.nav-bar .nav-links a:hover {
  border-bottom: 2px solid #333333;
}

.nav-bar .nav-links a .badge {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #e74c3c;
  position: absolute;
  margin-left: 16px;
  margin-top: -8px;
}

.nav-bar .nav-links a:hover .nav-bar-subsection{
  display: flex;
}

.nav-bar .nav-links a .icon {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.nav-bar .nav-links a .icon-dropdown {
  margin-left: 8px;
}

.nav-bar .nav-bar-section-bottom,
.nav-bar .nav-bar-section-bottom .nav-links a  {
  height: 42px;
}

.nav-bar .nav-bar-subsection .nav-links a {
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0px 16px;
  font-size: 16px;
  text-transform: none;
  font-weight: 400;
  text-decoration: none;
  -moz-transition: .3s ease-out;
  transition: .3s ease-out;
  border-bottom: 0px;
  color: #999999;
}

.nav-bar .nav-bar-subsection .nav-links a:hover {
  color: #333333;
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  .nav-bar .nav-bar-section {
    height: 42px;
  }

  .nav-bar .nav-item-left h1 {
    font-size: 20px;
  }

  .nav-bar .nav-bar-section {
    padding: 0px;
  }
}

@media only screen and (max-width: 540px) {
  .nav-bar .nav-bar-section {
    height: 42px;
  }

  .nav-bar .nav-item-left h1 {
    font-size: 20px;
  }

  .nav-bar .nav-bar-section {
    padding: 0px;
  }
}

</style>
