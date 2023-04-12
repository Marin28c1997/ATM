<template>
  <button class="btn btn-pink" v-if="value">{{ formatterPeso }}</button>
  <button @click="$emit('showOtherValue')" class="btn btn-pink" v-else>{{ other }}</button>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
    },

    other: {
      type: String,
    },
  },

  computed: {
    formatterPeso() {
      const formatter = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      });

      return formatter.format(this.value);
    },
  },
};
</script>

<style scoped>
.btn-pink {
  background-color: #f23078;
  border: none;
  border: 3px solid transparent;
  color: #f2f2f2;
  border-radius: 20px;
  margin: 20px;
  padding: 16px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  font-size: 20px;
}

.btn-pink:hover {
  background-color: transparent;
  border: 3px solid #f23078;
  color: #f23078;
}
</style>
