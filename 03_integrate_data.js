"use strict"
console.log('');
console.log('第三題結果');


const userIds = ['U01', 'U02', 'U03']; 
const orderIds = ['T01', 'T02', 'T03', 'T04']; 

const userOrders = [			
    { userId: 'U01', orderIds: ['T01', 'T02'] },
 	{ userId: 'U02', orderIds: [] },
 	{ userId: 'U03', orderIds: ['T03'] },
    ];

const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' };

const orderData = {						
    'T01': { name: 'A', price: 499 }, 
    'T02': { name: 'B', price: 599 },
    'T03': { name: 'C', price: 699 }, 
    'T04': { name: 'D', price: 799 }
    };


let result = [];

for(let i=0; i<userOrders.length; i++){

    //每筆訂單要改寫為result的item格式
    let item = {};




    //每筆訂單的訂購人
    item['user']={ id:userOrders[i]['userId'], name:userData[userOrders[i]['userId']]};




    //每筆訂單的商品明細
    let order_items = [];

    //訂單內每個商品的明細
    for(let j=0; j<userOrders[i]['orderIds'].length; j++){
        //找出商品ID
        let prod_id = userOrders[i]['orderIds'][j];

        //組合order_item格式
        let order_item = {
            id:prod_id,
            name:orderData[prod_id]['name'],
            price:orderData[prod_id]['price'],
        };

        //存進order_items
        order_items.push(order_item);
    }

    //每筆訂單的商品明細
    item['orders'] = order_items;





    //改寫好的每筆訂單資訊，存回result
    result.push(item);
}


console.log(result);

