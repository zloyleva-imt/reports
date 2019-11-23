export default {
    orders: [
        {
            id:1,
            customer:'Mark Otto',
            date:'01/07/2019 10:20',
            total:'123.50',
            phone:'+380991234578',
            status:'Pending',
            email:'test@test.com',
            address:'Zaporozhie, Pravdy str. 55',
            products: []
        },
        {
            id:2,
            customer:'Ben Otto',
            date:'01/07/2019 12:25',
            total:'256.50',
            phone:'+380991234578',
            status:'Pending',
            email:'test@test.com',
            address:'Zaporozhie, Pravdy str. 55',
            products: []
        }
    ],
    clients: [
        {
            id: 1,
            name: 'Ben Otto',
            email: 'admin@test.com',
            phone: '+380456112354',
            address: 'Zaporozhie, Pravdy str. 55',
        },
        {
            id: 2,
            name: 'Mark Otto',
            email: 'user@test.com',
            phone: '+3804489532354',
            address: 'Zaporozhie, Lenina str. 88/74',
        },
    ],
    products: [
        {
            name:'Салат "Цезарь"',
            img:'http://report.zp.ua/web/uploads/59d5de2c47882.jpg',
            category:'Завтраки',
            description:'',
            price:40,
        }
    ],
    config: {},
}