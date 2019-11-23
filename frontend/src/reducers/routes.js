const data = {
    login: `//${window.location.hostname}/api/admin/auth/login`,
    logout: `//${window.location.hostname}/api/admin/auth/logout`,
};

const reducer = (state = data, action) => {
    return state;
};

export default reducer;