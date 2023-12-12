import './RedButton.css'

const RedButton = ({ onClick, text }) => {

    return (
        <button className='redButton' onClick={onClick}>{text}</button>
    )
}

export default RedButton