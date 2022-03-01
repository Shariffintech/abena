import { useState } from "react";

export default function IntakeForm(addStudent) {
    const [full_name, setName] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(full_name);

        addStudent({
            full_name: "",
            date_of_birth: "",
            age_of_child: "",
            team: [""],
            region: "",
            current_school: "",
            current_school_leadership: "",
            room_number: "",
            prior_academies: [""],
            overall_concern: [""],
            primary_concern: "",
            sleeping_patterns: "",
            funding_streams: "",
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