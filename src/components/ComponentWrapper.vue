<template lang="">
    <div class="wrapper" :id="id" ref="root" :class="{ selected: isSelected }">      
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
        },         
        isSelected: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        getRenderedComponent(){
            return this.component
        }
    },
    data: function() {
        return {
            component: Object
        }
    },
    methods: {
        addComponentToDOM: function(component, props, contentWrapper, appContext) {

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
            this.component = this.addComponentToDOM(c, this.componentProps, root, this.appContext);
        })          
    },
    setup(props) {
        onMounted(() => {
           //console.log(props)
        })        

        return { name:props.componentName, props: props.componentProps }
    }
}
</script>

<style scoped>
    .wrapper:hover {
        transform: scale(1.02); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */  
        box-shadow: 0 4px 5px rgba(0,0,0,0.2);
        cursor: pointer;
    }
    .selected {
        border: dashed 2px blue;
    }
</style>