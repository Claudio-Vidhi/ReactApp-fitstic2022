import _ from "lodash";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./cindex.scss";

interface TestComponentProps {
  readonly messaggio: string;
}
export const TestComponent: React.FC<TestComponentProps> = (props) => {
  return (
    <div className="testComponent">
      testComponent
      <div>Messaggio di Input: {props.messaggio} </div>
      <TestComponentSenzaTag />
    </div>
  );
};
export const TestComponentSenzaTag = () => {
  //return <>TestComponent2</>
  return (
    <>
      <div>div1</div>
      <div>div2</div>
    </>
  );
};
interface Post {
  readonly autore: string;
  readonly titolo: string;
  readonly testo: string;
};
//definisco una lista di post
export const PostList: Post[] = [
  {
    titolo: "Post",
    autore: "Autore",
    testo: "Testo",
  },
];

 export interface PostComponentProps {
  readonly post: Post;
};
export const PostComponent: React.FC<PostComponentProps> = (props) => {
  return (
    <div className="post">
      <div className="title">{props.post.titolo}</div>
      <div className="author">{props.post.autore}</div>
      <div className="text">{props.post.testo}</div>
    </div>
  );
};
//cos'è che tipo è il props
interface DateProps{
    readonly date: Date;
};
//props variabile del input
export const DateComponent: React.FC<DateProps> =(props)=>{
    const currentDate = props.date.toString();//come viene visualizzato e come viene recuperato
    return <div className="post">Data e Ora attuali: {currentDate}</div>;
};

interface CounterProps{
  readonly initialValue: number;
  readonly name: string;
  readonly callback: (value: number)=>void;//qui è scritto come è fatta la callback ma non la funzione
}
export const CounterComponent: React.FC<CounterProps> = (props) =>{
  const {initialValue, name, callback}=props;  
  const clickHandler = (newValue: number) => {setValue(newValue);callback(newValue)};
  //stato
    const [value,setValue]= useState(initialValue);
    return <div className="box">
      <h3>{name}</h3>
        Value: {value}
        <button onClick={()=>{clickHandler(value+1)}}>Inc</button>
        <button onClick={()=>{clickHandler(value-1)}}>Dec</button>
        <button onClick={()=>{clickHandler(initialValue)}}>Reset</button>
    </div>;
};
interface ButtonProps{
  readonly text: string;
  readonly clickCallback: () => void;
}
export const ButtonComponent: React.FC<ButtonProps>=(props)=>{
  const {text, clickCallback}=props; 
  return <div className="btn">
    <h3>{text}</h3>
    <button onClick={() => clickCallback()}>Press Me</button>
  </div>
}

