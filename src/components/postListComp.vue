<template>
    <div class="post-list">
        <TransitionGroup name="list">
            <postComp 
            :post-data="post"
            v-for="post in $props.posts"
            :key="post.id"
            @open-dialog="(data) => $emit('openDialog', data)"
            @open-delete-dialog="(data) => $emit('openDeleteDialog', data)"
            >
            </postComp>
            <div 
            class="triggerPagination" 
            ref="triggerPagination"
            >
                <AnOutlinedLoading
                class="circle"
                v-show="computedShowLoading" 
                ></AnOutlinedLoading>
            </div>
        </TransitionGroup>
    </div>
</template>


<script>
import postComp from '@/components/postComp.vue';
import { AnOutlinedLoading } from "@kalimahapps/vue-icons";
export default {
    components: {
        postComp,
        AnOutlinedLoading,
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
        searchField: {
            type: String,
            default: '',
            required: false,
        },
        searchId: {
            type: String,
            default: '',
            required: false,
        },
        isShowLoading: {
            type: Boolean,
            default: false,
            required: false,
        }
    },
    computed: {
        computedShowLoading() {
            // this.$props.searchField.length <= 0 && this.$props.searchId.length <= 0 || 
            return this.$props.isShowLoading === true;
        }
    },
    mounted() {
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries) => {
            if(entries[0].isIntersecting === true && this.$props.posts.length > 0) {
                // this.$emit('pageNext');
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.triggerPagination);
    }


}

</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}

.post-list {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 1.2rem 2rem;
}
.triggerPagination {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-top: 0.5rem;
}
.circle {
    animation: 2s linear infinite rotate;
}
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>