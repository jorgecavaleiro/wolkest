export default async function loadComponentByName(componentName) {
    let component = null;

    // get the component 
    switch (componentName) {
      case 'SampleComponent':
        component = (await import("@/components/SampleComponent.vue")).default
        break
      case 'CardComponent':
        component = (await import("@/components/CardComponent.vue")).default
        break
      default:
        console.log(`Component not found ${componentName}.`);
    }

    return component;
}