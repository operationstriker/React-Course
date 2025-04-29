function Popupfunc({ title }) {
    return (
        <>
        <div className="popup">
            <span>{ title }</span>
            <div className="popup__btns">
                <button onClick={() => console.log("Confirm button clicked")} className="popup__btn">Confirm</button>
                <button onClick={() => console.log("Cancel button clicked")}
                className="popup__btn popup__btn--cancel">Cancel</button> 
                <button onClick={() => alert("Click me")}>Click Me</button>
            </div>
        </div>
        </>
    ) 
}

export default Popupfunc
