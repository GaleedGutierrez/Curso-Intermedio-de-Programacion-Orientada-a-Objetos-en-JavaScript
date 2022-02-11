const badWords = ['HDP', 'CSM', 'CTM', 'LPQTP']

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
        changeName (newName) {
            const nameOk = badWords.some( word => newName === word ) 
            !nameOk 
                ? private['#name'] = newName
                : console.error( `"${newName}" es una mala palabra, cambiala.` )
        },
        readName () {
            return private['#name']
        }
    }

    Object.defineProperty(public, 'readName',
        {
            configurable: false,
            writable: false
        }
    )

    Object.defineProperty(public, 'changeName',
        {
            configurable: false,
            writable: false
        }
    )

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