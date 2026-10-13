<script setup lang="ts">
const { data: clients } = await useFetch("/api/clients");
</script>

<template>
    <h1>Клиенты</h1>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Город</th>
                <th>Профессия</th>
                <th>Возраст</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="client in clients" :key="client.id">
                <td>{{ client.id }}</td>
                <td>{{ client.firstName }}</td>
                <td>{{ client.lastName }}</td>
                <td>{{ client.city }}</td>
                <td>{{ client.profession }}</td>
                <td>{{ client.age }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
    font-family: sans-serif;
}
th,
td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    text-align: left;
}
th {
    background: #f5f5f5;
}
</style>
