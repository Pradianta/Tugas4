<script setup>
    import { ref } from 'vue';

    const angka = ref();
    console.info(angka.value);

    let hasil = ref()

    let binding = ref('lowCase')
    
    function perhitungan(){
        hasil.value=eval(angka.value)
    }

    function text () {
        if (binding.value== 'lowCase') {
            binding.value='uppCase';
        } else {
            binding.value= 'lowCase';
        }
    }

</script>

<template>

    <div v-bind:class="binding">
        <input type="text" placeholder="Masukan Data" v-model="angka">
        <button v-on:click="perhitungan">Cari Hasil</button>
        <button v-if="binding=='uppCase'"v-on:click="text">ganti ukuran text lowCase</button>
        <button v-else="" v-on:click="text">ganti ukuran text uppCase</button>
        <div>input<div>{{ angka }}</div></div>
        <div>------------------------------</div>
        <div>output<div>{{ hasil }}</div></div>
    </div>

</template>

<style scoped>
    .lowCase{
        text-transform: lowercase;
    }
    .uppCase{
        text-transform: uppercase;
    }
</style>
