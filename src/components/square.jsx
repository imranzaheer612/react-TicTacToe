
function Square(props) {
    return(
        <button className='square btn btn-primary box' onClick={() => props.onClick()}>
            {props.value}
        </button>
    ) 
}

export default Square;