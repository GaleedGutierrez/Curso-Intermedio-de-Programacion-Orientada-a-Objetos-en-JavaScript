// class SuperObject {
//     static isObjectOrArray(element) {
//         let elementIs = 'anything'
//         const typeElement = Object.prototype.toString.call(element)
    
//         switch (typeElement) {
//             case '[object Object]':
//                 elementIs = 'object'
//                 break
//             case '[object Array]':
//                 elementIs = 'array'
//                 break
//         }
    
//         return elementIs;
//     }

//     static deepCopy () {
//         let copySubject
//         const subjectIs = isObjectOrArray(subject)

//         if (subjectIs === 'array') copySubject = []
//         if (subjectIs === 'object') copySubject = {}
//         if (subjectIs === 'anything') return subject

//         for (const key in subject) {
//             const keyIsObject = isObjectOrArray(subject[key])

//             if (subjectIs === 'array') copySubject.push(subject[key])
//             if (keyIsObject === 'object') copySubject[key] = deepCopy(subject[key])
//             if (keyIsObject === 'anything') copySubject[key] = subject[key]
//         }

//         return copySubject
//     }
// }

function SuperObject() {}

SuperObject.isObjectOrArray = function (element) {
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

SuperObject.deepCopy = function (subject) {
    let copySubject
    const subjectIs = SuperObject.isObjectOrArray(subject)

    if (subjectIs === 'array') copySubject = []
    if (subjectIs === 'object') copySubject = {}
    if (subjectIs === 'anything') return subject

    for (const key in subject) {
        const keyIsObject = SuperObject.isObjectOrArray(subject[key])

        if (subjectIs === 'array') copySubject.push(subject[key])
        if (keyIsObject === 'object') copySubject[key] = SuperObject.deepCopy(subject[key])
        if (keyIsObject === 'anything') copySubject[key] = subject[key]
    }

    return copySubject
}