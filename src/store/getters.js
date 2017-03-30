export const getters = {
    getProductById: (state, getters) => (id) => {
        return state.products.find(product => product.id == id)
    }
}