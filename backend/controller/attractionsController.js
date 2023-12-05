const Attraction = require('../models/cincySchema');

const mongoose = require('mongoose');

//get all attractions
const getAttractions = async (req, res) => {
    const attractions = await Attraction.find({}).sort({createdAt: -1})

    res.status(200).json(attractions)
};


//get single attraction
const getAttraction = async (req, res) => {
    const { category } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){

        return res.status(404).json({error: 'no such attraction'})
    }


    const attraction = await Attraction.findById(category)

    if(!attraction) {
        return res.status(404).json({error: 'no such attraction'})
    }
    res.status(200).json(attraction)
}




//create a new workout
const createAttraction = async (req,res) =>{
    const {name, description, address, hours, number, rating, pricing, category} = req.body


    let emptyFields = []

    if(!name) {
        emptyFields.push('name')
    }

    if(!description) {
        emptyFields.push('description')
    }

    if(!address) {
        emptyFields.push('address')
    }

    if(!hours) {
        emptyFields.push('hours')
    }

    if(!number) {
        emptyFields.push('number')
    }

    if(!rating) {
        emptyFields.push('rating')
    }

    if(!pricing) {
        emptyFields.push('pricing')
    }

    if(!category) {
        emptyFields.push('category')
    }

    //makes it so user fills out all fields
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }

    //add to db
      try{
          const attraction = await Attraction.create({name, description, address, hours, number, rating, pricing, category})
          res.status(200).json(attraction)
      } catch (error) {
          res.status(400).json({error: error.message})
      }
}





//delete workout
// const deleteWorkout = async (req, res) => {
//     const { id } = req.params

//     if (!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'no such workout'})
//     }

//     const workout = await Workout.findOneAndDelete({_id: id})

//     if(!workout) {
//         return res.status(404).json({error: 'no such workout'})
//     }

//     res.status(200).json(workout)
// }



//update workout
// const updateWorkout = async (req, res) => {
//     const { id } = req.params

//     if (!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'no such workout'})
//     }

//     const workout = await Workout.findOneAndUpdate({_id: id}, {
//         ...req.body
//     });

//     if(!workout) {
//         return res.status(404).json({error: 'no such workout'})
//     };

//     res.status(200).json(workout);
// };



module.exports = {
    getAttractions,
    getAttraction,
    createAttraction
}