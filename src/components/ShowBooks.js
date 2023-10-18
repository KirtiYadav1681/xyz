import React from 'react'

const ShowBooks = ({book}) => {
  return (
    <div>
    <ul>
        {book?.map((b) => {
            return <>
            <h3>{b.title}</h3>
            <h4>{b.author}</h4>
            <h6>{b.page}</h6>
            </>
        })}
    </ul>
</div>
  )
}

export default ShowBooks