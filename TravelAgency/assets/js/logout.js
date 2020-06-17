let logout = () => {
    window.localStorage.removeItem('token');
    location.reload();
}