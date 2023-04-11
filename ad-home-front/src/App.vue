<script setup lang="ts">
import Grid from './components/Grid.vue';

</script>

<template>
    <div class="container">
        <div class="header">
            <h1>Good Evening, Guest</h1>
            <div>Doubt is the key to knowledge.</div>
        </div>
        <div class="grid">
            <Grid />
        </div>
        <div class="copyright">
            <p>AD_HOME Version 1.0.0_Alpha, Open Source in github and gitee, MIT Licensed</p>
            <p>Copyright © 2023 zhengyi, All Right Resolved</p>
        </div>
    </div>
</template>

<style scoped>
.header {
    padding: 20px 60px;
}

.header h1 {
    margin: 0;
}
.header div {
    color: #999999;
}

.grid {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.copyright {
    color: #999999;
    text-align: center;
    font-size: 14px;
}
</style>
