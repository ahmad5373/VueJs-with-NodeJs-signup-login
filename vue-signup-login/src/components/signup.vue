<template>
    <div class="vue-template">
        <form>
            <h3>Sign Up</h3>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control form-control-lg" placeholder="First Name" v-model="form.first_name" />
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control form-control-lg" placeholder="Last Name" v-model="form.last_name" />
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" placeholder="Email Address" v-model="form.email" />
            </div>
            <div class="form-group">
                <label>Phone no</label>
                <input type="text" class="form-control form-control-lg" placeholder="Phone No" v-model="form.phone" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" placeholder="Password"
                    v-model="form.password" />
            </div>
            <button type="button" class="btn btn-dark btn-lg btn-block" v-on:click="saveUser">Sign Up</button>
            <p class="forgot-password text-right">
                Already registered
                <router-link :to="{ name: 'login' }">sign in?</router-link>
            </p>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'signup',
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                password: ''
            }
        }
    },
    methods: {
        async saveUser() {
       const formdata = {
                first_name: this.form.first_name,
                last_name: this.form.last_name,
                email: this.form.email,
                phone: this.form.phone,
                password: this.form.password
            }
            console.log('this.form', formdata)
            try {
                const response = await axios.post('http://localhost:3000/user/signup', formdata,
                );
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        }
    },
}
</script>