<template>
    <Transition name="animation">
    <div 
    class="deletion-container"
    @click="$emit('close')"
    v-if="$props.isShow"
    >
        <div 
        class="deletion-window" 
        @submit.prevent
        @click.stop
        >
            <div class="deletion-window-header">
                <p>Хотите удалить пост?</p>
                
            </div>
            <div class="deletion-window-actions">
                <btnComp class="deletion-actions-btn" @click="$emit('deletePost')">Да</btnComp>
                <btnComp class="deletion-actions-btn" @click="$emit('close')">Нет</btnComp>
            </div>
        </div>
    </div>
    </Transition>
</template>


<script>
export default {
    props: {
        isShow: {
            type: Boolean,
            default: false,
            required: true,
        },
        postData: {
            type: Object,
        }
    },
    emits: ['close', 'deletePost'],
}
</script>


<style scoped>
    .animation-enter-active,
    .animation-leave-active {
    transition: opacity 0.5s ease;
    }
    .animation-enter-from,
    .animation-leave-to {
    opacity: 0;
    }
    .deletion-container{
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
    .deletion-window{
        position: relative;
        width: 400px;
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: var(--shadow);
        border-radius: 5px;
        overflow: hidden; 
    }
    .deletion-window-header {
        margin-bottom: .5rem;
    }
    .deletion-window-header p {
        font-size: 25px;
    }
    .deletion-window-actions{
        display: flex;
        align-items: center;
    }
    .deletion-actions-btn{
        margin: .5rem;
    }

</style>