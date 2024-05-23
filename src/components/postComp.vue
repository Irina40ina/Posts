<template>
    <div class="post">
        <div class="post-content">
            <p class="post-title">
                {{$props.postData.id }} {{ $props.postData.title }}
            </p>
            <p class="post-body">
                {{ $props.postData.body }}
            </p>
        </div>
        <div class="post-action">
            <btnComp @click="handlerRouterPost" style="margin-bottom: 5px">Перейти</btnComp>
            <btnComp @click="handlerOpenDialog">Открыть</btnComp>
            <btnComp @click="handlerDeleteDialog" style="margin-top: 5px">Удалить</btnComp>
        </div>
    </div>
</template>


<script>
export default {
    name: 'postComp',
    props: {
        postData: {
            type: Object,
        }
    },
    emits: ['openDialog', 'openDeleteDialog'],
    methods: {
        handlerOpenDialog() {
            this.$emit('openDialog', this.$props.postData);
        },
        handlerDeleteDialog() {
            this.$emit('openDeleteDialog', this.$props.postData);
        },
        handlerRouterPost() {
            this.$router.push({ 
                name: 'post', 
                params: { id: this.$props.postData.id }, 
            });
        },
    },
}
</script>


<style scoped>
.post {
    width: 100%;
    height: 130px;
    border: 3px solid rgba(0, 128, 128, 0.522);;
    border-radius: 4px;
    display: flex;
    margin-top: 10px;
}

.post-content {
    width: 90%;
    height: 100%;
    border-right: var(--border);
    padding: 0.6rem 1.2rem;
    overflow: hidden;
}

.post-title {
    font-weight: 600;
    font-size: 21px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.post-body {
    font-size: 18px;
    padding: 0.4rem 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.post-action {
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>