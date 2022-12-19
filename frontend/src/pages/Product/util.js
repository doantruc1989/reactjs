const paginate = (products) => {
    const itemsPerpage = 12;
    const numberOfPages = Math.ceil(products.length / itemsPerpage);

    const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerpage;
        return products.slice(start, start + itemsPerpage)
    })
    return newProducts
}

export default paginate;