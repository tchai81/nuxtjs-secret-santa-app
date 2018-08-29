export default {
    methods: {
        /**
         * Shuffle the element in an array, creating randomize effect.
         * Taken from:
         * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
         *
         * @param {*} theArray
         */
        shuffleArray(theArray) {
            let shuffled = Object.assign([], theArray)
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
            }
            return shuffled
        },
        /**
         * To match employees based on criteria
         *
         * @param {*} theArray
         */
        _matchPairs(theArray) {
            const result = { matched: [], unmatched: [] }
            const matched = []
            let toMatch, toBeMatched
                //for outer loop, cycle through each element in the array
            for (let i = 0; i < theArray.length; i++) {
                //check if current index is already taken/matched. Skip if yes
                if (matched.indexOf(i) !== -1) continue
                toMatch = theArray[i]
                    //for inner loop, cycle through the array starting from "neighbouring" elements
                for (let y = i + 1; y < theArray.length; y++) {
                    toBeMatched = theArray[y]
                        //again, check if current index is taken/match. Skip if yes
                    if (matched.indexOf(y) !== -1) continue
                        //check if the element fulfills the criteria
                    if (toMatch.gender === toBeMatched.gender && toMatch.manager !== toBeMatched.manager) {
                        //assign matching pairs to result
                        result.matched.push([toMatch, toBeMatched])
                            //assign matching pairs to a temp array
                        matched.push(i, y)
                        break
                    }
                }
            }
            //based on matched pairs, retrieve unmatched employees
            result.unmatched = theArray.filter((item, index) => matched.indexOf(index) === -1)
            return result
        },
        /**
         * Second revision
         *
         * @param {*} theArray
         */
        matchPairs(theArray) {
            const result = { matched: [], unmatched: [] }
            let pair, total, unmatched

            const grouping = this.groupByGenderAndManagers(theArray)

            //pairing starts here
            for (let gender in grouping) {
                total = Math.floor(grouping[gender].reduce((acc, manager) => acc + manager.employees.length, 0) / 2)
                for (let i = 0; i < total; i++) {
                    pair = []
                        //sort by no of employees
                    grouping[gender].sort((a, b) => {
                            return b.employees.length - a.employees.length
                        })
                        //pairing employees from first 2 manager
                    for (let j = 0; j < 2; j++) {
                        //check if any of the first 2 managers has 0 employees, skip if yes
                        if (!grouping[gender][j].employees.length) break
                        pair.push({
                            name: grouping[gender][j].employees.pop(),
                            gender: gender,
                            manager: grouping[gender][j].manager
                        })
                    }
                    //if there's pairing, match = success
                    if (pair.length === 2) {
                        result.matched.push([...pair])
                    } else {
                        //if pairing < 2, match = fail, can be considered as unmatched employee
                        result.unmatched.push(...pair)
                    }
                }

                //getting unmatched employees from leftovers
                unmatched = grouping[gender].reduce((acc, manager) => {
                    if (manager.employees.length) {
                        manager.employees.forEach(name => {
                            acc.push({
                                name: name,
                                gender: gender,
                                manager: manager.manager
                            })
                        })
                    }
                    return acc
                }, [])
                result.unmatched.push(...unmatched)
            }
            return result
        },
        /**
         * To group array into proper format for further processing
         * Sample Grouping:
         * {
         *  M: [{
         *      manager: "Alice",
         *      employees: ["Emp1", "Emp2", "Emp3"]
         *  }, {
         *      manager: "Alex",
         *      employees: ["Emp4", "Emp5", "Emp6"]
         *  }]
         *  F: [{
         *     manager: "Alex",
         *     employees: ["Emp7, "Emp8", "Emp9"]
         *  }, {
         *     manager: "Alice",
         *     employees: ["Emp10", "Emp11", "Emp12"]
         *  }]
         *
         * }
         *
         *
         * @param {*} theArray
         */
        groupByGenderAndManagers(theArray) {
            let manager
            const grouping = []
                //grouping starts here
            theArray.forEach(employee => {
                if (!grouping[employee.gender]) {
                    grouping[employee.gender] = []
                }
                manager = grouping[employee.gender].find(item => item.manager === employee.manager)
                if (manager) {
                    manager.employees.push(employee.name)
                } else {
                    grouping[employee.gender].push({
                        manager: employee.manager,
                        employees: new Array(employee.name)
                    })
                }
            })
            return grouping
        }
    }
}