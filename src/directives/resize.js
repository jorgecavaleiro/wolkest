const resizeDirective = {
    inserted: function(el, binding) {
        const onResizeCallback = binding.value;
        window.addEventListener('resize', () => {
            console.log('resizing...')
            const width = document.documentElement.clientWidth;
            const height = document.documentElement.clientHeight;
            onResizeCallback({ width, height });
        })
    }
}

export default resizeDirective

