<template>
    <select 
    class="select-menu"
    @change="selectOption"
    :value="$props.modelValue"

    >
        <option 
        value=""
        disabled
        >
            Выберите сортировку
        </option>

        <option 
        :value="option.value"
        v-for="option in $props.options"
        :key="option.title"
        >
            {{option.title}}
        </option>
    </select>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => [],
            required: true,
        },
        modelValue: {
            type: String,
            default: '',
            required: true,
        },
    },
    emits: ['update:modelValue'],
    methods: {
        selectOption(event) {
            this.$emit('update:modelValue', event.target.value);
        }   
    }
}
</script>

<style scoped>
.select-menu {
    padding: .3rem;
    font-size: 17px;
    border: none;
    border-bottom: 2.5px solid rgba(128, 128, 128, 0.329);
}
</style>