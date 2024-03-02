import React from 'react'
import { Link } from 'react-router-dom'

const FAB = ({url, text}) => {
  return (
    <div>
      <Link to={url} className='fixed bottom-10 right-4'>
        <div className="py-2.5 px-3 bg-[#5454FF] text-white rounded-md text-[16px] font-semibold">
          {text}
        </div>
      </Link>
    </div>
  )
}

export default FAB