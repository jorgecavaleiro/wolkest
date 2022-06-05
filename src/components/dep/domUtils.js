import { createApp, reactive } from 'vue'

function renderComponent({ el, component, props, appContext }) {
  // initialize and get the reactive props to allow changes
  const rprops = getReactiveProps(component, props)

  // console.log('Adding the component:')
  // console.log(component)
  // console.log('with props: ')
  // console.log(props)  
  // console.log('into: ')
  // console.log(el)
  // console.log('with context:')
  // console.log(appContext)
  
  let app = createApp(component, rprops)
  Object.assign(app._context, appContext) // must use Object.assign here
  app.mount(el)

  const cmpObj = {
    props: rprops,
    container: el,
    destroy: () => {
      // destroy component
      // console.log('destroying the component...')
      // console.log(app)
      app?.unmount()
      app = undefined
    }
  } 

  return cmpObj
}

function getReactiveProps(component, props) {
  // when there aren't any predefined props, initialize them
  if(props === null || props === undefined) {
    const cprops = component.props

    if(!cprops || typeof(cprops) !== "object" || Array.isArray(cprops)) {
      console.error('Invalid component: properties are undefined')
      return;
    }

    const keys = Object.keys(cprops)
    props = {}
    keys.forEach(key => {
      props[key] = ""        
    })
  }

  // turn props object into reactive for allowing later programaticaly changes
  return reactive(props)
}

export default { renderComponent }