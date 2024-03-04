<script setup lang="ts">
useFetch("/api/cat-fact", {
  key: "cat-facts",
});

const { data: catFacts } = useNuxtData("cat-facts");

const factIndex = ref(0);

const generateNewRandomFact = () => {
  factIndex.value = useRandom(0, catFacts.value.data.length - 1);
};
</script>

<template>
  <div class="flex flex-col h-full gap-14 justify-center">
    <div class="font-bold text-primary text-3xl">CAT FACT:</div>
    <div class="text-secondary text-2xl">
      {{ catFacts.data[factIndex] }}
    </div>
    <div>
      <AppButton @click.prevent="generateNewRandomFact"
        >GET A RANDOM CAT FACT</AppButton
      >
    </div>
  </div>
</template>
