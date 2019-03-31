import express from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';

import helpers from './helpers';

const router = express.Router();
const {
    allProductsDetails,
    getProductsByUserId,
    productCreate,
    productDetails,
    productDelete,
    productUpdate,
    updateOrCreateItem,
} = helpers;

cloudinary.config({
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME,
});
const storage = cloudinaryStorage({
    allowedFormats: ["jpg", "png"],
    cloudinary: cloudinary,
    folder: "image",
    transformation: [{ crop: "limit", height: 500, width: 500 }],
});

const parser = multer({ storage: storage });

router.get('/findAll', allProductsDetails);
router.get('/producerId/:id', getProductsByUserId);
router.get('/:id', productDetails);

router.post('/create', productCreate);

router.put('/update', parser.single('image'), updateOrCreateItem);
router.put('/update/:productsId', productUpdate);

router.delete('/:id', productDelete);

export default router;
