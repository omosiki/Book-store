import React from 'react'

const Daily = () => {
    const deals =[
        {title: "Deal Book 1", discount: "20%"},
        {title: "Deal Books 2", discount: "30%"}
    ]
  return (
    <div className='daily-deals'>
        <h2>Daily Deals</h2>
            <ul>
                {deals.map((deal) =>(
                    <li key={deal.title}>{deal.title}-{deal.discount}off</li>
                ))}
            </ul>
    </div>
  )
}

export default Daily
