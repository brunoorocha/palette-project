<template>
  <div class="login">
    <default-page title="Login">

      <div class="page-content">
        <div class="page-row">
          <h1>Login</h1>
        </div>
      </div>

    </default-page>

    <code-auth-modal />
  </div>
</template>

<script>
import DefaultPage from '@/components/shared/default-page'
import CodeAuthModal from '@/components/shared/code-auth-modal'

export default {
  name: 'login',

  components: {
    DefaultPage,
    CodeAuthModal
  }
}
</script>
