import Stars from "./Stars";

const Review = ({review}) => {
    return (
        <ul className="me-4 mx-auto">
            <li className="list-group-item border-primary rounded">
                <Stars stars={review.stars} />
                <br></br>
                <p className="review">{review.comment}</p>
            </li>
        </ul>
    );
}
export default Review;
