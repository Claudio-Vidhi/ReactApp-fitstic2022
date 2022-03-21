import "./index.scss";
import ReactDOM from "react-dom";
import _ from "lodash";
import { Book, TestComponent, TestComponentSenzaTag } from "./components/c";


const App:React.FC = (props) => {
  const numero= 4;
  const messaggio1="messaggio1";
  const autore1="Giovanni";
  const titolo1="boh";
  const commento1="WEH";
  return <div className='app'>
  <div>app!</div>
  <div>Numero: {numero}</div>
  {numero === 4 && <div>condizione true</div>}
  <div className="wrapper">
      <TestComponent messaggio={messaggio1} />
      <TestComponent messaggio={messaggio1} />
      <TestComponent messaggio={messaggio1}/>
  </div>
  <Book autore={autore1} titolo={titolo1} commento={commento1}/>
    {/* <TestComponentSenzaTag /> */}
</div>;
};

ReactDOM.render(<App/>, document.getElementById("root"));
