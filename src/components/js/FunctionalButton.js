export default {
    name:"functional-button",
    functional:true,
    render(createElement,{data,children}){
        console.log("this",this);
        console.log({data});
        return createElement("button",data,children);
    }

};