import routes from '../routes';
export default {
    translate: {
        modals: {
            label: {
                name:'Категория',
                description:'Описание',
                picture:'Фото',
                filters:'Фильтры',
            },
            body: {
                titleCreate: 'Добавить категорию',
                titleEdit: 'Редактирование категории',
                subTitle: 'Детали категории',
                btnCreate: 'Создать',
                btnEdit: 'Редактировать',
                btnCancel: 'Отмена',
            },
        }
    },
    showCategory:false,
    editCategory:false,
    setToUpdatePicture:false,
    url: routes.categories,
    loading: true,
    error: false,

    selectedCategory: {
        id: null,
        name: '',
        description: '',
        picture:{
            id:null,
            image:'',
            thumbnail:''
        },
    },
    searchParams : {},
    data: [],
    links:{},
    meta:{},

}