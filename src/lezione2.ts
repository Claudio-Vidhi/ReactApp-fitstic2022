import "./index.scss";
// import ReactDOM from "react-dom";
// import _ from "lodash";
// const utente = (
//   <div>
//     <span className="name">Claudio </span>
//     <span className="surname">Vidhi</span>
//   </div>
// );
// const listaDiElementiJSX = [
//   <div key={1}>Elemento1</div>,
//   <div key={2}>Elemento2</div>,
// ];
// const numero = 5;
// const stringa = "Ciao";
// const lista = [1, 2, 3, 4, 5];

// const variabile = _.map(lista, (value, index) => {
//   return (
//     <div key={index}>
//       Elemento alla posizione {index}: {value}
//     </div>
//   );
// });
// // const punto1: Point = {
// //   x: 5,
// //   y: 6,
// // };
// const app = (
//   <div
//     className="title"
//     style={{
//       border: "1px solid black",
//     }}
//   >
//     <div>1</div>
//     <div>2</div>
//     <div>3</div>
//     <div>SIUUUM</div>
//     {utente}
//     {listaDiElementiJSX}
//     <div>Numero:{numero} </div>
//     <div>Stringa:{stringa} </div>
//     {/* <div>
//       Punto: (x: {punto1.x}, y: {punto1.y})
//     </div>
//     <div>Punto in json: {JSON.stringify(punto1)} </div> */}

//     {/* Rendering condizionale */}
//     {numero % 2 === 0 ? (
//       <div>il numero è pari</div>
//     ) : (
//       <div>il numero è dispari</div>
//     )}
//     {/* Rendering ciclico */}
//     {variabile}
//     {_.map(lista, (value, index) => {
//       return (
//         <div key={index}>
//           Elemento alla posizione {index}: {value}
//         </div>
//       );
//     })}
//     {_.filter(lista, (value, index) => {
//       return value % 2 === 0;
//     }).map((value, index) => {
//       return (
//         <div key={index}>
//           numeri pari della lista in posizione {index}: {value}
//         </div>
//       );
//     })}
//   </div>
// );

// ReactDOM.render(app, document.getElementById("root"));