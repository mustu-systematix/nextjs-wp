import Link from 'next/link'

const PostsList = (props) => {
    console.log('props: ', props);
    return (
        <div>
            <ul>
                {props.posts.map((el, i) => {
                    return (
                        <li key={i}><Link href = {"postDetails/[id]"} as = {`/postDetails/${el.id}`}><a>{el.title.rendered}</a></Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PostsList;