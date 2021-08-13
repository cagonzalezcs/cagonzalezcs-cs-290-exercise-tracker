import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreatePage() {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');
    const routeHistory = useHistory();

    const createExercise = async (event) => {
        event.preventDefault();

        const newExercise = {
            name,
            reps,
            weight,
            unit,
            date
        };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 201) {
            alert('Successfully added exercise');
        } else {
            alert(`Failed to create exercise, status code = ${ response.status }`);
        }

        routeHistory.push('/');
    }

    return (
        <div className="create">
            <form className="create__form app__form" onSubmit={ createExercise }>
                <label className="create__label app__label" htmlFor="create-exercise-name">
                    Name
                    <input
                        type="text"
                        id="create-exercise-name"
                        className="create__input app__input"
                        value={ name }
                        onChange={ e => setName(e.target.value) }
                    />
                </label>
                <label className="create__label app__label" htmlFor="create-exercise-reps">
                    Reps
                    <input
                        type="number"
                        id="create-exercise-reps"
                        className="create__input app__input"
                        value={ reps }
                        onChange={ e => setReps(e.target.value) }
                    />
                </label>
                <label className="create__label app__label" htmlFor="create-exercise-weight">
                    Weight
                    <input
                        type="number"
                        id="create-exercise-weight"
                        className="create__input app__input"
                        value={ weight }
                        onChange={ e => setWeight(e.target.value) }
                    />
                </label>
                <label className="create__label app__label" htmlFor="create-exercise-unit">
                    Unit
                    <select
                        id="create-exercise-unit"
                        className="create__select app__select"
                        value={ unit }
                        onChange={ e => setUnit(e.target.value) }
                    >
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                    </select>
                </label>
                <label className="create__label app__label" htmlFor="create-exercise-name">
                    Date
                    <input
                        type="text"
                        id="create-exercise-name"
                        className="create__input app__input"
                        value={ date }
                        onChange={ e => setDate(e.target.value) }
                    />
                </label>
                <input
                    type="submit"
                    value="Submit"
                    className="create__submit app__button"
                />
            </form>
        </div>
    );
}

export default CreatePage;