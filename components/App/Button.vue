<script setup lang="ts">
type AppButtonProps = {
  icon?: string;
};

defineProps<AppButtonProps>();
</script>

<template>
  <button
    class="bg-secondary hover:bg-primary transition-all text-primary-content font-bold p-3 rounded-lg shadow-[3px_3px_4px_1px] shadow-black/70 active:scale-95 duration-100 flex items-center gap-3"
  >
    <Icon :name="icon" v-if="icon" size="1.5rem"></Icon>
    <slot />
  </button>
</template>
