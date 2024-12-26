import { useState } from "react"

function App() {
  const [color, setColor] = useState("")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <Button btncolor="blue" setColor={setColor}/>
            <Button btncolor="red" setColor={setColor}/>
            <Button btncolor="pink" setColor={setColor}/>
            <Button btncolor="black" setColor={setColor}/>
            <Button btncolor="green" setColor={setColor}/>
            <Button btncolor="purple" setColor={setColor}/>
            <Button btncolor="yellow" setColor={setColor}/>
            <Button btncolor="orange" setColor={setColor}/>
            <Button btncolor="lightblue" setColor={setColorto conduct and apertkal}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

function Button({btncolor, setColor}) {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full  text-white shadow-lg"
      style={{ backgroundColor: btncolor}}
      onClick={() => setColor(btncolor)}
    >{btncolor.charAt(0).toUpperCase() + btncolor.slice(1)}</button>
  )
}
