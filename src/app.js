import m from "mithril";
import { Tags } from "./parts/tags";
import "../style.css";
import { Page } from "./parts/page";

const app = {
  oninit: function (vnode) {
    vnode.state.container = []; // le tableau qui contiendra tous nos éléments
    vnode.state.dnd = { drag: null, drop: null }; // un objet qui va contenir l'élément pris et l'élément où il sera déposé
    vnode.state.containers = { source: null, sink: null }; // un objet qui va contenir les conteneurs de départ et d'arrivée de nos éléments
  },
  view: function (vnode) {
    return (
      <main className="">
        <div className="h-full w-full flex overflow-hidden">
          <Tags dnd={vnode.state.dnd} />
          <Page dnd={vnode.state.dnd} container={vnode.state.container} containers={vnode.state.containers}/>
          <div className="w-2/12 bg-black"></div>
        </div>
      </main>
    );
  },
};

m.mount(document.body, app);