import ExercisesTableRow from './ExercisesTableRow';

function ExercisesTable({ exercises, onEditExercise, onDeleteExercise }) {
    return (
        <table className="exercise-table">
            <thead className="exercise-table__head">
            <tr className="exercise-table__head-row">
                <th className="exercise-table__head-column">
                    Name
                </th>
                <th className="exercise-table__head-column">
                    Reps
                </th>
                <th className="exercise-table__head-column">
                    Weight
                </th>
                <th className="exercise-table__head-column">
                    Unit
                </th>
                <th className="exercise-table__head-column">
                    Date
                </th>
                <th className="exercise-table__head-column">
                    Edit
                </th>
                <th className="exercise-table__head-column">
                    Delete
                </th>
            </tr>
            </thead>
            <tbody>
            { exercises.map((exercise) => {
                return (
                    <ExercisesTableRow
                        exercise={ exercise }
                        onEditExercise={ onEditExercise }
                        onDeleteExercise={ onDeleteExercise }
                        key={ exercise._id }
                    />
                )
            }) }
            </tbody>
        </table>
    );
}

export default ExercisesTable;
