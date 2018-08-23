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
        matchPairs(theArray) {
            const result = { matched: [], unmatched: [] }
            const matched = []
            let toMatch, toBeMatched
                //first, cycle through each element in the array
            for (let i = 0; i < theArray.length; i++) {
                //check if current index is already taken/matched. Skip if yes
                if (matched.indexOf(i) !== -1) continue
                toMatch = theArray[i]
                    //second, cycle through the array starting from "neighbouring" elements
                for (let y = i + 1; y < theArray.length; y++) {
                    toBeMatched = theArray[y]
                        //again, check if current index is taken/match. Skip if yes
                    if (matched.indexOf(y) !== -1) continue
                        //check if the element fulfills the criteria
                    if (toMatch.gender === toBeMatched.gender && toMatch.manager !== toBeMatched.manager) {
                        //assign matching pairs to the result
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
        }
    }
}