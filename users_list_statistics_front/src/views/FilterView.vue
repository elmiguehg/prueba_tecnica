<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue'
import SelectOption from '@/components/SelectOption.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
const roles = ref([]);
const form = ref({ rol_selected: '' });
const list_user = ref([]);
const componentKey = ref(0);
const load = ref(false);

const forceRender = () => {
    componentKey.value += 1;
}

onMounted(async () => {
    const info = await axios.get('/usersbyrole');
    info.data.map((row) => (
        roles.value.push(row.role)
    ));
})

const getUsers = async () => {
    const rol = form.value.rol_selected;
    await axios.get('/filterbyrole/' + rol).then(
        response => (
            list_user.value = response.data
        ));
    load.value = true;
    forceRender();
}

</script>

<template>
    <MainLayout />
    <form @submit.prevent="getUsers">
        <div class="row mt-5 justify-content-center">
            <div class="d-flex justify-content-center">
                <div class="mx-2">
                    <SelectOption v-model="form.rol_selected" :options="roles" class="form-select"
                        placeholder="Categoria" required>
                    </SelectOption>
                </div>
                <div class="mx-2">
                    <button class="btn btn-dark">
                        <i class="fa-solid fa-save"></i> Buscar
                    </button>
                </div>
            </div>
        </div>
    </form>
    <div class="row mt-2 justify-content-center" :key="componentKey" v-if="load">
        <div class="col-md-8">
            <div class="card border border-white text-center">
            </div>
            <div class="table-responsive text-center">
                <table class="table table-bordered table-hover col-10">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="user, i in list_user" :key="user.id">
                            <td>{{ (i + 1) }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.role }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>