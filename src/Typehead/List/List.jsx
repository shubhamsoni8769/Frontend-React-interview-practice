const List = ({data, renderItem, activeIndex}) => {
    console.log(activeIndex);
    return (
        <ul>
            {data.map((ele, index) => {
                if(activeIndex === index) {
                    return <li className="active">renderItem(ele)</li>
                }
                return renderItem(ele)
            })}
        </ul>
    )

}
export default List;