<template>

  <div className="container">
      <div class='card'>
            <div className="text">
                <h3>Welcome Back</h3>
                <p>Enter your credentials to access your account.</p>
            </div>
            <form @submit.prevent="submit">
                <div className="input-text">
                    <input type="text"  placeholder="Enter your email" name="username" v-model="form.username"/>
                </div>
                <div className="input-text">
                    <input type='password'  placeholder="Enter your password" name="password" v-model="form.password"/>
                </div>
                <div className="buttons">
                    <b-button type="submit">Sign In</b-button>
                </div>
            </form>
      </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = {}
      User.username = this.form.username;
      User.password = this.form.password;
      try {
          await this.LogIn(User);
          this.$router.push("/");
          this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>

<style scoped>
 
* {
    width: 400px;
    box-sizing: border-box;
    margin: auto auto;
}

.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
}

.card {
    height: 380px;
    width: 450px;
    background-color: #fff;
    position: relative;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    padding: 20px;
    margin-top: 50px;
}

.text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.text p {
    font-size: 13px;
    color: #bac4d4;
    font-weight: 700;
}

.input-text {
    position: relative;
    margin-top: 30px;
}

input[type="text"] {
    height: 45px;
    width: 100%;
    border: none;
    border-radius: 9px;
    border: 1px solid #e0e3e9;
    padding: 0 10px;
    padding-left: 30px;
    outline: 0;
    font-size: 13px;
    margin-bottom: 5px;
}

input[type="password"] {
    height: 45px;
    width: 100%;
    border: none;
    border-radius: 9px;
    border: 1px solid #e0e3e9;
    padding: 0 10px;
    padding-left: 30px;
    padding-right: 27px;
    outline: 0;
    margin-bottom: 5px;
}

.fa-envelope {
    position: absolute;
    left: 10px;
    cursor: pointer;
    top: 15px
}

.fa-lock {
    position: absolute;
    left: 12px;
    top: 15px;
    cursor: pointer;
    font-size: 15px
}

.input-text .fa-eye-slash {
    position: absolute;
    right: 10px;
    top: 15px;
    font-size: 15px;
    cursor: pointer
}

.fa-eye {
    position: absolute;
    right: 10px;
    top: 15px;
    font-size: 15px;
    cursor: pointer
}

.buttons {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center
}

.buttons button {
    height: 45px;
    width: 100%;
    border: none;
    background-color: #267fff;
    border-radius: 9px;
    font-size: 12px;
    outline: 0;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s
}

.buttons button:hover {
    background-color: #083c87
}

.forgot {
    margin-top: 30px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center
}

.forgot a {
    text-decoration: none
}

.warning {
    border: 1px solid red !important
}

.type_password {
    border: 1px solid red !important
}
</style>