import { combineReducers } from 'redux';
import { routerReducer,  } from 'react-router-redux'
import orders from './orders';
import clients from './clients';
import categories from './categories';
import auth from './auth';
import routes from './routes';
import products from './products';
import modals from './modals';
import { reducer as formReducer } from 'redux-form'

export default () => combineReducers({
    router: routerReducer,
    form: formReducer,
    orders,
    clients,
    auth,
    routes,
    products,
    categories,
    modals,
});
