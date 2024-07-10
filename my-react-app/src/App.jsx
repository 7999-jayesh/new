import React ,{useState} from 'react'
const App = () => {
  // let user='Jayesh'
  // let [count,SetCount] = useState(0);
  // function fun1(){
  //   SetCount(++count)
  // }
  let [time,SetTime]= useState();
  setInterval(()=>{
    let date = new Date().toLocaleTimeString()
    SetTime(date)
  })
  return (
    // <div>
    //   { /* <h1>Hello {user}</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel?</p> */ }
    //   {/* <Home  a={b.data}/> */}

    //     {/* <p>{count}</p>
    //   <button onClick={fun1}>add</button> */}
    // </div>
    <div>
      <p>Time : {time}</p>
      <p>hhehhe</p>
    </div>
  )
}
export default App
