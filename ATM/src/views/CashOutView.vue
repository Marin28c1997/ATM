<template>
  <div class="main">
    <div class="container text-center mx-auto">
      <h1 class="fw-bold py-3 text-start">VivaBanco</h1>
    </div>
    <div class="row d-flex justify-content-center align items-center" v-if="!isShow">
      <h2 class="fw-light pb-3 text-center">Selecciona el valor a retirar</h2>
      <ButtonOut
        @setValue="cashOut"
        v-for="value in values"
        :key="value"
        :value="value"
        class="col-5"
      />
      <ButtonOut @showOtherValue="otherValue" :other="other" class="col-5" />
    </div>
    <div class="container" v-else>
      <h2 class="text-center mb-3">
        Digita el monto a retirar <br />
        en múltiplos de $10.000
      </h2>
      <h3 class="text-center fw-light">(Mín. $10.000, Máx. $720.000)</h3>
      <div class="container mx-auto d-flex justify-content-center align-items-center">
        <span class="sign">$</span>
        <input
          type="number"
          class="form-control custom-input-number my-5"
          v-model.number="newValue"
          @keydown="preventMinusSign"
          autofocus
          placeholder="0"
        />
      </div>
    </div>
    <audio ref="audioPlayer">
      <source src="../assets/audio/sound-keys.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    ButtonOut: defineAsyncComponent(() => import("@/components/ButtonOut.vue")),
  },

  data() {
    return {
      values: [10000, 20000, 50000, 100000, 200000, 300000, 400000, 500000, 600000],
      other: "Solicitar valor diferente",
      isShow: false,
      newValue: null,
    };
  },

  methods: {
    otherValue() {
      this.$refs.audioPlayer.play();
      this.isShow = true;
    },

    async preventMinusSign(e) {
      setTimeout(() => {
        this.$refs.audioPlayer.play();
      }, 320);

      const formatNumber = Number(e.key);

      if (e.key !== "0" && !Number(formatNumber) && e.key !== "Backspace") {
        e.preventDefault();
      }
    },

    cashOut() {
      console.log("esperando backend");
      this.$refs.audioPlayer.play();
    },
  },

  watch: {
    newValue(value, oldValue) {
      if (value < 0) {
        return (this.newValue = 0);
      }
      if (value > 720000) {
        return (this.newValue = 720000);
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif !important;
  font-weight: 400;
}
.main {
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  max-height: 768px;
  color: #f2f2f2;
  background-color: #131240;
  overflow: hidden;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.sign,
.custom-input-number {
  background-color: #f2f2f2;
  color: #131240;
  border: none;
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  caret-color: transparent;
  transition: ease-in-out;
}

.custom-input-number::placeholder {
  color: #131240;
}

.custom-input-number:focus {
  outline: solid #78778c;
  border: none;
}

.sign {
  position: relative;
  left: 100px;
}
</style>
