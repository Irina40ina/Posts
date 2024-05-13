<template>
    <div class="post-list">
        <postComp 
        :post-data="post"
        v-for="post in $props.posts"
        :key="post.id"
        @open-dialog="(data) => $emit('openDialog', data)"
        @open-delete-dialog="(data) => $emit('openDeleteDialog', data)"
        >
        </postComp>
    </div>
</template>


<script>
import postComp from '@/components/postComp.vue'
export default {
    components: {
        postComp,
    },
    data() {
        return {
        }
    },
    emits: ['openDialog', 'openDeleteDialog'],
    props: {
        posts: {
            type: Array,
            default: () => [],
            required: true,
        },
    }
}

</script>

<style scoped>
.post-list {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 1.2rem 2rem;
}
</style>