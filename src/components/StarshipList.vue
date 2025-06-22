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
  <div style="flex: 1; overflow-y: auto; padding: 1rem;">
    <h2 style="margin-bottom: 1rem;">Starship List</h2>
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li
        v-for="ship in ships"
        :key="ship.id"
        style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid #2a2a2a;"
      >
        <span
          :style="{ color: getStatusColor(ship.status), fontWeight: 'bold', fontSize: '1.25rem' }"
        >
          {{ getStatusSymbol(ship.status) }}
        </span>
        <div>
          <div style="font-weight: bold;">{{ ship.name }}</div>
          <div style="font-size: 0.9rem; color: #aaa;">Status: {{ ship.status }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
