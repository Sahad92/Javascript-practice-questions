// **Program 14: Product Discount and Filtering**  
//    - Suppose you have an array of product objects with properties like `name`, `price`, and `category`.  
//    - Use **map** to apply a discount (e.g., reduce each product’s price by 10%).  
//    - Use **filter** to retrieve only the discounted products that are still above a certain price point.


my_array = [
    {
        name : "a",
        price : 100,
        category : "perishable"
    },
    {
        name : "b",
        price : 200,
        category : "non-perishable"
    },
]

let discount = my_array.map(({price}) => ( price - (price * 10/100) ))
// console.log(discount)

let discounted_product = discount.filter(price => price > 50)
console.log(discounted_product)

