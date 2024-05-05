<template>
    <div class="post-content">
        <slot></slot>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
  .post-content {
    width: 90%;
    height: 100%;
    border-right: var(--border);
    padding: 0.6rem 1.2rem;
    overflow: hidden; 
}
  
</style>