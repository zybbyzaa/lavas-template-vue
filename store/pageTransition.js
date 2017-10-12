export const state = () => ({
    enable: true,
    type: 'none',
    effect: 'none'
})

export const mutations = {
    setType (state, type) {
        state.type = type;
    },
    setEffect (state, effect) {
        state.effect = effect;
    }
}
