import { model, Schema } from "mongoose";

const reviewSchema = new Schema({
    name: String,
<<<<<<< HEAD
    message: String
=======
    message: String,
    userPhoto: String
>>>>>>> 857b75833836ebca55ecac60497d3610178bc078
})

const Review = model("Review", reviewSchema);

export default Review;