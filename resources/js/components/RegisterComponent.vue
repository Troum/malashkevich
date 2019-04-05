<template>
    <b-col cols="10" class="fullscreen mx-auto">
        <b-row align-v="center" align-h="center" class="fullscreen">
            <b-col cols="4">
                <b-card>
                    <b-card-body :title="$ml.get('registerForm.header')" :sub-title="$ml.get('registerForm.subHeader')">
                        <b-form id="formRegister" @submit.prevent="submit()">
                            <b-form-group :label="$ml.get('registerForm.name')" label-for="name" id="formGroupRegisterName">
                                <b-form-input id="name" type="text" v-model="credentials.name" required autocomplete="off"></b-form-input>
                            </b-form-group>
                            <b-form-group :label="$ml.get('registerForm.login')" label-for="login" id="formGroupRegisterLogin">
                                <b-form-input id="login" type="email" v-model="credentials.login" required autocomplete="off"></b-form-input>
                            </b-form-group>
                            <b-form-group :label="$ml.get('registerForm.password')" label-for="password" id="formGroupRegisterPassword">
                                <b-form-input id="password" type="password" v-model="credentials.password" required autocomplete="off"></b-form-input>
                            </b-form-group>
                            <b-form-group :label="$ml.get('registerForm.passwordConfirm')" label-for="password_confirm" id="formGroupRegisterPasswordConfirmation">
                                <b-form-input id="password_confirm" type="password" v-model="credentials.password_confirm" required autocomplete="off"></b-form-input>
                            </b-form-group>
                            <b-button class="float-right" type="submit" variant="primary" size="lg">{{ $ml.get('registerForm.submit') }}</b-button>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    import store from '../store.js';
    export default {
        data() {
            return {
                credentials: {
                    name: null,
                    login: null,
                    password: null,
                    password_confirm: null
                },
                error: false
            }
        },
        methods: {
            submit() {
                this.$axios.post('/api/auth/register', {
                    name: this.credentials.name,
                    email: this.credentials.login,
                    password: this.credentials.password,
                    password_confirmation: this.credentials.password_confirm
                }).then( response => {
                    store.commit('loginUser');
                    localStorage.setItem('token', response.data.access_token);
                    localStorage.setItem('user_id', response.data.user_id);
                    this.$router.push({ name: 'dashboard' })
                }).catch( error => {
                    this.$handler(error.response);
                });
            }
        }
    }
</script>

<style scoped>

</style>
