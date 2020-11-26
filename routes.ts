import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct } from './controllers/products.ts';


const router = new Router();

router.get('/api/v1/products', getAllProducts)
    .get('/api/v1/products/:id', getSingleProduct)
    .post('/api/v1/products', addProduct)
    .put('/api/v1/products/:id', updateProduct)
    .delete('/api/v1/products/:id', deleteProduct)


export default router