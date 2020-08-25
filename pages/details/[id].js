import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import PageDetails from '../../components/PageDetails'

const Details = (props) => {
    const router = useRouter()
    const { id } = router.query
    const [pageDetail, setPageDetail] = useState({});

    useEffect(() => {
        const url = 'https://snapvatme.com/wp-json/wp/v2/posts/' + id
        var req = new Request(url);
        fetch(req)
            .then((response) => {
                return response.json();
            }).then(res => {

                setPageDetail(res)
            }).catch(err => {
            })
    }, [])
    return (
        <div>
            <Link href="/posts"><a>👈Back</a></Link>
            <PageDetails pageDetail={pageDetail} />
        </div>
    )
}

export default Details