import { Request, Router, Response } from "express"
import { 
    controllerCreateCategory, 
    CreateCategoryRelation, 
    ProdutCrete, 
    ProdutDelete, 
    ProdutList, 
    ProdutUpdate, 
    ProductCategoryList, 
    CategoryList,
    controllerExistProduct
} from "../controllers/controllerUser"

const router = Router()

const CreateProduct = new ProdutCrete()
const ListProduct = new ProdutList()
const UpdateProduct = new ProdutUpdate()
const DeleteProduct = new ProdutDelete()
const ProductCategory = new controllerCreateCategory()
const ProductCategoryReation = new CreateCategoryRelation()
const ProductCategoryList2 = new ProductCategoryList()
const CategoryList2 = new CategoryList()
const CategoryCreteExist = new controllerExistProduct()

router.get("/", (req: Request, res: Response) => {
    res.json({msg: "acesse a rota http://localhost:3000/ e a fente use list, create, delete, ou update"})
})

router.post("/create", CreateProduct.creeproduct)
router.post("/category", ProductCategory.handle)
router.post("/categoryExist", CategoryCreteExist.handle)
router.post("/relation", ProductCategoryReation.handle)
router.get("/listCategory", ProductCategoryList2.handle)
router.get("/categoryList", CategoryList2.handle)
router.get("/list", ListProduct.listproduct)
router.put("/update", UpdateProduct.UserUpdate)
router.delete("/delete", DeleteProduct.UserDelete)

export { router}