<template>
<div class="container">
  <n-grid cols="2" item-responsive>
    <n-grid-item>
      <div class="light-green">
        <div class="input-container">
          <n-space vertical>
            <h2>Bienvenido al cajero</h2>
            <input
              type="number"
              placeholder="Documento"
              :maxlength="10"
              v-model="documento"
            />
            <input
              placeholder="Contraseña"
              type="password"
              :maxlength="6"
              v-model="contrasena"
            />
          </n-space>
        </div>
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        <div class="botones-container">
          <button
            v-for="numero in numeros"
            :key="numero"
            @click="addDigit(numero)"
            
          >
            {{ numero }}
          </button>
          <button @click="deleteDigit()">Borrar</button>
          <button @click="go()">Continuar</button>
        </div>
      </div>
    </n-grid-item>
  </n-grid>
</div>
</template>

<script>
export default {
  data() {
    return {
      documento: "",
      contrasena: "",
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      showImage:false
    };
  },
  methods: {
    addDigit(numero) {
      if (this.documento.length < 10) {
        this.documento += numero.toString();
       
      } else {
        this.contrasena += numero.toString();
      }
    },
    deleteDigit() {
      if (this.contrasena.length > 0) {
        this.contrasena = this.contrasena.slice(0, -1);
      } else {
        this.documento = this.documento.slice(0, -1);
      }
    },
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
  background-color: #ddd;
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

h2{
  color: #F23078;
}

input{
  width: 100%;
  color: #F23078;
  border-radius: 4px;
  background-color:  rgba(41, 39, 142, 0.8);
}

::placeholder{
  color: #F23078;
}

.container{
  width: 150%;
}

</style>
