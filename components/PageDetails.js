
import styles from '../styles/Home.module.css'
import ReactHtmlParser from 'react-html-parser';

const PageDetails = ({pageDetail}) => {
    return (
        <div>
            <main className={styles.main}>
                {pageDetail && pageDetail.content && pageDetail.content.rendered ? ReactHtmlParser(pageDetail.content.rendered) :
                    <center><h1>No data</h1></center>
                }
            </main>
        </div>
    )
}

export default PageDetails;