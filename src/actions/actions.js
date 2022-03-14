import {
  SET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
} from "./actionTypes";

// STUDENTS ACTIONS

const setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    payload: students,
  };
};

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};

const editStudent = (student) => {
  return {
    type: EDIT_STUDENT,
    payload: student,
  };
};

export const deleteStudent = (id) => {
  return {
    type: DELETE_STUDENT,
    payload: id,
  };
};

export const getStudents = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/students")
      .then((r) => r.json())
      .then((data) => dispatch(setStudents(data)));
  };
};

export const createStudent = (formData) => {
  return (dispatch) => {
    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((student) => dispatch(addStudent(student)));
      } else {
        r.json().then((err) => console.error(err));
      }
    });
  };
};

export const updateStudent = (student) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/students/${student.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((r) => {
        if (r.ok) {
          // add student to redux
          r.json().then((p) => dispatch(editStudent(p)));
        } else {
          r.json().then((err) => console.error(err));
        }
      })
      .catch((err) => console.log(err));
  };
};

export const destroyStudent = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    }).then((r) => dispatch(deleteStudent(id)));
  };
};
