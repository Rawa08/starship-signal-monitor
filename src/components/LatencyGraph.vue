<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { starships } from '../data/starships';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const canvasRef = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart<'line'> | null = null;

onMounted(() => {
    const context = canvasRef.value?.getContext('2d');
    if (!context) {
        return;
    }

    const labels: string[] = [];

    const datasets = starships.map((ship) => ({
        label: ship.name,
        data: [] as number[],
        borderColor: getRandomColor(),
        fill: false,
    }));

    chartInstance = new Chart(context, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            animation: false,
            scales: {
                y: {
                    min: 0,
                    max: 200,
                    title: {
                        display: true,
                        text: 'Latency (ms)'
                    }
                }
            }
        }
    });

    let time = 0;

    setInterval(() => {
        const latencyBatch = starships.map(() => Math.floor(Math.random() * 150 + 50));

        labels.push(`${time}s`);

        latencyBatch.forEach((latency, i) => {
            datasets[i].data.push(latency)
            if (datasets[i].data.length > 10) {
                datasets[i].data.shift();
            }
        });

        if (labels.length > 10) {
            labels.shift();
        }

        chartInstance?.update();
        time++
    }, 2000);
})

function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}

</script>

<template>
    <div style="height: 400px; flex: 1;" >
        <h2>Latency Over Time ({{ starships.length }} Starships)</h2>
        <canvas ref="canvasRef"></canvas>
    </div>
</template>