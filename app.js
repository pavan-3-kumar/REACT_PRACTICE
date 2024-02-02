// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Do It Pavan"
//     );
// // this heading is not an h1 tag it is an object 
// // or element of react
// console.log(heading);
{/* <div id="parent">
    <div id="child">
        <h1>
            pavan you CAN !!!
        </h1>
        <h2>
        Consistency
        </h2>
    </div>
</div> */}
// to create above pattern using react
// create an array to create multiple childrens
const parent = React.createElement(
    "div",{id:"parent"}
    ,React.createElement(
       "div",{id:"child"},[
        React.createElement("h1",{},"pavan you CAN!!!")
       ,React.createElement("h2",{},"Consistency")
       ])
    );
// as this is meessy right so we will use JSX 

const root = ReactDOM.createRoot(document.getElementById("root"));
// const root= document.getElementById("root");
root.render(parent);