import m from "mithril";

const Properties = {
  view: function (vnode) {
    console.log("Properties", vnode.attrs.eltClicked)

    return <div className="w-2/12 bg-black text-white flex flex-col">{
        vnode.attrs.eltClicked && Array.isArray(vnode.attrs.eltClicked.props) && vnode.attrs.eltClicked.props.map((item)=>{
            
            return(
                <div>
                    <label>{item.name}</label>
                    <input type={item.type}></input>
                </div>
            )
        })
    }</div>;
  },
};

export default Properties;
