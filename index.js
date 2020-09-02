// Code your solution here
function findMatching(array, string) {
    return array.filter(name => {
        if(name.toLowerCase() === string.toLowerCase())
        return name
    })
}
findMatching(drivers, name)

function fuzzyMatch(array, string) {
    return array.filter(name => {
        if(name.startsWith(string))
        return name
    })
}
fuzzyMatch(drivers, string)

function matchName(array, string) {
    return array.filter(driver => {
        if(driver.name === string)
        return driver
    })
}
matchName(drivers, string)