

function Post({ image, name }) {
    return (
        <li className="post-component">
            <button>
                <img src={image} alt={name} />
                <p>{name}</p>
            </button>
        </li>
    )
}

export default Post