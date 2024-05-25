import m from 'mithril';
import * as monaco from 'monaco-editor';

const CodeEditor = {
  oncreate: function (vnode) {
    const editorContainer = vnode.dom;
    vnode.state.editor = monaco.editor.create(editorContainer, {
      value: vnode.attrs.code,
      language: vnode.attrs.lang,
      lineNumbers: 'on',
      roundedSelection: false,
      scrollBeyondLastLine: false,
      readOnly: false,
      theme: 'vs-dark',
    });
    
    // Provide a method to get the editor content
    vnode.state.getValue = () => {
      return vnode.state.editor.getValue();
    };
  },
  onremove: function (vnode) {
    if (vnode.state.editor) {
      vnode.state.editor.dispose();
    }
  },
  view: function () {
    return m('div', { id: 'editor', style: { width: '100%', height: '100%' } });
  }
};

export default CodeEditor;
