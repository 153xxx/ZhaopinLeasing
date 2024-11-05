<script setup>
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';
  import { getWorkbenchData } from '/@/api/workbench/index';
  const chartDom = ref(null);
  const myChart = ref(null);

  onMounted(() => {
    if (chartDom.value) {
      myChart.value = echarts.init(chartDom.value);
      const option = {
        title: {
          text: '资产出租率',
          subtext: 'Fake Data',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'bottom',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 10, name: '公寓' },
              { value: 15, name: '商办' },
              { value: 20, name: '商铺' },
              { value: 25, name: '厂房' },
              { value: 30, name: '车位' },
              { value: 30, name: '广告牌' },
              { value: 30, name: '会议室' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      myChart.value.setOption(option);
    }

    getWorkbenchData()
      .then((res) => {
        // 假设res返回的数据结构与您的图表配置兼容
        // 更新图表数据
        myChart.value.setOption({
          series: [
            {
              data: res.seriesData.map((item) => ({ value: item.value, name: item.name })),
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
</script>
<template>
  <div class="workbenchRight3">
    <div class="pic">
      <div ref="chartDom" style="width: 300px; height: 300px"></div>
    </div>
  </div>
</template>
<style>
  .workbenchRight3 {
    width: 100%;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
  }
  .pic {
    display: flex;
  }
  .word {
    font-size: 5px;
  }
</style>
