<script setup lang="ts">
import { DataAnalysis } from '@element-plus/icons-vue'
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    BarSeriesOption,
    LineChart,
    LineSeriesOption
} from 'echarts/charts'
import {
    // 数据集组件
    // 组件类型的定义后缀都为 ComponentOption
    DatasetComponent, DatasetComponentOption,
    GridComponent, GridComponentOption,
    TitleComponent, TitleComponentOption,
    TooltipComponent, TooltipComponentOption,
    LegendComponent, LegendComponentOption,
    // 内置数据转换器组件 (filter, sort)
    TransformComponent
} from 'echarts/components'
import { } from 'echarts/components'
import * as echarts from 'echarts/core'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref, watch, WatchStopHandle } from 'vue'
import { useStaticsStore } from '~/stores/staticsStore'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
    | LegendComponentOption
>;

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LineChart,
    LabelLayout,
    UniversalTransition,
    LegendComponent,
    CanvasRenderer
]);

const option: ECOption = {
    title: { text: "影片播放Top10" },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    dataset: [
        {
            source: []
        },
        {
            transform: {
                type: 'sort',
                config: { dimension: 'play', order: 'asc' }
            }
        }
    ],
    xAxis: {},
    yAxis: { type: 'category' },
    series: [
        {
            type: 'bar',
            datasetIndex: 1,
            encode: {
                // 将 "play" 列映射到 X 轴。
                x: 'play',
                // 将 "title" 列映射到 Y 轴。
                y: 'title'
            },
            itemStyle: {
                color: 'orange'
            }
        }
    ]
};
const chart = ref(<HTMLElement><unknown>null)

const staticsStore = useStaticsStore()
const { playTop } = storeToRefs(staticsStore)

var unwatch: WatchStopHandle
onMounted(() => {
    var mychart = echarts.init(chart.value)
    window.onresize = () => mychart.resize()

    unwatch = watch(playTop, (newPlayTop => {
        (<any[]>(option.dataset))[0].source = newPlayTop
        newPlayTop && newPlayTop[0] && mychart.setOption(option)
    }))
})
onUnmounted(() => unwatch())
staticsStore.fetch()
</script>

<template>
    <div>
        <el-page-header :icon="DataAnalysis" content="统计" title=" " />
        <el-card style="margin-top: 12px;">
            <div style="display: flex;justify-content:center;">
                <div style="width: 100%;height: 480px;" ref="chart"></div>
            </div>
        </el-card>
    </div>
</template>
