<template>
    <div 
    class="creation-form__dialog" 
    v-if="isShow" 
    @click="$emit('close')"
    >
        <form
        class="creation-form"
        @submit.prevent
        @click.stop
        >
            Dialog
            <btnComp>Send</btnComp>
        </form>
    </div>
</template>

<script>
import btnComp from './btnComp.vue';
export default {
    components: {
        btnComp
    },
    props: {
        isShow: Boolean,
    },
    emits: ['close']
}
</script>

<style>
.creation-form__dialog {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
}

.creation-form {
    background-color: white;
    padding: 1rem;
}
</style>