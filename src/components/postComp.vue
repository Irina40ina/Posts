<template>
    <div class="post">
        <slot></slot>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
 .post {
    width: 100%;
    height: 130px;
    border: var(--border);
    border-radius: 4px;
    display: flex;
}   
</style>