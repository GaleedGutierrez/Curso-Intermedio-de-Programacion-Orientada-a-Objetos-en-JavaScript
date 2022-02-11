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
    return {
        name,
        age,
        email,
        socialMedia: {
            twitter,
            instagram,
            facebook
        }
    }
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