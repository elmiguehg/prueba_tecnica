<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand"><h2>Dashboard</h2></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink :to="{ name: 'users' }" class="nav-link active" aria-current="page">
              <v-icon name="co-user" inverse="true" scale="1.3" />
              Usuarios</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'role' }" class="nav-link active" aria-current="page">
              <v-icon name="bi-person-rolodex" inverse="true" scale="1.4" />
              Roles</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'statistics' }" class="nav-link active" aria-current="page">
              <v-icon name="md-bordercolor-outlined" inverse="true" scale="1.3" />
              Estadística</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scope></style>
