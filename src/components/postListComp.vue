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
        <div class="triggerPagination" ref="triggerPagination"></div>
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
    emits: ['openDialog', 'openDeleteDialog', 'pageNext'],
    props: {
        posts: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
    mounted() {
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries) => {
            if(entries[0].isIntersecting === true && this.$props.posts.length > 0) {
                this.$emit('pageNext');
            }
            /* Content excerpted, show below */
        };
        const observer = new IntersectionObserver(callback, options);
        
        observer.observe(this.$refs.triggerPagination)
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
.triggerPagination {
    width: 100%;
    height: 40px;
    background-color: black;
    margin-top: 0.5rem;
}
</style>