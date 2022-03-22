import "./index.scss";
import ReactDOM from "react-dom";
import _, { initial } from "lodash";
import { CounterComponent, DateComponent, PostComponent, PostList } from "./components/c";
import { useState } from "react";

//le props vengono ricevute devono essere passate dal padre al figlio
//lo stato è intrinseco al componente e viene gestito da lui

const App:React.FC = () => {
  const initialValue= 0;
  const [date, setDate] = useState(new Date());
  const [tempValue, setTempValue] = useState(initialValue);  
  return <div className='app'>
  <div className="wrapper">
  {/* {PostList.map((post) => {
      return <PostComponent post={post} />;
    })} */}
  <DateComponent date={date}/>
  <button onClick={()=>{setDate(new Date());}}>Bottone</button>

  {_.map(PostList, (post)=><PostComponent post={post}/>)}

  <CounterComponent name={"Contatore"} initialValue={initialValue} callback={(value)=>{setTempValue(value)}}/>

  <div className="wrapper">il valore del contatore è {tempValue}</div>
  </div>
    {/* <TestComponentSenzaTag /> */}
  
</div>
  setInterval(()=>{},1000);
};
ReactDOM.render(<App/>, document.getElementById("root"));


