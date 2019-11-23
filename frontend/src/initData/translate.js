export default {

    order: {
        modals: {
            label: {
                customer:'Покупатель',
                phone:'Телефон',
                email:'email',
                address:'Адрес',
                status:'Статус',
            }
        }
    },
    products: [
        {
            id:null,
            name: '',
            price: null
        }
    ],
    client : {
        address: null,
        email: null,
        name: null,
        phone: null,
    },
    searchParams : {},
    searchParamsClient : {
        address: null,
        email: null,
        name: null,
        phone: null,
    },
    selectedOrder: {
        id:null,
        date:'',
        total:'',
        status:'',
        client: {
            id: null,
            name: '',
            phone: '',
            email:'',
            address:'',
        },
        selectedItem: [
            {
                id: null,
                price: '',
                count: '',
                product: {
                    id: null,
                    name: '',
                    price: null
                }
            }
        ],
        items:[
            {
                id: null,
                price: '',
                count: '',
                product: {
                    id: null,
                    name: '',
                    price: null
                }
            }
        ],
    },
    newItem: {
        id: null,
        price: '',
        count: '',
        product: {
            id: null,
            name: ''
        }
    },
    newOrderItem: {
        id:null,
        date:'',
        total:'',
        status:'',
        client: {
            id: null,
            name: '',
            phone: '',
            email:'',
            address:'',
        },
        items:[
            {
                id: null,
                price: '',
                count: '',
                product: {
                    id: null,
                    name: ''
                }
            }
        ],
    },
    data: [
        {
            id:1,
            date:'01/07/2019 10:20',
            price:123.50,
            status:'Pending',
            client: {
                id:	23,
                name:	"Dr. Kian Blanda",
                phone:	"380787690459",
                email:	null,
                address:'angelo Keys Port Koryberg, SD 26156'
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 2,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 16,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 3,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 17,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 4,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 18,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 5,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 19,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 6,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 20,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 7,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 21,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 8,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 22,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 9,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 23,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 10,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 24,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id:11,
            date:'01/07/2019 10:20',
            price:123.50,
            status:'Pending',
            client: {
                id:	24,
                name:	"Dr. Kian Blanda",
                phone:	"380787690459",
                email:	null,
                address:'angelo Keys Port Koryberg, SD 26156'
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 12,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 25,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 13,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 26,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 14,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 27,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 15,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 28,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 16,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 29,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 17,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 30,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 18,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 31,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 19,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 32,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 20,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 33,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
        {
            id: 21,
            date:'02/07/2019 10:20',
            total:'153.50',
            status:'Done',
            client: {
                id: 34,
                name: 'Ben Otto',
                phone: '+380971234578',
                email:'test@test1.com',
                address:'Zaporozhie, Pravdy str. 55',
            },
            items: [
                {
                    id: 1,
                    count: 2,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Салат "Цезарь'
                    }
                },
                {
                    id: 2,
                    count: 3,
                    price:40,
                    product: {
                        id: 1,
                        name: 'Ягодный тарт'
                    }
                },
            ]
        },
    ],
}