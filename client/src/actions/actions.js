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

// strategy actions

const setStrategies = (strategies) => {
  return {
    type: SET_STRATEGIES,
    payload: strategies,
  };
}


// export const getStrategies = () => {

//   return (dispatch) => {
//     fetch("http://localhost:3000/strategies")
//       .then((r) => r.json())
//       .then((data) => dispatch(setStrategies(data)));
//   };

// }

const addStrategy = (strategy) => {
  return {
    type: ADD_STRATEGY,
    payload: strategy,
  };
}

export const createStrategy = (formData) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/strategies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((strategy) => dispatch(addStrategy(strategy)));
      } else {
        r.json().then((err) => console.error(err));
      }
    });
  }

}

const editStrategy = (strategy) => {
  return {
    type: EDIT_STRATEGY,
    payload: strategy,
  };
}

export const updateStrategy = (strategies) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/strategies/${strategies.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(strategies),
    })
      .then((r) => {
        if (r.ok) {
          // add student to redux
          r.json().then((p) => dispatch(editStrategy(p)));
        } else {
          r.json().then((err) => console.error(err));
        }
      })
      .catch((err) => console.log(err));
  };

}


const setComments= (comments) => {
  return {
    type: SET_COMMENTS,
    payload: comments,
  };
}

export const getComments = (strategies) => {
  
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/strategies/${strategies.id}/comments`)
        .then((r) => r.json())
        .then((data) => dispatch(setComments(data)));
    };
  
  }


const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
}


export const createComment = (strategies, comment) => {
    
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/strategies/${strategies.id}/comments/${comment.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(strategies),
      }).then((r) => {
        if (r.ok) {
          r.json().then((comment) => dispatch(addComment(comment)));
        } else {
          r.json().then((err) => console.error(err));
        }
      });
    }
  
  }

export const updateComment = (strategies, comment) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/strategies/${strategies.id}/comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((r) => {
        if (r.ok) {
          // add student to redux
          r.json().then((p) => dispatch(editComment(p)));
        } else {
          r.json().then((err) => console.error(err));
        }
      })
      .catch((err) => console.log(err));
  };

}


const editComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    payload: comment,
  };
}


const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    payload: id,
  };
}


export const destroyComment = (strategies, comment) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/strategies/${strategies.id}/comments/${comment.id}`, {
      method: "DELETE",
    }).then((r) => dispatch(deleteComment(id)));
  };
}


const setNotes = (notes) => {
  return {
    type: SET_NOTES,
    payload: notes,
  };
}

export const getNotes = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/notes")
      .then((r) => r.json())
      .then((data) => dispatch(setNotes(data)));
  };
}

const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
}

export const createNote = (formData) => {
  return (dispatch) => {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((note) => dispatch(addNote(note)));
      } else {
        r.json().then((err) => console.error(err));
      }
    });
  }
}


const editNote = (note) => {
  return {
    type: EDIT_NOTE,
    payload: note,
  };
}


const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}


export const destroyNote = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
    }).then((r) => dispatch(deleteNote(id)));
  };
}


const setClassroom = (classroom) => {
  return {
    type: SET_CLASSROOMS,
    payload: classroom,
  };
}


export const getClassroom = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/classrooms")
      .then((r) => r.json())
      .then((data) => dispatch(setClassroom(data)));
  };
}

const addClassroom = (classroom) => {
  return {
    type: ADD_CLASSROOM,
    payload: classroom,
  };
}

export const createClassroom = (formData) => {
  return (dispatch) => {
    fetch("http://localhost:3000/classrooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((classroom) => dispatch(addClassroom(classroom)));
      } else {
        r.json().then((err) => console.error(err));
      }
    });
  }
}

const editClassroom = (classroom) => {
  return {
    type: EDIT_CLASSROOM,
    payload: classroom,
  };
}

export const updateClassroom = (classroom) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/classrooms/${classroom.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(classroom),
    })
      .then((r) => {
        if (r.ok) {
          // add student to redux
          r.json().then((p) => dispatch(editClassroom(p)));
        } else {
          r.json().then((err) => console.error(err));
        }
      })
      .catch((err) => console.log(err));
  };
}

const deleteClassroom = (id) => {
  return {
    type: DELETE_CLASSROOM,
    payload: id,
  };
}


export const destroyClassroom = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/classrooms/${id}`, {
      method: "DELETE",
    }).then((r) => dispatch(deleteClassroom(id)));
  };
}


