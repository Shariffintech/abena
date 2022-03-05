import { SET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT, SET_STARSHIPS, ADD_STARSHIP, EDIT_STARSHIP, DELETE_STARSHIP } from "./actionTypes"

// STUDENTS ACTIONS

const setSTUDENTS = (students) => {
  return {
    type: SET_STUDENTS,
    payload: students
  }
}

const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student
  }
}

const editStudent = student => {
  return {
    type: EDIT_STUDENT,
    payload: student
  }
}

const deletestudent = id => {
  return {
    type: DELETE_STUDENT,
    payload: id
  }
}

export const fetchSTUDENTS = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/students")
    .then(r => r.json())
    .then(data => dispatch(setStudents(data)))
  }
}

export const createStudent = (formData) => {
  return dispatch => {
    fetch("http://localhost:3000/students", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if(r.ok){
        r.json().then(student => dispatch(addStudent(student)))
      } else {
        r.json().then(err => console.error(err))
      }
    })
  }
}

export const updateStudent = student => {
  return dispatch => {
    fetch(`http://localhost:3000/students/${student.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(student)
    })
    .then(r => {
      if (r.ok){
        // add student to redux
        r.json().then(p => dispatch(editStudent(p)))
      } else {
        r.json().then(err => console.error(err))
      }
    })
    .catch(err => console.log(err))
  }
}

export const destroyStudent = id => {
  return dispatch => {
    fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE"
    })
    .then(r => dispatch(deleteStudent(id)))
  }
}

// STARSHIPS ACTION CREATORS

const setStarships = starships => ({type: SET_STARSHIPS, payload: starships})
const addStarship = starship => ({type: ADD_STARSHIP, payload: starship})
const editStarship = starship => ({type: EDIT_STARSHIP, payload: starship})
const deleteStarship = id => ({type: DELETE_STARSHIP, payload: id})

export const fetchStarships = () => {
  return dispatch => {
    fetch("http://localhost:3000/starships")
    .then(r => r.json())
    .then(starships => dispatch(setStarships(starships)))
    .catch(err => console.error(err))
  }
}

export const createStarship = starship => {
  return dispatch => {
    fetch("http://localhost:3000/starships", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(starship)
    })
    .then(r => {
      if (r.ok){
        r.json().then(starship => dispatch(addStarship(starship)))
      } else {
        r.json().then(err => console.error(err))
      }
    })
    .catch(err => console.error(err))
  }
}

export const updateStarship = starship => {
  return dispatch => {
    fetch(`http://localhost:3000/starships/${starship.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(starship)
    })
    .then(r => {
      if (r.ok){
        r.json().then(starship => dispatch(editStarship(starship)))
      } else {
        r.json().then(err => console.error(err))
      }
    })
    .catch(err => console.error(err))
  }
}

export const destroyStarship = id => {
  return dispatch => {
    fetch(`http://localhost:3000/starships/${id}`, {
      method: "DELETE"
    })
    .then(r => {
      dispatch(deleteStarship(id))
    })
    .catch(err => console.error(err))
  }
}