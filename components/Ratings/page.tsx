'use client'
import { FC, useState} from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const Ratings: FC<{rating:any}> = ({ rating }) => {
    const [filledStars, setFilledStars] = useState(Math.floor(rating))
    const [halfFilled, setHalfFilled] = useState(rating - filledStars >= 0.5)
    const [emptyStars, setEmptyStars] = useState(5 - Math.ceil(rating))
  
    return (
      <div className="flex items-center space-x-1">
        {[...Array(filledStars)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
        {halfFilled && <StarIcon className="w-5 h-5 text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-lightgray" />
        ))}
      </div>
    )
}

export default Ratings