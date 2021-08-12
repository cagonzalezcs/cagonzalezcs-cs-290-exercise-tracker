import express from 'express';
import * as exercises from './model.mjs';

const app = express();
const port = 3000;

app.use(express.json());

/**
 * Set POST route for creating an exercise
 */
app.post('/exercises', (req, res) => {
    const data = req.body;

    exercises.createExercise(
        data.name,
        data.reps,
        data.weight,
        data.unit,
        data.date
    )
        .then((exerciseData) => {
            res.status(201).json(exerciseData);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ Error: `Request Failed: ${error}` });
        });
});

/**
 * Set GET route for retrieving all exercises
 */
app.get('/exercises', (req, res) => {
    exercises.retrieveExercises()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ Error: `Request Failed: ${error}`})
        });
});

/**
 * Set PUT route for replacing an exercise in the database
 */
app.put('/exercises/:_id', (req, res) => {
    const data = req.body;

    exercises.replaceExercise(
        req.params._id,
        data.name,
        data.reps,
        data.weight,
        data.unit,
        data.date
    )
        .then((numberUpdated) => {
            if (numberUpdated) {
                return res.status(200).json({
                    _id: req.params._id,
                    name: data.name,
                    reps: data.reps,
                    weight: data.weight,
                    unit: data.unit,
                    date: data.date
                });
            }

            res.status(404).json({ Error: `Request Failed: Resource not found`})
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ Error: `Request Failed: ${error}`})
        });
});

app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteExercise(req.params._id)
        .then((numberDeleted) => {
            if (numberDeleted) {
                return res.status(204).send();
            }

            res.status(404).json({ Error: 'Request Failed: Resource not found'})
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ Error: `Request Failed: ${error}`})
        });
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});