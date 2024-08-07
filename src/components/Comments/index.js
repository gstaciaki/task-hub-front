import CommentsList from '../CommentsList'
import InputComment from '../InputComment'
import './Comments.css'

const Comments = () => {

    return (
        <div className='comments'>
            <div className='commentsSections'>
                <CommentsList />
                <InputComment />
            </div>
        </div>
    )
}

export default Comments