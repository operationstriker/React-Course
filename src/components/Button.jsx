
function Button() {

    function ClickFunction() {
        console.log("R")
    }

   return (
    <>
    <button onClick={ClickFunction}>Click</button>
    </>
   )
}

export default Button
