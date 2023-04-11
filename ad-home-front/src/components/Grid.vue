<template>
<div class="grid-list">
    <Widget :style="{
        gridColumn: `${app.position.x} / ${app.position.x + app.position.w}`,
        gridRow: `${app.position.y} / ${app.position.y + app.position.h}`
    }" v-for="app in appList" :app="app" />
</div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue';
import Widget from './Widget.vue';

const appList = ref<Array<Tile>>([{
    id: '000000000000-0000-0001',
    name: 'app',
    widget: 'widget-app',
    position: {x: 1, y: 2, w: 2, h: 2},
    meta: {
        icon: 'https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/dd/45/eb/dd45eb77-d21d-92f2-c46d-979797a6be4a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.jpg',
        name: "Baidu",
        url: 'https://www.baidu.com/'
    }
},{
    id: '000000000000-0000-0002',
    name: 'app',
    widget: 'widget-search',
    position: {x: 1, y: 1, w: 10, h: 1},
    meta: {
        d: 'google'
    }
}])

// axios.get('/api/tile/all').then(res => {
//     appList.value = res.data
// })
</script>

<style scoped>
.grid-list {
    display: grid;
    grid-template-columns: repeat(10, 80px);
    grid-template-rows: 80px;
    gap: 20px;
}
</style>