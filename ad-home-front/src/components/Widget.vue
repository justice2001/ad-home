<template>
    <div class="widget-box">
        <component :is="app.widget" 
        :meta="app.meta" />
    </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
    app: Tile
}>(),{
    app: () => {
        return {
            id: '000000000000-0000-0000',
            name: '',
            widget: '',
            position: {x: 0, y: 0, w: 0, h: 0},
            meta: {}
        }
    }
})
</script>

<style scoped>
.widget-box {
    box-shadow: 4px 10px 15px -3px rgba(0,0,0,0.1);
    border-radius: 10px;
    overflow: hidden;
}
</style>