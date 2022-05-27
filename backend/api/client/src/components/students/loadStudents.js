import React from "react";
import "bulma/css/bulma.min.css";
import Student from "./student";
// import { getStudents } from "../../actions/actions";

export default function loadStudent(props) {

  // load all students belonging to user
  // pass those students to the student component

  // show students as a pool of moving cards

  // to do map all students to a student card


  // const dispatch = useDispatch();
  // const students = useSelector(state => state.students);
  // const [students, setStudents] = useState([]);

  //   useEffect(() => {
  //       dispatch(getStudents())
  //     }, []);


  const students = [
    
      {
        id: 1,
        fullname: "Shawna Starling",
        overall_concern: "Anxiety Disorder- Autism 1",
        funding_stream: "CCIS/Non-Program",
        sleeping_pattern: "Takes naps",
        prior_school: "Abbot Academy",
        team: "Dad",
        strategies: "None",
      },
      {
        id: 2,
        fullname: "Darla Starling",
        overall_concern: "Anxiety Disorder- Autism 3",
        funding_stream: "CCIS/Non-Program",
        sleeping_pattern: "Does not take naps",
        prior_school: "Abbot Academy",
        team: "Mom",
        strategies: "None",
      }
  
  ];
  return (
    <section>
      {students.map((student) => (
        <Student
          key={student.id}
          fullname={student.fullname}
          overall_concern={student.overall_concern}
          funding_stream={student.funding_stream}
          sleeping_pattern={student.sleeping_pattern}
          prior_school={student.prior_school}
          team={student.team}
          strategies={student.strategies}
        />
      ))}
    </section>
  );
}
