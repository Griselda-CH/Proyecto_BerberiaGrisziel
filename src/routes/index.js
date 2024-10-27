import { Router} from "express"
const router = Router()

router.get('/', (req,res) => res.render('index',{title: 'Inicio'}))

router.get('/services', (req,res) => res.render('services',{title: 'Servicios'}))

router.get('/products', (req,res) => res.render('products',{title: 'Productos'}))

router.get('/contact', (req,res) => res.render('contact',{title: 'Contactanos'}))

export default router