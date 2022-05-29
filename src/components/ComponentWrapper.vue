<template lang="">
    <div :id="id" ref="root">      
        <h2 ref="test">Component:</h2>
        {{componentName}}  
    </div>
</template>
<script>
import { onMounted } from "vue"
import loadComponentByName from "./dep/componentLoader";
import domUtils from "./dep/domUtils";

export default {
    name: "ComponentWrapperVue",
    props: {
        appContext: {
            type: Object
        },
        id: {
            type: String,
            default: ""
        }, 
        componentName: {
            type: String,
            default: ""
        }, 
        componentProps: {
            type: Object,
            default: null
        }
    },
    methods: {
        addComponentToDOM: (component, props, contentWrapper, appContext) => {

            // render component into the DOM
            const newCmp = domUtils.renderComponent({
                el: contentWrapper,
                component: component,
                props: props,
                appContext,
            });
            return newCmp
        }      
    },
    mounted() {
        // Dynamically load the component

        const root = this.$refs.root

        let promise = loadComponentByName(this.componentName)
        promise.then(c => { 
            this.addComponentToDOM(c, this.componentProps, root, this.appContext);
        })          
    },
    setup(props) {

        onMounted(() => {
      
        })        

        return { name:props.componentName, props: props.componentProps }
    }
}
</script>

<style scoped>

</style>