import React from 'react'
import ReviewForm from './ReviewForm';
import ReviewIndex from "./ReviewIndex";

const Movie = ({ movie, addReview }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addReview(movie.id, e.target.rating.value, e.target.comment.value);
        e.target.reset();
    }

    return (
        
            <div className="movies-container">
                <div>
                <div className="card m-5 w-50 mx-auto bg-primary bg-opacity-10 d-block border border-primary">
                    <img className='m-4 rounded mx-auto' src={movie.img} alt="movie poster" />
                <div className="card-body rounded mb-2 w-50 mx-auto bg-light border border-primary">
                 <h5 className="card-title">{movie.title}</h5>
                 <p className="card-text">{movie.text}</p>
                </div>
                    <ReviewIndex reviews={movie.reviews} />
                    <h5>Leave a Review</h5>
                    <ReviewForm submitHandler={handleSubmit}/>
                </div>
                <br></br>
            </div>
            </div>
        
    );
}

export default Movie;

//export default class Movie extends Component 
//</div> render() 
//     return (
//         <div className="card m-5 w-50 mx-auto bg-primary bg-opacity-10 d-block border border-primary">
//             <img className='m-4 rounded mx-auto' src={this.props.img} alt="movie poster" />
//             <div className="card-body rounded mb-2 w-50 mx-auto bg-light border border-primary">
//                 <h5 className="card-title">{this.props.title}</h5>
//                 <p className="card-text">{this.props.text}</p>
//             </div>
//             <ReviewIndex reviews={movie.reviews} />
//             <h5>Leave a Review</h5>
//             <ReviewForm submitHandler={handleSubmit}/>
//         </div>
//     )
//   }
  
//   export default Movie;
//
{/* <br></br>
                    <h3><b>{movie.title}</b></h3>
                    <img src={movie.image} alt={movie.alt} style={{minWidth: '10%', height: '20rem'}}/>
                    <br></br>
                    <br></br> */}



