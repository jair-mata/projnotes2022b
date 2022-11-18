import homeRouter from '../domains/home/homeRouter';
const addRoutes = (app) {
    app.user('/', hoeRouter);

};
export default { addRoutes };
router.get(['/', '/home', '/index'], homeController.home);
router.get(['/about'], homeController.about);
const about = (req, res) => {
    res.render('home/about', {});
};
export default { home, about };