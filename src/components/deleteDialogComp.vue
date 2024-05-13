<template>
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
                <btnComp @click="$emit('deletePost')">Да</btnComp>
                <btnComp @click="$emit('close')">Нет</btnComp>
            </div>
        </div>
    </div>
</template>


<script>
import btnComp from '@/components/btnComp.vue'
export default {
    components: {
        btnComp,
    },
    props: {
        isShow: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    emits: ['close', 'deletePost'],
}
</script>


<style scoped>
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
        width: 500px;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: var(--shadow);
        border-radius: 5px;
        overflow: hidden; 
    }
    .deletion-window-actions{
        display: flex;
        align-items: center;
    }

</style>