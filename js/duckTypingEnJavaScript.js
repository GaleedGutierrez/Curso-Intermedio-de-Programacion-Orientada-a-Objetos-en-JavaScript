const isArray = array => Array.isArray(array);

function Student 
    (
        {
            name = requieredParam ('name'), 
            email = requieredParam ('email'), 
            age, 
            twitter,
            instagram,
            facebook,
            approveCourses = [],
            learningPaths = []

        } = {}
    ) 
{

    if (isArray(learningPaths)) {
        this.learningPaths = []
        for (const learningPathIndex in learningPaths) {
            if (learningPaths[learningPathIndex] instanceof LearningPaths) {
                this.learningPaths.push(learningPaths[learningPathIndex])
            }
        }
    }
        
    this.name = name
    this.emai = email
    this.age = age
    this.approveCourses = approveCourses
    this.socialMedia = {
        twitter, 
        instagram,
        facebook, 
    }
}

function LearningPaths (
    {
        name = requieredParam("name"),
        courses = [],
    }
) 
{
    this.name = name
    this.courses = courses
}

function requieredParam (param) {
    throw new Error(`${param} es obligatorio`)
}

const escuelaWeb = new LearningPaths({name: "Escuela de Desarrollo Web", courses:[]})
const escuelaData = new LearningPaths({name: "Escuela de Data Science", courses:[]})

const juan = new Student(
    {
        name: 'Juanito',
        age: 18,
        email: 'juanito@juanito.com',
        twitter: 'fjuand',
        learningPaths: [
            escuelaWeb,
            escuelaData,
            {name: "Escuela de Impostor", courses:[]}
        ]
    }
)