<template>
  <div>
    <div ref="chart" style="width: 100%; height: 300px"></div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import * as echarts from 'echarts';

  const props = defineProps({
    chartData: {
      type: Object,
      required: true,
    },
  });

  const chart = ref(null);

  onMounted(() => {
    if (chart.value) {
      chart.value = echarts.init(chart.value);
      chart.value.setOption(props.chartData);
    }
  });

  onBeforeUnmount(() => {
    if (chart.value) {
      chart.value.dispose();
    }
  });
</script>

<style></style>
