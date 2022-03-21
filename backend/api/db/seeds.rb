

Strategy.create!([
    {
        name: "Cognitive Organizer (Mind Maps, Diagrams, Charts, Idea Builders, Lists, etc.)",
        category: "Academic",
        tier: "Tier1",
        description: "Concrete visual cue which helps to orgaize information and evaluate knowledge and ideas",
        reference: "Mississippi Department of Education",
        students_id: null,
        classrooms_id: null,
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    },
    {
        name: "Fidgets",
        category:{"Academic"=>0, "Social"=>1, "Emotional"=>2, "Behavioral"=>3, "Developmental"=>4},
        tier:{ "Tier1":0, "Tier2":1, "Tier3":2},
        description: "Increase focus during cognitive activity with use of fidget items i.e. putty, squishy objects, cubes, etc.",
        reference:"https://thesensorytoolbox.com/fidgets-tools-for-autism-adhd-and-spd/",
        students_id: null,
        classrooms_id: null,
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    },

    {
        name: "Opportunities to Swing, Slide, Climb",
        category:{"Academic"=>0, "Social"=>1, "Emotional"=>2, "Behavioral"=>3, "Developmental"=>4},
        tier: {"Tier1":0, "Tier2":1, "Tier3":2},
        description:"Utilize muscles to breath and regulate while increasing balance, coordination and self-drected play",
        reference:"https://www.scholastic.com/teachers/articles/teaching-content/physical-development-swing-slide-climb/",
        students_id: null,
        classrooms_id: null,
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    },

    {
        name: "Sensory Memory",
            category:{"Academic"=>0, "Social"=>1, "Emotional"=>2, "Behavioral"=>3, "Developmental"=>4},
        tier: {"Tier1":0, "Tier2":1, "Tier3":2},
        description:"Increase memory and recall of sensory information",
        reference:"https://www.scholastic.com/teachers/articles/teaching-content/sensory-memory/",
        students_id: null,
        classrooms_id: null,
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    },

    {
        name: "Sensory Processing",
        category:{"Academic"=>0, "Social"=>1, "Emotional"=>2, "Behavioral"=>3, "Developmental"=>4},
        tier:{"Tier1":0, "Tier2":1, "Tier3":2},
        description:"Increase processing of sensory information",
        reference:"https://www.scholastic.com/teachers/articles/teaching-content/sensory-processing/",
        students_id: null,
        classrooms_id: null,
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    },

    {
        name: "Culturally Sensitive",
        category:{"Academic"=>0, "Social"=>1, "Emotional"=>2, "Behavioral"=>3, "Developmental"=>4},
        tier: {"Tier1":0, "Tier2":1, "Tier3":2},
        description:"Diverse objects and materials in learning environment via language, ethicity, religion, creed and gender",
        reference:null,
        students_id: null,
        classrooms_id: null,
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"

    },

    { 
        name:"Use of manipulatives",
        category:"Academic",
        tier:"Tier1",
        description:"Use objects to teach a skill i.e. math blocks, word charts, counters, clocks, etc.",
        reference:"Behavioral Intervention Guide; retrieved from http://www.vtnea.org",
        students_id: null,
        classrooms_id: null,
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    }


    
    
])

p "Created #{Strategies.count} Strategies"