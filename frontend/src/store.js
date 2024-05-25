// src/store.js
import m from "mithril";
import { styleFormat } from "./utils/utils";
import { groupProps } from "./components/properties/group";

const store = {
  state: {
    openModal: false,
    //the container of our page
    container: [ 
      {
        tag: "group",
        attributs: {
          id: "root",
          name: "root",
          myStyle: {
            width: "100%",
            height: "100%",
          },
          get style() {
            return styleFormat(this.myStyle);
          },
          props: groupProps,
        },
        children: [],
      },
    ],
    //an object which will keep the items we drag and the item on which we will drop an item
    dnd: { drag: null, drop: null },
    containers: { source: null, sink: null },
    eltClicked: {
      tag: "group",
      attributs: {
        id: "root",
        name: "root",
        myStyle: {
          width: "100%",
          height: "100%",
        },
        get style() {
          return styleFormat(this.myStyle);
        },
        props: groupProps,
      },
      children: [],
    },
    eltClickedId: 0
  },
  updateModal(){
    this.state.openModal = !this.state.openModal; 
    m.redraw();
    
  },
  updateContainer(containerUpdate) {
    this.state.container = containerUpdate;
    m.redraw();
  },
  updateDrag(dragUpdate) {
    this.state.dnd = { ...this.state.dnd, drag: dragUpdate };
    m.redraw();
  },
  updateDrop(dropUpdate) {
    this.state.dnd = { ...this.state.dnd, drop: dropUpdate };
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
  updateEltClicked(elt) {
    this.state.eltClicked = elt;
    this.state.eltClickedId = elt.attributs.id;
  },  
  reset() {
    this.state.dnd = { drag: null, drop: null };
    this.state.containers = {source: null, sink: null};
    m.redraw();
  },
};

export default store;
