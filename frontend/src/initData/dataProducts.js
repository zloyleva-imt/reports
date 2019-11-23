import routes from '../routes';
export default {
    translate: {
        modals: {
            label: {
                name:'Наименование',
                category:'Категория',
                description:'Описание',
                price:'Цена',
                picture:'Фото',
                filters:'Фильтры',
            },
            body: {
                titleCreate: 'Добавить продукт',
                titleEdit: 'Редактирование продукта',
                subTitle: 'Детали продукта',
                btnCreate: 'Создать',
                btnEdit: 'Редактировать',
                btnCancel: 'Отмена',
            },
        }
    },
    showListCategoryProduct: false,
    setToUpdatePicture: false,
    showProduct:false,
    editProduct:false,
    url: routes.products,
    loading: true,
    error: false,
    searchParamsCategoryProduct : {},
    selectedProduct: {
        id:null,
        name:'',
        category:{
            id:null,
            name:''
        },
        picture: undefined,
        description:'',
        price:'',
        category_id: ''
    },
    data: [],
    categories: [],
    links:{},
    meta:{},
    searchParams : {},
    markedToDelete:[],
    showCreateProduct:false,
    newProduct: {
        id:null,
        name:'',
        picture:{
            id:null,
            image:'',
            thumbnail:''
        },
        category:'',
        description:'',
        price:''
    },
}