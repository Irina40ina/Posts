<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
    outline: rgba(0, 0, 0, 0);
    border: var(--border);
    border-radius: 4px;
    padding: 0.3rem .6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: var(--shadow);
    color: teal;
}

.btn:active {
    box-shadow: none;
}
</style>