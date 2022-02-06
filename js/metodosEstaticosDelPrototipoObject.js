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

console.group('keys')
console.log(Object.keys(juan))
console.groupEnd()

console.group('getOwnPropertyNames')
console.log(Object.getOwnPropertyNames(juan))
console.groupEnd()

console.group('entries')
console.log(Object.entries(juan))
console.groupEnd()

console.group('getOwnPropertyDescriptors')
console.log(Object.getOwnPropertyDescriptors(juan))
console.groupEnd()

Object.defineProperties(juan, 'pruebaNASA', {
    value: 'extraterrestres',
    writeble: true,
    enumerable: true,
    configurable: true
})
