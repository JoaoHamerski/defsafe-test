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
  <div class="flex flex-col h-full justify-between gap-10 sm:gap-0">
    <div class="flex flex-col gap-8 sm:gap-14">
      <div class="font-bold text-primary text-2xl md:text-3xl">CAT FACT:</div>
      <Transition
        enter-from-class="opacity-0"
        enter-to-class="opacity-100 "
        enter-active-class="transition-all"
        leave-from-class="opacity-100 "
        leave-to-class="opacity-0"
        leave-active-class="transition-all"
        mode="out-in"
      >
        <div class="text-secondary text-xl md:text-2xl" :key="factIndex">
          {{ catFacts.data[factIndex] }}
        </div>
      </Transition>
    </div>

    <div class="mx-auto sm:mx-0">
      <AppButton
        @click.prevent="generateNewRandomFact"
        icon="material-symbols:refresh"
        class="text-nowrap"
      >
        GET A RANDOM CAT FACT
      </AppButton>
    </div>
  </div>
</template>
