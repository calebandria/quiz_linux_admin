import './list-items.styles.scss'

const ListItems = ({title})=>{
    return(
        <div className="list-items">
            <div className="content">
                <h2 className="title">{title}</h2>
                <div className="content-list">
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                    <p className="single-content">Content 1</p>
                </div>
            </div>
        </div>
    )
}
export default ListItems;