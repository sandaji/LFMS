import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

function Rating(props) {
const { rating, numReviews, caption } = props;

  return (
    <span className="rating">
    <span>{
          rating >= 1
            ? <BsStarFill style={{ fill: '#ffc000' }} />
            : rating >= 0.5
            ? <BsStarHalf style={{ fill: '#ffc000' }}/>
            : <BsStar />
        }
   
    </span>
    <span>
    {
          rating >= 2
            ? <BsStarFill style={{ fill: '#ffc000' }} />
            : rating >= 1.5
            ? <BsStarHalf style={{ fill: '#ffc000' }}/>
            : <BsStar />
        }
    
    </span>
    <span>{
          rating >= 3
            ? <BsStarFill style={{ fill: '#ffc000' }} />
            : rating >= 2.5
            ? <BsStarHalf style={{ fill: '#ffc000' }}/>
            : <BsStar />
        }
    
    </span>
    <span>{
          rating >= 4
            ? <BsStarFill style={{ fill: '#ffc000' }} />
            : rating >= 3.5
            ? <BsStarHalf style={{ fill: '#ffc000' }}/>
            : <BsStar />
        }

    </span>
    <span>{
          rating >= 5
            ? <BsStarFill style={{ fill: '#ffc000' }} />
            : rating >= 4.5
            ? <BsStarHalf style={{ fill: '#ffc000' }}/>
            : <BsStar />
        }
    
    </span>
    {caption ? (
      <span>{caption}</span>
    ) : (
      <span>{' ' + numReviews + ' reviews'}</span>
    )}
  </span>
  );
}
export default Rating;