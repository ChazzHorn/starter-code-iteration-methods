// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const activeUser = users.filter(function(user){
    return user.isActive === true
})
printKata(1, activeUser)

const userEmail = users.map(user => user.email)
printKata(2, userEmail)

const hasOvation = users.some(user => user.company === 'OVATION')
printKata(3, hasOvation)

const over38 = users.find(user => user.age > 38)
printKata(4, over38)

const over38AndActive = activeUser.find(user => user.age > 38)
printKata(5, over38AndActive)

const zencoUsers = users.filter(user =>user.company === 'ZENCO')
const zencoUserBalance = zencoUsers.map(user => user.balance)
printKata(6, zencoUserBalance)


const fugiatTagUsers = users.filter(user =>{
    if (user.tags.includes('fugiat')){
    return user.tags 
    }
})
const ageOfFugiatTagUsers = fugiatTagUsers.map(user => user.age)
printKata(7, ageOfFugiatTagUsers)