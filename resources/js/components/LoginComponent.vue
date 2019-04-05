<template>
    <b-col cols="10" class="fullscreen mx-auto">
        <b-row align-v="center" align-h="center" class="fullscreen">
            <b-col cols="4">
                <b-card>
                    <b-card-body :title="$ml.get('loginForm.header')" :sub-title="$ml.get('loginForm.subHeader')">
                        <b-form id="formLogin" @submit.prevent="submit()">
                            <b-form-group :label="$ml.get('loginForm.login')" label-for="login" id="formGroupLogin">
                                <b-form-input id="login" type="email" v-model="credentials.login"></b-form-input>
                            </b-form-group>
                            <b-form-group :label="$ml.get('loginForm.password')" label-for="password" id="formGroupPassword">
                                <b-form-input id="password" type="password" v-model="credentials.password"></b-form-input>
                            </b-form-group>
                            <b-button class="float-right" type="submit" variant="primary" size="lg">{{ $ml.get('loginForm.submit') }}</b-button>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    import store from  '../store.js';
    export default {
        data() {
            return {
                credentials: {
                    login: null,
                    password: null
                },
                error: false
            }
        },
        methods: {
            submit() {
                this.$axios.post('/api/auth/login', {
                    email: this.credentials.login,
                    password: this.credentials.password
                }).then(response => {
                    store.commit('loginUser');
                    localStorage.setItem('token', response.data.access_token);
                    this.$router.push({ name: 'dashboard' })
                }).catch(error => {

                });
            }
        }
    }
</script>
