<template>
  <div class="container">
    <n-row :gutter="0">
      <n-col :span="7">
        <div class="light-green">
          <div class="input-container">
            <n-space vertical>
              <h3>
                Bienvenido a VivaBanco
                <p>Número {{Número}}</p>
              </h3>

              <div class="imgs1">
                <img
                   v-if="!contrasena && showImage"
                  src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/null/external-keyboard-digital-marketing-xnimrodx-lineal-color-xnimrodx.png"
                />
                <img
                  class="imgs2"
                  v-if="contrasena && showImages"
                  src="https://img.icons8.com/cute-clipart/64/null/lock.png"
                />
              </div>
              <input
                type="number"
                placeholder="Documento"
                :maxlength="10"
                :minlength="6"
                v-model="documento"
              />
              <input
                placeholder="Contraseña"
                type="password"
                :maxlength="4"
                v-model="contrasena"
              />
            </n-space>
          </div>
        </div>
      </n-col>
      <n-col :span="8">
        <div class="green">
          <div class="botones-container">
            <button
              v-for="numero in numeros"
              :key="numero"
              @click="addDigit(numero)"
            >
              {{ numero }}
            </button>
            <button class="delet" @click="deleteDigit()">Borrar</button>
            <button class="go" @click="go()">Continuar</button>
          </div>
        </div>
      </n-col>
    </n-row>
  </div>
</template>



<script>
export default {
  data() {
    return {
      documento: "",
      contrasena: "",
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      showImage:false,
      showImages:false


};
  },
  mounted() {
      window.addEventListener('keydown', (event) => {
    if (isNaN(parseInt(event.key))) {
      event.preventDefault();
    }
  });
    document.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown(event) {
      const keyCode = event.keyCode || event.which;
      if (keyCode >= 96 && keyCode <= 105) {
        event.preventDefault();
        // Aquí puedes llamar a tu función addDigit() con el número correspondiente al código de tecla presionado
      }
    },
    addDigit(numero) {
      if (this.documento.length < 10) {
        this.documento += numero.toString();
     if (this.documento.length === 1) {
          this.showImage = true;
        }
      } else if (this.contrasena.length < 4) {
        this.contrasena += numero.toString();
        if (this.contrasena.length === 1) {
          this.showImages = true;
        }
      }
    },
    deleteDigit() {
      if (this.contrasena.length > 0) {
        this.contrasena = this.contrasena.slice(0, -1);
      } else {
        this.documento = this.documento.slice(0, -1);
      }
    },
    go() {
  if (this.contrasena.length < 4 || this.documento.length < 10) {
    alert("La contraseña debe tener al menos 4 caracteres y el número debe tener al menos 10 dígitos");
  } else {
    // Continúa con la lógica normal
    console.log("Continuar");
  }
}

  },
};
</script>

<style>
.input-container {
  margin-bottom: 20px;
}

.botones-container {
display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1%;
    justify-items: center;
    align-items: center;
}

button {
  margin: 0;
  font-size: 18px;
  border: 1px solid #F23078;
  border-radius: 100px;
  background-color:transparent;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: auto;
  color: #F23078;
  margin-top: 5px;

}

button:hover {
  background-color: #32d9d9;
}

.delet:hover{
  background-color: #fff;
}

.go:hover{
  background-color: rgba(41, 39, 142, 0.8);
}

.light-green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgb(19, 18, 64, 0.9);
}
.green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgb(19, 18, 64, 0.9);
}

h3{
  color: #F23078;
  margin-bottom: -4%;
}

input{
  width: 100%;
  color: #32d9d9;
  border-radius: 4px;
  background-color:  rgba(41, 39, 142, 0.8);
}

::placeholder{
  color: #F23078;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;

}
.imgs1{
  margin-left: 88%;
  position: absolute;
  top: 1.2%;
  margin-top: 26%;
  z-index: 1;
}
.imgs2{
  margin-left: -100%;
  position: absolute;
  top: 1.2%;
  margin-top: 16%;
  z-index: 1;
}

@media screen and (max-width: 1024px) {
  .container {
    max-width: 100%;
    margin-top: 2%;
  }
  .light-green,
  .green {
    height: auto;
  }
}

</style>
