import routes from '../routes';
export default {
    translate: {
        menu: {
            title: 'Меню',
            order: 'Заказы',
            client: 'Клиенты',
            product: 'Продукты',
            category: 'Категории',
        },
        modals: {
            label: {
                customer:'Клиент',
                phone:'Телефон',
                email:'Email',
                address:'Адрес',
                date:'Дата',
                total:'Всего',
                status:'Статус',
                filters:'Фильтры',
            },
            body: {
                titleCreate: 'Добавить заказ',
                titleEdit: 'Редактирование заказа',
                subTitle: 'Детали заказа',
                btnCreate: 'Создать',
                btnEdit: 'Редактировать',
                btnCancel: 'Отмена',
            },
            addProduct: {
                titleAddProduct: 'Заказы клиента',
                titleCreateProduct: 'Добавить продукт',
                btnProduct: 'Добавить продукт',
                label: {
                    name:'Название',
                    price:'Цена',
                    amount:'Количество',
                },
            },
            editProduct: {
                titleEditProduct: 'Редактирование продукта',
                subTitleProduct: 'Детали продукта',
                btnCreate: 'Создать',
                btnEdit: 'Редактировать',
                btnCancel: 'Отмена',
                label: {
                    name:'Продукт',
                    price:'Цена',
                    amount:'Количество',
                }
            }
        }
    },

    showOrder:false,
    editOrder:false,
    showList: false,
    showListClientsOrder: false,
    showEditItem: false,
    pasteValue: false,
    url: routes.orders,
    statuses: [],
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
    data: [],
    meta: {
        // last_page: 4,
        // path: "http://localhost/api/admin/orders/"
    }
}