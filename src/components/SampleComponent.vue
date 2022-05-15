<template>
  <div class="container">
    <h1>{{ msg }}</h1>

    <PV-Button @click="count++">count is: {{ count }}</PV-Button>
    <p>
      Edit
      <code>components/SampleComponent.vue</code> to test hot module replacement.
    </p>

    <router-link to="/about">Go to About</router-link>   
  </div>   
</template>

<script>
import { ref, defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  name: 'SampleComponent',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const count = ref(0)

    onUnmounted(() => console.log('unmounting', props.msg))

    return { count }
  },
})
</script>

<style scoped>

.container {
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

