import  React from "react";
import { Link } from "react-router-dom";
import {addStudent, deleteStudent,getStudents, updateStudent} from "../../actions/actions";
import 'bulma/css/bulma.min.css';
import {Card} from "react-bulma-components";


export default function Student() {

    return (

        <div className="students-container">
            <Card>
                <Card.Image></Card.Image>
            <h1>Students</h1>
            <p>
                <Link to="/students/new">Add a new student</Link>
            </p>
            <p>
                <Link to="/students/1">Student 1</Link>
            </p>
            </Card>
            
        </div>
    );


    function mapDispatchToProps(dispatch) {
        return {
            addStudent: student => dispatch(addStudent(student)),
            deleteStudent: id => dispatch(deleteStudent(id)),
            getStudents: () => dispatch(getStudents()),
            updateStudent: student => dispatch(updateStudent(student))
        };
    }
}

// to do populate students in classroom associated with teacher

