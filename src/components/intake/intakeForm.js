import { useState } from "react";
// to do: add chat function with twilio record parent, teacher convo when completing this form
export default function IntakeForm(addStudent) {
    const [full_name, setName] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(full_name);

        addStudent({
            full_name: "",
            date_of_birth: "",
            student_age: "",
            team: [""],
            region: "",
            current_school: "",
            current_school_contact: "",
            room_number: "",
            prior_academies: [""],
            overall_concern: [""],
            primary_concern: "",
            sleeping_patterns: "",
            funding_stream: "",
            notes: [""],
            created_at: "",
        });

        setName("");

        return <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={full_name}
                onChange={(e) => setName(e.target.value)}
            />
            <button>Submit</button>
        </form>
       
    }
}