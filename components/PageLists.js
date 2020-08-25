import Link from 'next/link'

const PageLists = (props) => {
    return (
        <div>
            <ul>
                {props.pages.map((el, i) => {
                    return (
                        <li key={i}><Link href = {"details/[slug]"} as = {`/details/${el.id}`}><a>{el.title.rendered}</a></Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PageLists;