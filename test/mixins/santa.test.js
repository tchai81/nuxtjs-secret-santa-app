import test from 'ava'
import santa from '../../mixins/santa'
import data from '../../mock/data/employees'

test.before(t => {
    const methods = santa.methods
    t.context.shuffled = methods.shuffleArray(data)
    t.context.data = methods.matchPairs(t.context.shuffled)
})

test('Test if the resulting pairings fulfil the criteria', t => {
    const employees = []

    t.context.data.matched.forEach(matched => {
        //check for duplicates
        employees.forEach(employee => {
                t.notDeepEqual(employee, matched[0])
                t.notDeepEqual(employee, matched[1])
            })
            //for matched employees, gender are the same
        t.true(matched[0].gender === matched[1].gender)
            //for matched employees, they belongs to different managers
        t.false(matched[0].manager === matched[1].manager)
        employees.push(...matched)
    })
})

test('If there are unmatched employees, test if they do not really fulfil the criteria', t => {
    const employees = t.context.data.unmatched
        //for outer loop, cycle through every element in the array
    for (let i = 0; i < employees.length; i++) {
        //for inner loop, cycle through the "neighbouring" elements, for comparison
        for (let y = i + 1; y < employees.length; y++) {
            if (employees[i].gender === employees[y].gender && employees[i].manager !== employees[y].manager) {
                t.fail("There's matching pair")
            }
        }
    }
    t.pass()
})

test('Make sure the result contains all employees', t => {
    let matchedLength = 0
    t.context.data.matched.forEach(employee => (matchedLength = matchedLength + employee.length))
    t.is(t.context.shuffled.length, matchedLength + t.context.data.unmatched.length)
})