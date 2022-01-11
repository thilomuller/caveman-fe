<template>
    <div class="header">
        <span v-if="isLoggedIn" class='menu_button'><b-button v-b-toggle.menu-sidebar size="sm">
            <b-icon-list></b-icon-list></b-button>
        </span> 
        <span class='header_name'> Caveman </span> 
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        name: 'Header',
        computed : {
            isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
        },
        methods: {
            ...mapActions(["LogOut"]),
            async login() {
                this.$router.push({ name: 'login'})
            },
            async logout() {
                try{
                    await this.LogOut();
                } catch (e) {
                    console.log(e)
                }
                this.$router.push({ name: 'login'});
            },
            async home() {
                try{
                    this.$router.push("/caves");
                } catch (e) {
                    console.log(e)
                }
            },

        },
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