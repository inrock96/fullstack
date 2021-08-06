
import './Message.css'
const Message = ({ error, success }) => {
    if (success !== null) {
        return (
            <div className="success">
                {success}
            </div>
        )
    }
    else if (error !== null) {
        return (
            <div className="error">
                {error}
            </div>
        )
    }
    return null


}

export default Message