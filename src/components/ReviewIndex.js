
import Review from "./Review";

const ReviewIndex = ({reviews}) => {
    
    return (
        <div>
            {
            reviews.map((review, index) => {
                return <Review key={index} review={review} />
            })
            }
        </div>
    );
}

export default ReviewIndex;
