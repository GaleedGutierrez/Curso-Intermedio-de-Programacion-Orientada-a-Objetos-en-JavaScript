const isObject = subject => (typeof subject) === 'object'

const isArray = subject => Array.isArray(subject)

function deepCopy (subject) {
    debugger
    let copySubject
    const subjectIsArray = isArray(subject)
    const subjectIsObject = isObject(subject)

    if (subjectIsArray) copySubject = []
    if (subjectIsObject && !subjectIsArray) copySubject = {}
    if (!subjectIsObject && !subjectIsArray) return subject

    for (const key in subject) {
        const keyIsObject = isObject(subject[key])

        if (subjectIsArray) copySubject.push(subject[key])
        if (keyIsObject && !subjectIsArray) copySubject[key] = deepCopy(subject[key])
        if (!keyIsObject && !subjectIsArray) copySubject[key] = subject[key]
    }

    return copySubject
}

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e:'e'
    },

    f: [1, 2, 3, 4, 5],

    editA () {
        this.a = 'AAAAAAAAAA'
    }
}

const obj2 = deepCopy(obj1)