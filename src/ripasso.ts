import './index.scss';
import _ from 'lodash';
// let a: number = 1;
// let b: string = "ciao";
// let c = a+b;
// console.log(c);


interface Shape {
    getNumeroDiLati(): number;
}

class Quadrato implements Shape {

    getNumeroDiLati(): number {
        return 4;
    }

}
class Triangolo implements Shape {

    getNumeroDiLati(): number {
        return 3;
    }

}
// const obj: Shape = new Quadrato();


// Logica della mia applicazione

// const stampNumeroDiLati = (oggetto: Shape) => {
//     const numDiLati = oggetto.getNumeroDiLati();
//     console.log(`Numero di lati: ${numDiLati}`);
// };

// stampNumeroDiLati(new Quadrato());
// stampNumeroDiLati(new Triangolo());


// interface SocialNetworkClient {
//     getLastPosts(numeroDiPost: number): any[];
// }

// class FacebookClient implements SocialNetworkClient {

//     getLastPosts(numeroDiPost: number): any[] {
//         // logica che recupera i post da facebook
//         // e li restituisce 
//         return [];
//     }

// }

// class InstagramClient implements SocialNetworkClient {

//     getLastPosts(numeroDiPost: number): any[] {
//         // logica che recupera i post da instagram
//         // e li restituisce 
//         return [];

//     }
// }


// const client: SocialNetworkClient = new FacebookClient();
// client.getLastPosts(5);




// function myFunc(n1: number, n2: number): number {
//     return n1+n2;
// }

// const myFunc2 = (n1: number, n2: number) => {
//     return n1+n2;
// };

// const result = myFunc2(3,3);
// console.log(result);


// const myFunc3 = function (n1: number, n2: number): number {
//     return n1+n2;
// };


interface FunzioneSomma {
    (n1: number, n2: number): number;
}

const sommaSemplice: FunzioneSomma = (x, y) => {
    // tanto codice..
    console.log("sommaSemplice()");
    return x + y;
};

const sommaInutilmenteArticolata: FunzioneSomma = (x, y) => {
    return x + y + 1;
};




// console.log("step 1");
// // faccio cose
// const somma = sommaSemplice(2,2);
// // STOP
// console.log("step 2");


//------------------------

const myF = function () { console.log("sono dentro al setTimeout!"); };

console.log("step 1");
const result = setTimeout(myF, 1000);
console.log("step 2");
console.log("step 3");



const myApp = (n1: number, n2: number, f: FunzioneSomma): void => {
    const result = f(n1, n2);
    console.log(result);
};


// myApp(2, 3, sommaSemplice);
// myApp(2, 3, sommaInutilmenteArticolata);



interface Punto {
    x: number;
    y: number;
    z: number;
};
const p: Punto = { x: 5, y: 10, z: 0 };
const p2: Punto = { x: 7, y: 5, z: 0 };

const sommaPunti = (p1: Punto, p2: Punto) => {

};
//-------------- map filter
// sono funzioni che trasormano array in altri array
// il foreach non crea in output di default un array
// il map crea un nuovo array chiamando una funzione che agisce su ogni elemento dell'array

const arrayInput:number[]=[1,2,3,4,5];

//  const arrrayOutput= arrayInput.map(function(value,index){
//      console.log("Stampa: ",value,index);
//      return value*2;
//  });
//console.log(arrrayOutput);
// const arrayOutputFilter = arrayInput.filter((value, index) => {
//    return (value % 2) === 0;
// });
// console.log(arrayOutputFilter);
const arrrayOutput = _.map(arrayInput, (value,index)=>value*2);
console.log("array output: ", arrrayOutput);

const arrayOutputFilter = _.filter(arrayInput, (value,index)=>{
    return (value%2===0);
});
console.log("array output filter: ", arrayOutputFilter);
//funzioni pure side effect immutabilit??
//una funzione pura non modifica i dati in input[usare funzioni pure porta a meno bug]
//come map e filter
//--lodash-->libreria per metodi su array


// let arrayInput: nember[]=[];
// for (let index = 0, index< arrayInput.length, index++){
//     const value = arrayInput=[index];
//     const newValue = value+2;
//     arrrayOutput.push(newValue);
// }
//console.log(arrrayOutput);





// import ReactDOM from 'react-dom';


// ReactDOM.render(
//   <div>Hello world from FITSTIC - React app!</div>,
//   document.getElementById('root')
// );