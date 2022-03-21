import ReactDOM from "react-dom";
import "./cindex.scss";

interface TestComponentProps{
    readonly messaggio:string;
}
export const TestComponent:React.FC<TestComponentProps> = (props) =>{
    return <div className="testComponent">
    testComponent
    <div>Messaggio di Input: {props.messaggio} </div>
    <TestComponentSenzaTag/>
    </div>;
    
};
export const TestComponentSenzaTag=()=>{
    //return <>TestComponent2</>
    return <><div>div1</div>
    <div>div2</div></>
}
interface PostList {
    autore:string;
    titolo:string;
    commento:string;
}
export const Book =(libro:PostList) => {
    return <div>{libro.autore} {libro.titolo} {libro.commento}</div>
    
}