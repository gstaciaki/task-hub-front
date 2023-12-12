import './Comment.css';

const Comment = ({ description, base64Img }) => {
    return (
        <div className='comment'>
            <p>{description}</p>
            {base64Img && <img src={`data:image/png;base64,${base64Img}`} alt="Comment Image" />}
        </div>
    );
};

export default Comment;
