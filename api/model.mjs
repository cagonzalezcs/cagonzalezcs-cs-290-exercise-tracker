import mongoose from 'mongoose';

const dbPort = 27017;

/**
 * Prepare the database exercises_db within MongoDB server running locally on port 27017
 */
mongoose.connect(
    `mongodb://localhost:${dbPort}/exercises_db`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
)
    .catch((err) => {
        console.error(err);
    });

/**
 * Connect to the database
 */
const db = mongoose.connection;

/**
 * Once open log that the database has successfully connected to the server console
 */
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose')
});

/**
 * Define the schema for an Exercise table
 */
const exerciseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

/**
 * Build the Exercise table based on the schema defined above.
 */
const Exercise = mongoose.model('Exercise', exerciseSchema);

/**
 * Create an Exercise entry
 *
 * @param {String} name
 * @param {Number} reps
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date
 * @returns {Promise}
 */
const createExercise = async (
    name,
    reps,
    weight,
    unit,
    date
) => {
    const result = await new Exercise({
        name,
        reps,
        weight,
        unit,
        date
    });

    return result.save();
}

/**
 * Retrieve all Exercises in the database
 *
 * @returns {QueryWithHelpers}
 */
const retrieveExercises = async () => {
    return await Exercise.find().exec();
}

/**
 * Replace an Exercise entry
 *
 * @param {String} _id
 * @param {String} name
 * @param {Number} reps
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date
 * @returns {Promise}
 */
const replaceExercise = async (
    _id,
    name,
    reps,
    weight,
    unit,
    date
) => {
    const result = await Exercise.replaceOne({ _id },
        {
            name,
            reps,
            weight,
            unit,
            date
        }
    );

    return result.nModified;
};

/**
 * Delete an Exercise entry
 *
 * @param _id
 * @returns {Promise}
 */
const deleteExercise = async (_id) => {
    const result = await Exercise.deleteOne({ _id });

    return result.deletedCount;
};

export { createExercise, retrieveExercises, replaceExercise, deleteExercise }