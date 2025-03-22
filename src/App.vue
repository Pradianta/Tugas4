<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, onUpdated } from 'vue'

const DataPrangkat = ref([
  { nama: 'laptop', daya: 150 },
  { nama: 'handphone', daya: 100 },
  { nama: 'lampu', daya: 60 }
])


const TotalDaya = computed(() => {
  return DataPrangkat.value.reduce((sum, item) => sum + item.daya, 0)
})

const logPesan = ref('')
const pesanLifecycle = ref('')

watch(DataPrangkat, () => {
  logPesan.value = 'Data Perangkat telah berubah'
}, { deep: true })


const dayaBaru = ref('')


function UbahDayaLaptop() {
  if (dayaBaru.value && !isNaN(dayaBaru.value)) {
    DataPrangkat.value[0].daya = parseInt(dayaBaru.value)
    dayaBaru.value = ''
  }
}


onMounted(() => {
  pesanLifecycle.value = 'Komponen berhasil dimount ke DOM'
})

onUpdated(() => {
  pesanLifecycle.value = 'Komponen telah diupdate (ada perubahan data)'
})

onBeforeUnmount(() => {
  console.log('Komponen akan dihancurkan')
})
</script>

<template>
  <div id="app">
    <h1>Data Perangkat</h1>

    
    <ul>
      <li v-for="(item, index) in DataPrangkat" :key="index">
        {{ item.nama }} memiliki daya {{ item.daya }} 
      </li>
    </ul>

    <h3>Total Daya Keseluruhan: {{ TotalDaya }}</h3>

    <div>
      <h4>Masukkan Daya Baru untuk Laptop:</h4>
      <input
        type="number"
        v-model="dayaBaru"
        placeholder="contoh: 250"
      />
      <button @click="UbahDayaLaptop" class="button">Ubah Daya Laptop</button>
    </div>

    
    <p v-if="logPesan">{{ logPesan }}</p>

    
    <p>{{ pesanLifecycle }}</p>
  </div>
</template>

<style scoped>
.button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
input {
  padding: 5px;
  margin-right: 8px;
}
</style>
