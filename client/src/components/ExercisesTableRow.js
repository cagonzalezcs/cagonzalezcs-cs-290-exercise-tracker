import { GrEdit, GrFormTrash } from 'react-icons/gr';

function ExercisesTableRow({ exercise, onEditExercise, onDeleteExercise }) {
    return (
        <tr className="exercise-table-row">
            <td className="exercise-table-row__column">
                { exercise.name }
            </td>
            <td className="exercise-table-row__column">
                { exercise.reps }
            </td>
            <td className="exercise-table-row__column">
                { exercise.weight }
            </td>
            <td className="exercise-table-row__column">
                { exercise.unit }
            </td>
            <td className="exercise-table-row__column">
                { exercise.date }
            </td>
            <td className="exercise-table-row__column">
                <GrEdit onClick={ () => onEditExercise(exercise) }/>
            </td>
            <td className="exercise-table-row__column">
                <GrFormTrash onClick={ () => onDeleteExercise(exercise._id) }/>
            </td>
        </tr>
    );
}

export default ExercisesTableRow;