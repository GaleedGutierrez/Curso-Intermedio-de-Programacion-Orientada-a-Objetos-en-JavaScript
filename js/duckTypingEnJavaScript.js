const isArray = array => Array.isArray(array);

function createStudent 
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
        '#name': name,
        '#learningPaths': learningPaths,
    }

    const public = {
        age,
        email,
        approveCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },

        get name () {
            return private['#name']
        },

        set name(newName) {
            newName.length !== 0
                ? private['#name'] = newName
                : console.warn( `Tu nombre debe tener al menos un carácter.` )
        },

        get learningPaths () {
            return private['#learningPaths']
        },

        set learningPaths(newLearningPaths) {
            if (!newLearningPaths.name) { 
                console.warn('Tu Learning Path no tiene la propiedad name')
                return
            }

            if (!newLearningPaths.courses) {
                console.warn('Tu Learning Path no tiene courses')
                return
            }

            if (!isArray(newLearningPaths.courses)) {
                console.warn('Tu Learning Path no es una lista cursos')
                return
            }

            private['#learningPaths'].push(newLearningPaths)
        },
    }

    return public
}

function createLearningPaths (
    {
        name = requieredParam("name"),
        courses = [],
    }
) 
{
    const private = {
        "#name": name,
        "#courses": courses
    }

    const public = {
        get name () {
            return private['#name']
        },

        set name(newName) {
            newName.length !== 0
                ? private['#name'] = newName
                : console.warn( `Tu nombre debe tener al menos un carácter.` )
        },

        get courses () {
            return private['#courses']
        },
    }

    return public
}

function requieredParam (param) {
    throw new Error(`${param} es obligatorio`)
}

const juan = createStudent(
    {
        name: 'Juanito',
        age: 18,
        email: 'juanito@juanito.com',
        twitter: 'fjuand'
    }
)