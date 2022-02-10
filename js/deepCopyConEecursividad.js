function isObjectOrArray(element) {
    let elementIs = 'nothing'
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
    // debugger
    let copySubject
    const subjectIs = isObjectOrArray(subject)

    if (subjectIs === 'array') copySubject = []
    if (subjectIs === 'object') copySubject = {}
    if (!(subjectIs === 'array') && !(subjectIs === 'object')) return subject

    for (const key in subject) {
        const keyIsObject = isObjectOrArray(subject[key])

        if (subjectIs === 'array') copySubject.push(subject[key])
        if (keyIsObject === 'object') copySubject[key] = deepCopy(subject[key])
        if (!(subjectIs === 'array') && !(keyIsObject === 'object')) copySubject[key] = subject[key]
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