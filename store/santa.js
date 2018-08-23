export const state = () => ({
    result: {
        matched: [],
        unmatched: []
    }
})

export const mutations = {
    SET_RESULT(state, result) {
        state.result = result
    }
}