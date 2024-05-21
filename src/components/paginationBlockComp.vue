<template>
    <div class="pagination-block">
        <!-- СТРЕКЛА ВЛЕВО -->
        <btnComp 
        class="pagination-btn"
        @click="$emit('pageBack')"
        >{{ '<' }}</btnComp>
        
        <div 
        class="pagination-block__item"
        :class="($props.currentPage === page)? 'selected' : ''"
        v-for="page in $props.pageCount"
        :key="page"
        @click="$emit('selectPage', page)"
        >
            <p>{{ page }}</p>
        </div> 

        <!-- СТРЕКЛА ВПРАВО -->
        <btnComp 
        class="pagination-btn"
        @click="$emit('pageForward')"
        >{{ '>' }}</btnComp>
    </div>
</template>

<script>
export default {
    name: 'paginationBlock',
    data() {
        return {
            
        }
    },
    props: {
        pageNumber: {
            type: Number,
            required: true,
            default: 1,
        },
        pageCount: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
            default: 1,
        }
    },
    emits: ['selectPage', 'pageBack', 'pageForward'],
}
</script>

<style scoped>
    .pagination-block {
        width: 100%;
        height: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pagination-btn {
        padding: .2rem .3rem;
        margin: 0 0.5rem;
    }
    .pagination-block__item {
        padding: .2rem .3rem;
        background-color: rgba(128, 128, 128, 0.285);
        cursor: pointer;
    }
    .pagination-block__item + .pagination-block__item {
        margin-left: 5px;
    }
    .selected {
        border: 2px solid teal;
    }
    
</style>