<script setup lang="ts">
import { starships } from './data/starships';
import StarshipList from './components/StarshipList.vue';
import LatencyGraph from './components/LatencyGraph.vue';
</script>

<template>
    <div style="min-height: 100vh; padding: 2rem; font-family: sans-serif; background: #0e1b2f; color: white;">
        <h1>Starship Signal Monitor</h1>
        <div style="display: flex; height: 100vh; gap: 1rem;">
            <StarshipList :ships="starships" />
            <LatencyGraph />
        </div>
    </div>
</template>