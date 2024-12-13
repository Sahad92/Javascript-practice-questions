/* 3.	Shopping Cart:
	•	Create an object cart with properties: items (an array of objects where each object represents an item with properties name and price) and totalPrice (default to 0).
	•	Write functions to:
		•	Add a new item to the items array.
		•	Calculate and update the totalPrice by summing up the prices of all items.
		•	Print the cart details with each item’s name and price and the total price.
*/

const cart = {
    items : [
        {
            name : "A",
            price : 100
        }, 
        {
            name : "B",
            price : 200   
        }
    ],
    totalPrice : 0
}

function updatedCart() {
    cart.items.push({name:"C", price:300})
    // console.log(cart)
    cart.totalPrice = cart.items.reduce((acc, item) => acc + item.price, 0)
    // console.log(cart.totalPrice)
    console.log(cart)

}

updatedCart()

