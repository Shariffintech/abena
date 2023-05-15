
Strategy.delete_all

Strategy.create!([
    {
        name: "Cognitive Organizer (Mind Maps, Diagrams, Charts, Idea Builders, Lists, etc.)",
        category: 0,
        tier: 0,
        description: "Concrete visual cue which helps to orgaize information and evaluate knowledge and ideas",
        reference: "Mississippi Department of Education",
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    },
    {
        name: "Fidgets",
        category: 0,
        tier: 0,
        description: "Increase focus during cognitive activity with use of fidget items i.e. putty, squishy objects, cubes, etc.",
        reference:"https://thesensorytoolbox.com/fidgets-tools-for-autism-adhd-and-spd/",
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    },

    {
        name: "Opportunities to Swing, Slide, Climb",
        category:"Academic",
        tier: "Tier2",
        description:"Utilize muscles to breath and regulate while increasing balance, coordination and self-drected play",
        reference:"https://www.scholastic.com/teachers/articles/teaching-content/physical-development-swing-slide-climb/",
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    },

    {
        name: "Sensory Memory",
        category: 0,
        tier: 0,
        description:"Increase memory and recall of sensory information",
        reference:"https://www.scholastic.com/teachers/articles/teaching-content/sensory-memory/",
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    },

    {
        name: "Sensory Processing",
        category:0,
        tier: 0,
        description:"Increase processing of sensory information",
        reference:"https://www.scholastic.com/teachers/articles/teaching-content/sensory-processing/",
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    },

    {
        name: "Culturally Sensitive",
        category:0,
        tier: 0,
        description:"Diverse objects and materials in learning environment via language, ethicity, religion, creed and gender",
        reference:"https://www.scholastic.com/teachers/articles",
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"

    },

    { 
        name:"Use of manipulatives",
        category:0,
        tier:0,
        description:"Use objects to teach a skill i.e. math blocks, word charts, counters, clocks, etc.",
        reference:"Behavioral Intervention Guide; retrieved from http://www.vtnea.org",
        created_at: "2018-01-01 00:00:00",
        updated_at: "2018-01-01 00:00:00"
    }


    
    
])

p "Created #{Strategy.count} Strategies"