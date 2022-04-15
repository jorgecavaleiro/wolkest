import grapesjs from 'grapesjs';

export default grapesjs.plugins.add('my-plugin-name', (editor, options) => {
  /*
  * Here you should rely on GrapesJS APIs, so check 'API Reference' for more info
  * For example, you could do something like this to add some new command:
  *
  * editor.Commands.add(...);
  */

  const html = `<div id="ratatui"></div>`;
  console.log(html);
  editor.BlockManager.add('autocompletePlugin', {
    label: 'Auto Complete',
    content: html,
  });

  console.log(options);
})
