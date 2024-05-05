<template>
    <div class="post-title">
        <slot></slot>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    .post-title {
    font-weight: 600;
    font-size: 21px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;    
}
</style>