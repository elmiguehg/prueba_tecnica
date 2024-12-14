<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue';
import { ref, onMounted } from 'vue';
import { Bar, Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const users = ref([]);
const roles = ref([]);
const chartData = ref([]);
const chartOptions = ref([]);
const colors = ref([]);
const load = ref(false);

const random = () => {
    return Math.floor(Math.random() * 256);
}

onMounted(async () => {
    const info = await axios.get('/usersbyrole');
    info.data.map((row) => (
        roles.value.push(row.role),
        users.value.push(row.count),
        colors.value.push("rgb(" + random() + "," + random() + "," + random() + ")")
    ));
    chartOptions.value = { responsive: true }
    chartData.value = {
        labels: roles.value,
        datasets: [
            { label: 'Usuarios por Rol', data: users.value, backgroundColor: colors }
        ]
    };
    load.value = true;
})
</script>

<template>
    <MainLayout />
    <div class="row mt-5 justify-content-center">
        <div class="card border border-white text-center" v-if="!load">
            <div class="card-body">
                <img src="/loading.gif" class="img-fluid">
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-md-8 offset-md-2">
                <Bar v-if="load" :data="chartData" :options="chartOptions"></Bar>
            </div>
        </div>
    </div>
</template>