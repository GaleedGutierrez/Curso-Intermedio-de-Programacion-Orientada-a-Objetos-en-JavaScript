const juan = {
    name: 'Juanito',
    age: 18,
    approvedCourses: ['Curso 1'],

    addCourse (newCourse) { 
        console.log('This', this)
        console.log('This approvedCourses', this.approvedCourses)
        this.approvedCourses.push(newCourse) 
    },
}

Object.defineProperty(juan, 'pruevaNasa', {
    value: 'extraterrestres',
    enumerable: false,
    writable: false,
    configurable: false
})

Object.defineProperty(juan, 'navigator', {
    value: 'Chrome',
    enumerable: false,
    writable: true,
    configurable: true
})

Object.defineProperty(juan, 'editor', {
    value: 'VSCode',
    enumerable: true,
    writable: false,
    configurable: true
})

Object.defineProperty(juan, 'terminal', {
    value: 'WSL',
    enumerable: true,
    writable: true,
    configurable: false
})

// Object.seal(juan)
// Object.freeze(juan)

console.group('getOwnPropertyDescriptors')
console.log(Object.getOwnPropertyDescriptors(juan))
console.groupEnd()