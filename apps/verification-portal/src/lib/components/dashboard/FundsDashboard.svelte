<script lang="ts">
  import FundsWidget from '$lib/components/dashboard/FundsWidget.svelte';
  export let assetFunds: string = '';
  export let assetFundsSubtitle: string;
  export let totalFunds: string;
  export let totalFundsSubtitle: string;
</script>

<div
  class="flex flex-wrap md:flex-nowrap gap-8 lg:flex-col xl:flex-row items-end md:items-center xl:items-end justify-center"
>
  {#if assetFunds}
    <div class="funds-widget-container">
      <FundsWidget
        funds={assetFunds}
        className="bg-primary-200 dark:bg-white text-deep-blue-800"
      ></FundsWidget>
      <span
        class="text-sm text-black dark:text-white xl:text-white xl:dark:text-black"
        >{assetFundsSubtitle}</span
      >
    </div>
  {/if}

  {#if totalFunds}
    <div class="funds-widget-container">
      <FundsWidget
        size="lg"
        funds={totalFunds}
        className="bg-deep-green dark:text-primary-300"
      ></FundsWidget>
      <span
        class="text-sm text-black dark:text-primary-300 xl:text-white xl:dark:text-black"
        >{totalFundsSubtitle}</span
      >
    </div>
  {/if}
</div>

<style lang="postcss">
  .funds-widget-container {
    @apply text-center;
  }
</style>
