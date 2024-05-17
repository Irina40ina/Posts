<template>
   <Transition>
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
                <inputComp class="input-title" v-model="title" :placeholder="'Title'"></inputComp>
                <textareaComp class="input-body" v-model="body" :placeholder="'Body'"></textareaComp>
            </div>
            <div class="form-actions">
                <btnComp @click="handlerCreation" style="margin-right: 0.5rem;">Создать</btnComp>
                <btnComp @click="$emit('close')">Закрыть</btnComp>
            </div>

        </form>
    </div>
    </Transition>
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

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
    height: 15%;
    background-color: rgb(57, 142, 142);
    padding-top: 0.3rem;
    
}
.header-title{
    width: 100%;
    height: 10%;
    text-align: center;
}

.form-body{
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.input-title {
    width: 50%;
    height: 10%;
    margin-bottom: 0.2rem;
}

.input-body {
    width: 50%;
    height: 70%;
}

.form-actions{
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    padding: 0 1rem;
}

</style>