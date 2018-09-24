export function merge (array1, array2) {

    const result = []
    const both = array1.concat(array2)
    let index = both.length
    const newElements = {}

    while (index--) {
        const element = both[index]

        if(!newElements[element]) {
            result.unshift(element)
            newElements[element] = true
        }
    }

    return result
}