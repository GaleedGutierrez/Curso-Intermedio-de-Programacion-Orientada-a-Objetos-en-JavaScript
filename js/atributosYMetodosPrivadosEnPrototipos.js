
const requieredParam = param => {throw new Error(`${param} es obligatorio`)}

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

    const private = {
        "_learningPaths": []
    }

    Object.defineProperty(this, 'learningPaths', 
        {
            get() {
                return private['_learningPaths']
            },

            set (newLp) {
                if (newLp instanceof LearningPaths) {
                    private['_learningPaths'].push(newLp)
                } else {
                    console.warn('Alguno de los LPs no es una instancia del prototipo Learning Path.')
                }
            },
            configurable: false
        }
    )

    for (const learningPathIndex in learningPaths) {
        this.learningPaths = learningPaths[learningPathIndex] 
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
            // {name: "Escuela de Impostor", courses:[]}
        ]
    }
)