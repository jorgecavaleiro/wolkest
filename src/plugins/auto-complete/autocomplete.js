export default  function autocompletePlugin(editor){
    editor.BlockManager.add('autocomplete-block', {
      label: 'Auto Complete',
      content: '<div class="my-block">This is a simple block</div>',
    });
}