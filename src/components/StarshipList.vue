<script setup lang="ts">
import { defineProps } from 'vue';
import type { Starship } from '../data/starships';

const { ships } = defineProps<{ ships: Starship[] }>();
const getStatusColor = (status: 'online' | 'offline'): string => {
    return status === 'online' ? 'limegreen' : 'tomato'
};

const getStatusSymbol = (status: 'online' | 'offline'): string => {
    return status === 'online' ? 'O' : '-'
};

</script>

<template>
    <div>
        <h2>Starship List</h2>
        <ul style="list-style: none; padding-left: 0;">
            <li v-for="ship in ships" :key="ship.id">
                <span :style="{ color: getStatusColor(ship.status) }">
                    {{ getStatusSymbol(ship.status) }}
                </span>
                {{ ship.name }} - {{ ship.status }}
            </li>
        </ul>
    </div>
</template>
