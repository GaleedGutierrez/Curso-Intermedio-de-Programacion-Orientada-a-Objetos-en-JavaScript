function isObjectOrArray(element) {
    let elementIs = 'anything'
    const typeElement = Object.prototype.toString.call(element)

    switch (typeElement) {
        case '[object Object]':
            elementIs = 'object'
            break
        case '[object Array]':
            elementIs = 'array'
            break
    }

    return elementIs;
}

function deepCopy (subject) {
    let copySubject
    const subjectIs = isObjectOrArray(subject)

    if (subjectIs === 'array') copySubject = []
    if (subjectIs === 'object') copySubject = {}
    if (subjectIs === 'anything') return subject

    for (const key in subject) {
        const keyIsObject = isObjectOrArray(subject[key])

        if (subjectIs === 'array') copySubject.push(subject[key])
        if (keyIsObject === 'object') copySubject[key] = deepCopy(subject[key])
        if (keyIsObject === 'anything') copySubject[key] = subject[key]
    }

    return copySubject
}

const studenBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instragram: undefined,
        facebook: undefined
    }
}

const juan = deepCopy(studenBase)
// Object.defineProperty(juan, 'name', 
//     {
//         value: 'Juanito',
//         configurable: false,
//         writable
//     }
// )
// Object.seal(juan)
Object.freeze(juan)

juan.name = 'Juan'