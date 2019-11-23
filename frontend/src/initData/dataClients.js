import routes from '../routes';
export default {
    translate: {
        modals: {
            label: {
                name:'Имя клиента',
                phone:'Телефон',
                email:'Email',
                address:'Адрес',
                filters:'Фильтры',
            },
            body: {
                titleCreate: 'Добавить клиента',
                titleEdit: 'Редактирование клиента',
                subTitle: 'Детали клиента',
                btnCreate: 'Создать',
                btnEdit: 'Редактировать',
                btnCancel: 'Отмена',
            },
        }
    },
    url: routes.clients,
    loading: true,
    error: false,
    selectedClient: {
        id:null,
        name:'',
        phone:'',
        email:'',
        address:'',
    },
    data: [],
    links:{},
    meta:{
        last_page: 2,
        path: "http://localhost/api/admin/clients/"
    },
    searchParams : {},
    markedToDelete:[],
}