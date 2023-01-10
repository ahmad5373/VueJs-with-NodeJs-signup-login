<template>
    <div class="vue-template">
        <form>
            <h2>Sign In</h2>
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" class="form-control form-control-lg" placeholder="Email Address" v-model="form.email" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" placeholder="Password" v-model="form.password" />
                <button type="button" class="btn btn-dark btn-lg btn-block" v-on:click="Login">Sign In</button>
                <div class="social-icon">
                    <ul>
                        <li><a href="#"><i class="fa fa-google"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <router-link class="mx-3" to="/signup">Signup</router-link>
                <router-link to="/forgot-password">forgot-password</router-link>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'login',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        Login() {
            const logindata ={
                email: this.form.email,
                password: this.form.password
            }
            console.log('this.form',logindata)

            axios.post('http://localhost:3000/user/login', logindata)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }
}
</script>