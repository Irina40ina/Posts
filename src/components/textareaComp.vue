<template>
    <textarea 
    class="input" 
    type="text" 
    :placeholder="placeholder"
    @input="(event) => $emit('update:modelValue', event.target.value)"
    :value="modelValue"
    ></textarea>
</template>

<script>
export default {
    name: 'textareaComp',
    props: ['modelValue', 'placeholder'],
    emits: ['update:modelValue'],
}
</script>

<style>
    .input {
        
    }
</style>