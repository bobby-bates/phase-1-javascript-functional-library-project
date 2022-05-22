// Collection Functions (Arrays or Objects)
const myEach = (col, cb) => {
    let colObjCheck
    Array.isArray(col) ? colObjCheck = col : colObjCheck = Object.values(col)
    for(const el of colObjCheck) cb(el)
    return col
}

const myMap = (col, cb) => {
    let colObjCheck
    let returnedArr = []
    Array.isArray(col) ? colObjCheck = col : colObjCheck = Object.values(col)
    for(const el of colObjCheck) returnedArr.push(cb(el))
    return returnedArr
}

const myReduce = (col, cb, acc) => {
    let colObjCheck
    Array.isArray(col) ? colObjCheck = col : colObjCheck = Object.values(col)
    let total
    // TODO: DRY this up!
    if (acc === undefined){
        total = colObjCheck[0]
        for (let i = 1; i < colObjCheck.length; i++) {
            total = cb(total, colObjCheck[i], colObjCheck)
        }
    } else {
        total = acc
        for (let i = 0; i < colObjCheck.length; i++) {
            total = cb(total, colObjCheck[i], colObjCheck)
        }
    }
    return total
}

const myFind = (col, pred) => {
    let colObjCheck
    Array.isArray(col) ? colObjCheck = col : colObjCheck = Object.values(col)
    for(const el of colObjCheck) if(pred(el)) return el
    return undefined
}

const myFilter = (col, pred) => {
    let colObjCheck
    Array.isArray(col) ? colObjCheck = col : colObjCheck = Object.values(col)
    let returnArr = []
    for(const el of colObjCheck) if(pred(el)) returnArr.push(el)
    return returnArr
}

const mySize = col => {
    let colObjCheck
    Array.isArray(col) ? colObjCheck = col : colObjCheck = Object.values(col)
    let count = 0
    for(const el of colObjCheck) count++
    return count
}

// Array Functions:
const myFirst = (arr, n) => {
    return n === undefined ? arr[0] : arr.slice(0, n)
}

const myLast = (arr, n) => {
    return n === undefined ? arr.slice(-1)[0] : arr.slice(-Math.abs(n))
}

// BONUS Functions:
const mySortBy = (arr, cb) => {

}

const myFlatten = (arr, [shallow], newArr=[]) => {

}

// Object Functions:
const myKeys = obj => {
    let keysArr = []
    for(const key in obj) keysArr.push(key)
    return keysArr
}

const myValues = obj => {
    let valuesArr = []
    for(const key in obj) valuesArr.push(obj[key])
    return valuesArr
}