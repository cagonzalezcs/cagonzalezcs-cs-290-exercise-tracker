import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditPage({ editedExercise }) {
    const [name, setName] = useState(editedExercise.name);
    const [reps, setReps] = useState(editedExercise.reps);
    const [weight, setWeight] = useState(editedExercise.weight);
    const [unit, setUnit] = useState(editedExercise.unit);
    const [date, setDate] = useState(editedExercise.date);
    const routeHistory = useHistory();

    const editExercise = async (event) => {
        event.preventDefault();

        const newExercise = {
            name,
            reps,
            weight,
            unit,
            date
        }
        const response = await fetch(`/exercises/${ editedExercise._id }`, {
            method: 'PUT',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            alert('Successfully edited exercise');
        } else {
            alert(`Failed to edit exercise, status code = ${ response.status }`);
        }

        routeHistory.push('/');
    }

    return (
        <div className="edit">
            <form className="edit__form app__form" onSubmit={ editExercise }>
                <label className="edit__label app__label" htmlFor="edit-exercise-name">
                    Name
                    <input
                        className="edit__input app__input"
                        type="text"
                        id="edit-exercise-name"
                        value={ name }
                        onChange={ e => setName(e.target.value) }
                    />
                </label>
                <label className="edit__label app__label" htmlFor="edit-exercise-reps">
                    Reps
                    <input
                        className="edit__input app__input"
                        type="number"
                        id="edit-exercise-reps"
                        value={ reps }
                        onChange={ e => setReps(e.target.value) }
                    />
                </label>
                <label className="edit__label app__label" htmlFor="edit-exercise-weight">
                    Weight
                    <input
                        className="edit__input app__input"
                        type="number"
                        id="edit-exercise-weight"
                        value={ weight }
                        onChange={ e => setWeight(e.target.value) }
                    />
                </label>
                <label className="edit__label app__label" htmlFor="edit-exercise-unit">
                    Unit
                    <select
                        className="edit__select app__select"
                        id="edit-exercise-unit"
                        value={ unit }
                        onChange={ e => setUnit(e.target.value) }
                    >
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                    </select>
                </label>
                <label className="edit__label app__label" htmlFor="edit-exercise-name">
                    Date
                    <input
                        className="edit__input app__input"
                        type="text"
                        id="edit-exercise-name"
                        value={ date }
                        onChange={ e => setDate(e.target.value) }
                    />
                </label>
                <input
                    className="edit__submit app__button"
                    type="submit"
                    value="Submit"/>
            </form>
        </div>
    );
}

export default EditPage;