<template>
    <div class="search-widget">
        <select v-model="engine">
            <option v-for="e in engineList" :value="e.value">{{e.name}}</option>
        </select>
        <input class="key-word" type="text" placeholder="Search Here">
        <button class="search">Search</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

interface SearchMeta {
    d: string
}

const props = withDefaults(
    defineProps<{
        meta?: SearchMeta
    }>(),
    {
        meta: () => {
            return {d: 'def'}
        }
    }
)
const engine = ref<string>(props.meta.d)
const engineList = ref([
    {name: '谷歌', value: 'google', url: 'https://www.google.com.hk/search?q=%KEYWORD%'},
    {name: '百度', value: 'baidu', url: 'https://www.baidu.com/s?wd=%KEYWORD%'},
    {name: '必应', value: 'bing', url: 'https://www.bing.com/search?q=%KEYWORD%'}
])
</script>

<style scoped>
.search-widget {
    padding: 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
}

.key-word {
    flex: 1;
    padding: 10px 20px;
    border: none;
}

.key-word:focus {
    outline: none;
}
</style>