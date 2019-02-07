<template>
  <div class="code-auth-modal" v-if="isVisible">
    <div class="mask-layer">
      <div class="modal">
        <header>
          <h1>Código de confirmação</h1>
          <p>Por favor, informe abaixo o código de 6 dígitos que enviamos para seu celular:</p>
        </header>

        <section class="code-dial">
          <form action="">
            <div class="dial-grid">
              <input type="text" id="input-code-1" maxlength="1" @input="handleCodeInput" />
              <input type="text" id="input-code-2" maxlength="1" @input="handleCodeInput" />
              <input type="text" id="input-code-3" maxlength="1" @input="handleCodeInput" />
              <span class="separator">-</span>
              <input type="text" id="input-code-4" maxlength="1" @input="handleCodeInput" />
              <input type="text" id="input-code-5" maxlength="1" @input="handleCodeInput" />
              <input type="text" id="input-code-6" maxlength="1" @input="handleCodeInput" />
            </div>
          </form>
        </section>

        <footer>
          <button class="confirm-button">Verificar</button>
          <button class="cancel-button" @click="handleCancelButtonClick">Cancelar</button>
        </footer>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'code-auth-modal',

  data: function () {
    return {
      currentInputCount: 1,
      isVisible: false,
      codeTyped: ''
    }
  },

  methods: {
    handleCodeInput: function (evt) {
      const inputValue = evt.target.value

      if (evt.target.value !== '' && this.currentInputCount < 6) {
        const nextInput = this.currentInputCount + 1
        const nextInputId = 'input-code-' + nextInput
        document.getElementById(nextInputId).focus()
        this.currentInputCount = nextInput
        this.codeTyped += inputValue
      } else if (evt.target.value === '' && this.currentInputCount > 1) {
        const nextInput = this.currentInputCount - 1
        const nextInputId = 'input-code-' + nextInput
        document.getElementById(nextInputId).focus()
        this.currentInputCount = nextInput
      }
    },

    handleCancelButtonClick: function (evt) {
      this.isVisible = false
    },

    handleVerifyButtonClick: function (evt) {
      this.isVisible = false
    }
  },

  mounted: function () {
    document.getElementById('input-code-1').focus()
  }
}
</script>

<style>
.code-auth-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: hidden;
}

.code-auth-modal .mask-layer {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.code-auth-modal .modal {
  display: flex;
  flex-direction: column;
  width: calc(100% - 32px);
  max-width: 480px;
  background-color: #ffffff;
  margin-top: -20vh;
  border-radius: 4px;
  overflow: hidden;
}

.code-auth-modal .modal header {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
}

.code-auth-modal .modal header h1 {
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 16px;
}

.code-auth-modal .modal header p {
  font-weight: 300;
  font-size: 20px;
  text-align: center;
}

.code-auth-modal .modal section.code-dial {
  display: flex;
  justify-content: center;
  padding: 0px 16px 16px 16px;
}

.code-auth-modal .modal section.code-dial .dial-grid {
  display: grid;
  grid-template-columns: 36px 36px 36px 28px 36px 36px 36px ;
  grid-column-gap: 8px;
  max-width: 480px;
}

.code-auth-modal .modal section.code-dial input,
.code-auth-modal .modal section.code-dial .dial-grid .separator  {
  font-size: 24px;
  padding: 4px;
  text-align: center;
}

.code-auth-modal .modal section.code-dial input {
  border: 1px solid #cccccc;
  border-radius: 4px;
}

.modal footer {
  display: flex;
  flex-direction: row-reverse;
  padding: 16px;
}

.modal footer .confirm-button,
.modal footer .cancel-button {
  background-color: #ffffff;
  font-size: 16px;
  border-radius: 4px;
  padding: 8px 16px;
}

.modal footer .cancel-button {
  color: #7f8c8d;
  border: 1px solid #ffffff;
  margin-right: 8px;
  transition: .3s ease-out;
}

.modal footer .cancel-button:hover {
  border: 1px solid #7f8c8d;
}

.modal footer .confirm-button {
  color: #27ae60;
  border: 1px solid #27ae60;
  transition: .3s ease-out;
}

.modal footer .confirm-button:hover {
  color: #ffffff;
  background-color: #27ae60;
}

@media only screen and (max-width: 540px) {

  .code-auth-modal .modal section.code-dial .dial-grid {
    grid-template-columns: 32px 32px 32px 16px 32px 32px 32px ;
  }

  .code-auth-modal .modal section.code-dial input,
  .code-auth-modal .modal section.code-dial .dial-grid .separator  {
    font-size: 20px;
    padding: 4px;
    text-align: center;
  }

  .code-auth-modal .modal header h1,
  .code-auth-modal .modal header p {
    font-size: 16px;
  }
}

@media only screen and (max-height: 500px) {
  .code-auth-modal .modal {
    margin-top: -10vh;
  }
}

</style>
