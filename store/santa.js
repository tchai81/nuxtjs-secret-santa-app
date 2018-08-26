import santa from '~/mixins/santa'

export const state = () => ({
    result: {
        matched: [],
        unmatched: []
    }
})

export const mutations = {
    EMPTY_RESULT(state) {
        for (let property in state.result) {
            if (state.result.hasOwnProperty(property)) {
                state.result[property] = []
            }
        }
    },
    SET_RESULT(state, result) {
        state.result = result
    }
}

export const actions = {
    processResult(state, json) {
        const methods = santa.methods
        const shuffled = methods.shuffleArray(json)
        state.commit('SET_RESULT', methods.matchPairs(shuffled))
    }
}