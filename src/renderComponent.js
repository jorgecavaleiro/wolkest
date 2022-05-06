import { createApp } from 'vue'

export default function renderComponent({ el, component, props, appContext }) {
  let app = createApp(component, props)
  Object.assign(app._context, appContext) // must use Object.assign here
  app.mount(el)

  return {
    props: props,
    destroy: () => {
      // destroy component
      console.log('destroying the component...')
      console.log(app)
      app?.unmount()
      app = undefined
    }
  } 
}
