<template>
    <div class="post-list">
        <postComp 
        :title="post.title" 
        :body="post.body"
        v-for="post in $props.posts"
        :key="post.id"
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