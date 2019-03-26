<template>
    <b-row align-v="center" align-h="center" class="fullscreen w-100">
        <b-col cols="8">
            <b-card :title="$ml.get('create.title')" >
                <b-form>
                    <b-form-file class="my-2"
                            v-model="photos"
                            :state="Boolean(photos)"
                            :placeholder="$ml.get('create.placeholder')"
                            :drop-placeholder="$ml.get('create.drag')"
                            accept=".jpg, .jpeg, .png"
                            :browse-text="$ml.get('create.browse')"
                            multiple
                    />
                    <b-form-group class="my-2 text-right">
                        <b-button type="submit">{{ $ml.get('create.submit') }}</b-button>
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
                photos: []
            }
        }
    }
</script>
