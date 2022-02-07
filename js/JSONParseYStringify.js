const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e:'e'
    },

    editA () {
        this.a = 'AAAAAAAAAA'
    }
}

const stringfiedComplexObj = JSON.stringify(obj1)
const obj2 = JSON.parse(stringfiedComplexObj)
