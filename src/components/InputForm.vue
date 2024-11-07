<template>
  <div class="input-form">
    <label class="input-form_label">{{ label }}</label>
    <input class="input-form_input" type="text" v-model="inputValue"/>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: String,
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<style lang="scss" scoped>
.input-form {
  display: flex;
  flex-direction: column;

  padding: 8px 10px;

  border: 1px solid #F1F1F1;
  border-radius: 4px;

  &_label {
    font-size: 12px;
    color: #888;
    margin-bottom: 4px;
  }

  &_input {
    border: none;
    font-size: 20px;
    color: #333;
    outline: none;
  }
}
</style>
