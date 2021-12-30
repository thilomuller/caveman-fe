<template>
    <div class="header">
        <span class='menu_button'><b-button v-b-toggle.menu-sidebar size="sm"><b-icon-list></b-icon-list></b-button></span> <span class='header_name'> Caveman </span> 
    </div>
</template>

<script>
    export default {
        name: 'Header',
        }
</script>

<style scoped>
    .header {
        background-color: #2c3840;
        height: 50px;
        margin: 0px;
    }

    .header_name {
        font-size: 30px;
    }

    .menu_button {
        float: left;
        margin-left: 8px;
        margin-top: 8px;
    }
</style>