<template>
    <a :href="meta.url">
        <div class="app-widget">
                <img class="app-icon" :src="meta.icon" :alt="meta.name">
                <div>{{ meta.name }}</div>
        </div>
    </a>
</template>

<script setup lang="ts">
interface AppMeta {
    icon: string
    name: string
    url: string
}

withDefaults(defineProps<{
    meta: AppMeta
}>(), {
    meta: () => {
        return {
            icon: '',
            name: '',
            url: '/'
        }
    }
})
</script>

<style scoped>
a {
    color: #333333;
    text-decoration: none;
}

.app-widget {
    padding: 20px;
    background-color: #fff;
}

.app-widget {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.app-icon {
    width: 60px;
    height: 60px;
    object-fit: cover;
}
</style>