<template>
    <div class="post-list">
        <postComp 
        :title="'Title Post'" 
        :body="'Text of post'" 
        v-for="item in posts" 
        :key="item"
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
            posts: []
        }
    },
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