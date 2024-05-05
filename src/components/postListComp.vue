<template>
    <div class="post-list">
        <slot></slot>
    </div>
</template>


<script>
export default {
    
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