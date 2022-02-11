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
        '#name': name
    }

    const public = {
        age,
        email,
        approveCourses,
        learningPaths,
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