<template>
    <div 
    class="creation-form__dialog" 
    v-if="$props.isShow" 
    @click="$emit('close')"
    >
        <form
        class="creation-form"
        @submit.prevent
        @click.stop
        >
            <header class="form-header">
                <h2 class="header-title">Создание поста</h2>
            </header>
            <div class="form-body">
                <inputComp v-model="title" :placeholder="'Title'"></inputComp>
                <inputComp v-model="body" :placeholder="'Body'"></inputComp>
            </div>
            <div class="form-actions">
                <btnComp @click="handlerCreation" style="margin-right: 0.5rem;">Создать</btnComp>
                <btnComp>Закрыть</btnComp>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            body: "",
        }
    },
    props: {
        isShow: Boolean,
    },
    emits: ['close', 'createPost'],
    methods: {
        handlerCreation() {
            this.$emit('createPost', { title: this.title, body: this.body });
            this.title = "";
            this.body = "";
        }
    }
}
</script>

<style scoped>
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
    width: 500px;
    height: 50vh;
    background-color: white;
    box-shadow: var(--shadow);
    border-radius: 5px;
    overflow: hidden;
}
.form-header{
    width: 100%;
    height: 10%;
    border: 1px solid black;
    
}
.header-title{
    width: 100%;
    height: 10%;
}

.form-body{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.form-actions{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    padding: 0 1rem;
    border: 1px solid black;
}

</style>