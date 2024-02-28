import React, { useEffect } from "react"
import CardListItem, { CardListItemProps } from "./CardListItem"

const CardList: React.FC<{items?: CardListItemProps[]}> = (props) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2 mt-4">
            {props.items?.map((item, index) => (
                <CardListItem key={index} {...item}/>
            ))}
        </div>
    )

}
export default CardList