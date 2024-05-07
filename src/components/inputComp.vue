<template>
    <input 
    class="input" 
    type="text" 
    :placeholder="placeholder"
    @input="(event) => $emit('update:modelValue', event.target.value)"
    :value="modelValue"
    >
</template>

<script>
export default {
    props: ['modelValue', 'placeholder'],
    emits: ['update:modelValue'],
}
</script>

<style>
    .input {
    
    }
</style>