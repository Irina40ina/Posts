<template>
    <div class="post-body">
        <slot></slot>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    .post-body {
    font-size: 18px;
    padding: 0.4rem 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>