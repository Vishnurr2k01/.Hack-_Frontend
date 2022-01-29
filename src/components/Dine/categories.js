import React, { useState } from 'react';



function Categories({ category, filterItem,catName,setCatName }) {

    
    const clickHandler = (cat) => {
        setCatName(cat)

    }
    return <div className='dine__header__left'>

        {category.map((cat, index) => {
            return (
                <div className={catName === cat ? "filter__active" : "filter"} onClick={() => {
                    setCatName(cat)
                    filterItem(cat)
                }}>
                    {cat}
                </div>
            )
        })}


    </div>;
}

export default Categories;
