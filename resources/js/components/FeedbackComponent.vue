<template>
    <b-row class="fullscreen m-0 p-0">
        <b-col cols="4" class="d-flex align-items-center bg-info">
            <b-row class="w-100" align-h="center" align-v="center">
                <b-col cols="6">
                    <h1 class="display-1 text-white">I was wondering</h1>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="8" class="d-flex align-items-center ">
            <b-row class="w-100" align-h="center" align-v="center">
                <b-col cols="12" class="my-3">
                    <h2 class="text-center text-dark">{{ $ml.get('feedbackForm.feedbackHeading') }}</h2>
                </b-col>
                <b-col cols="6">
                    <b-form @submit.prevent="send()">
                        <b-form-group id="nameGroup">
                            <b-form-input
                                    id="nameInput"
                                    type="text"
                                    v-model="feedback.name"
                                    required
                                    :placeholder="$ml.get('feedbackForm.placeholderName')" />
                        </b-form-group>
                        <b-form-group id="emailGroup">
                            <b-form-input
                                    id="emailInput"
                                    type="email"
                                    v-model="feedback.email"
                                    required
                                    :placeholder="$ml.get('feedbackForm.placeholderEmail')" />
                        </b-form-group>
                        <b-form-group id="messageGroup">
                            <b-form-textarea rows="8" id="messageTexarea" :placeholder="$ml.get('feedbackForm.placeholderMessage')" v-model="feedback.message"></b-form-textarea>
                        </b-form-group>
                        <b-form-group>
                            <b-button class="float-right" type="submit">{{ $ml.get('feedbackForm.submitButton') }}</b-button>
                        </b-form-group>
                    </b-form>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        data() {
          return {
              feedback: {
                  name: null,
                  email: null,
                  message: null
              }
          }
        },
        methods: {
            send() {

            }
        }
    }
</script>
