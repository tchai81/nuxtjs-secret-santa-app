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