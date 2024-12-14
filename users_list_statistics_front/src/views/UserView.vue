<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue';
import axios from 'axios';
import Paginate from 'vuejs-paginate-next';
import { ref, onMounted } from 'vue';
onMounted(() => { getUsers(1) });
const users = ref([]);
const load = ref(false);
const rows = ref(0);
const getUsers = async (page) => {
    await axios.get('/users?page='+page).then(
        response => (
            users.value = response.data,
            rows.value = response.data.last_page
        ));
    load.value = true;
}
</script>

<template>
    <MainLayout />
    <div class="row mt-5 justify-content-center">
        <div class="col-md-8">
            <div class="card border border-white text-center" v-if="!load">
                <div class="card-body">
                    <img src="/loading.gif" class="img-fluid">
                </div>
            </div>
            <div class="table-responsive text-center" v-else>
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
                        <tr v-for="user, i in users.data" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.role }}</td>
                        </tr>
                    </tbody>
                </table>
                <Paginate :page-count="rows" :click-handler="getUsers" :prev-text="'Anterior'" :next-text="'Siguiente'"
                    :container-class="'pagination'">
                </Paginate>
            </div>
        </div>
    </div>
</template>