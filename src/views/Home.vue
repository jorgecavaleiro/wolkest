<template>
  <div class="home">
    <button @click="insert">Insert component</button>
    <div class="box" ref="container"></div>
  </div>
</template>

<script setup>
    import { ref, onUnmounted, getCurrentInstance } from 'vue'
    import renderComponent from '@/renderComponent'

    const { appContext } = getCurrentInstance()
    const container = ref()
    let counter = 1
    let destroyComp = null

    onUnmounted(() => destroyComp?.())

    const insert = async () => {
    destroyComp?.()
    destroyComp = renderComponent({
        el: container.value,
        component: (await import('@/components/SampleComponent.vue')).default,
        props: {
        key: counter,
        msg: 'Message ' + counter++,
        },
        appContext,
    })
    }
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}
.box {
  margin-top: 2rem;
  padding: 1rem;
  outline: solid 1px #ccc;
}
</style>
