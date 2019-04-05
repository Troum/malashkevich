<template>
    <b-row align-v="center" align-h="center" class="fullscreen w-100">
        <b-col cols="8">
            <b-card class="z-depth-1-half rounded-0" :title="$ml.get('create.title')" >
                <b-form @submit.prevent="uploadPhoto()">
                    <b-progress v-if="uploadProgress">
                        <b-progress-bar :value="uploadProgress" :label="`Загрузка и сохранение... ${uploadProgress.toFixed(0)}%`"></b-progress-bar>
                    </b-progress>
                    <b-form-file class="my-2"
                                 :state="state"
                                 :placeholder="$ml.get('create.placeholder')"
                                 :drop-placeholder="$ml.get('create.drag')"
                                 accept=".jpg, .jpeg, .png"
                                 :browse-text="$ml.get('create.browse')"
                                 @change="addPhotos"
                                 multiple
                    />
                    <b-form-group class="my-2 text-right">
                        <b-button class="rounded-0 z-depth-1" type="submit">{{ $ml.get('create.submit') }}</b-button>
                    </b-form-group>
                </b-form>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        data() {
            return {
                state: false,
                fd: new FormData(),
                uploadProgress: 0
            }
        },
        methods: {
            addPhotos(event) {
                for(let i = 0; i < event.target.files.length; i++) {
                    this.fd.append('photos[]', event.target.files[i]);
                }
                if (event.target.files.length === 1) {
                    document.querySelector('.custom-file-label').innerHTML = '<span class="badge badge-dark">' + event.target.files[0].name + '</span>';
                } else if (event.target.files.length === 2 || event.target.files.length === 3 || event.target.files.length === 4) {
                    document.querySelector('.custom-file-label').innerHTML = '<span class="badge badge-dark">будет загружено ' + event.target.files.length + ' файла</span>';
                } else if (event.target.files.length >= 5) {
                    document.querySelector('.custom-file-label').innerHTML = '<span class="badge badge-dark">будет загружено ' + event.target.files.length + ' файлов</span>';
                }
                this.state = true;

            },
            uploadPhoto() {
                this.$axios.post('/api/photos', this.fd, {
                    onUploadProgress: progressEvent => {
                        this.uploadProgress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total ));
                    }
                })
                    .then(response => {
                        this.$handler(response);
                        this.state = false;
                        document.querySelector('.custom-file-label').innerHTML = this.$ml.get('create.placeholder');
                        this.uploadProgress = 0;
                    })
                    .catch(error => {
                        this.$handler(error.response);
                    })
            }
        }
    }
</script>
