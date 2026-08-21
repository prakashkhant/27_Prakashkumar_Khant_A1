// Function to simulate fetching user data
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                id: 101,
                name: "John"
            };
            resolve(user);
        }, 1000);
    });
}

// Function to fetch orders based on user ID
function getOrders(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let orders = [
                { item: "Laptop", price: 50000 },
                { item: "Mobile", price: 20000 }
            ];

            resolve({
                user: user,
                orders: orders
            });
        }, 1000);
    });
}

// Function to calculate total order amount
function calculateTotal(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let total = data.orders.reduce(
                (sum, order) => sum + order.price,
                0
            );

            resolve({
                name: data.user.name,
                totalAmount: total
            });
        }, 1000);
    });
}

// Chaining dependent promises
getUser()
    .then((user) => {
        console.log("User fetched:", user);
        return getOrders(user);
    })
    .then((data) => {
        console.log("Orders fetched:", data.orders);
        return calculateTotal(data);
    })
    .then((result) => {
        console.log("Final Result:");
        console.log("User:", result.name);
        console.log("Total Amount:", result.totalAmount);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
    