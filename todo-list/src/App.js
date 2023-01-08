import logo from './logo.svg';
import './App.css';
import Header from './MyComponants/Header';
import Footer from './MyComponants/Footer';
import Todos from './MyComponants/Todos';



function App() {
const onDelete = ()=>{
  console.log("hii")
}


  let todos =[
    {
      sno :1,
      title : "go to market",
      desc : "go to market doing some work"
    },
    {
      sno :2,
      title : "go to mall",
      desc : "go to mall doing some work"
    },
    {
      sno :3,
      title : "go to college",
      desc : "go to college doing some work"
    }

  ]
  return (
   <>
      {/* <Header title="My TODO List" searchBar={true}/> */}
      {/* <Header title={45}/> */}   {/* for using prototypes*/}
      {/* <Header searchBar={true}/> for using default props */}
      <Header title="My TODO List" searchBar = {true}/>
      
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
   </>
  )
};

export default App;
