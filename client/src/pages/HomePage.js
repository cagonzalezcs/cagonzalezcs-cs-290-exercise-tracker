import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ExercisesTable from '../components/ExercisesTable';

function HomePage({ setEditedExercise }) {
    const [exercises, setExercises] = useState(null);
    const routeHistory = useHistory();

    const onEditExercise = (exercise) => {
        setEditedExercise(exercise);
        routeHistory.push('/edit')
    };

    const onDeleteExercise = async (_id) => {
        const response = await fetch(
            `/exercises/${ _id }`,
            { method: 'DELETE' }
        );

        if (response.status === 204) {
            setExercises(exercises.filter((exercise) => exercise._id !== _id));
            return;
        }

        console.error(`Failed to delete exercise with _id = ${ _id }, status code = ${ response.status }`);
    };

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    };

    useEffect(() => {
        loadExercises()
            .catch((error) => {
                console.error(`Error Fetching Exercises: ${ error }`)
            });
    }, []);

    return (
        <>
            { exercises ?
                <div className="home">
                    { exercises.length ?
                        <ExercisesTable exercises={ exercises }
                                        onEditExercise={ onEditExercise }
                                        onDeleteExercise={ onDeleteExercise }
                        /> :
                        <div className="home__no-results">
                            <h2 className="home__no-results-title">
                                You have not logged any exercises
                            </h2>
                            <Link className="home__no-results-button app__button" to="/create">
                                Add an Exercise
                            </Link>
                        </div>
                    }
                </div>
                : null
            }

        </>
    );
}

export default HomePage;