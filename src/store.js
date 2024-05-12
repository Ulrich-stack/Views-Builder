// src/store.js
import m from "mithril";

const store = {
  state: {
    container: [],
    dnd: { drag: null, drop: null },
    containers: { source: null, sink: null },
    eltClicked: {},
  },
  updateContainer(containerUpdate){
    this.state.container = containerUpdate;
    m.redraw();
  },
  updateDrag(dragUpdate) {
    this.state.dnd = { ...this.state.dnd, drag: dragUpdate};
    m.redraw();
  },
  updateDrop(dropUpdate) {
    this.state.dnd = { ...this.state.dnd, drop: dropUpdate};
    m.redraw();
  },
  updateSource(source) {
    this.state.containers.source = source;
    m.redraw();
  },
  updateSink(sink) {
    this.state.containers.sink = sink;
    m.redraw();
  },
  updateEltClicked(eltClickedUpdate){
    this.state.eltClicked = eltClickedUpdate;
  },
  resetDnd() {
    this.state.dnd = { drag: null, drop: null };
    m.redraw();
  },
//   addComponentToContainer(component) {
//     this.state.container.push(component);
//     m.redraw();
//   },
};

export default store;
