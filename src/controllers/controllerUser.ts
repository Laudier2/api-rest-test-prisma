import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export class ProdutCrete{
    async creeproduct(req: Request, res: Response) {
        const { name, price, description } = req.body;

        const Products = await prisma.product.create({
            data: {
                name,
                price,
                description
            }
        })

        return res.status(200).json({msg: "Produto cadastrado com sucesso!",  Products})
    }
}

export class ProdutList{
    async listproduct(req: Request, res: Response) {
        const { name, price, description } = req.body;

        const Products = await prisma.product.findMany ({
            where: {
                name,
                price,
                description
            },
            include: {
                productCategory: true
            }
        })
        return res.status(200).json(Products || "Não existe nem um item no database!")
    }
}

export class ProdutUpdate{
    async UserUpdate(req: Request, res: Response) {
        const { id, name, price, description } = req.body;

        const ProductsUpdate = await prisma.product.update({
            where: {
                id: id
            },
            data: {
                name,
                price,
                description
            }
        })

        
        if(!!ProdutUpdate){
        
            res.json({msg: `O produto foi atualizado com sucesso, confira as mudancas abaixo! `, ProductsUpdate})
        
        }
        
        if(!ProdutUpdate){
        
            res.json({msg: `O produto foi aencontrado! `})
        
        }
        
    }
}

export class ProdutDelete{
    async UserDelete(req: Request, res: Response) {
        const { id } = req.body;

        const ProductsDelete = await prisma.product.delete({
            where: {
                id: id
            }
        })

        return res.json({msg: "O produto undefined foi deletado com sucesso! Detalhes abaixo.", ProductsDelete} || {erro: "O produto não existe no databse!"})
    }
}

export class controllerCreateCategory {
    async handle(request: Request, response: Response) {
      const { name } = request.body;
  
      const category = await prisma.category.create({
        data: {
          name,
        }
      });
      
      return response.status(201).json(category);
    }
}

export class CreateCategoryRelation {
    async handle(request: Request, response: Response) {
      const { id_category, id_product } = request.body;
  
      const category = await prisma.product_Category.create({
        data: {
          id_category,
          id_product
        }
      });
      
      return response.status(201).json(category);
    }
}

export class CategoryList {
    async handle(request: Request, response: Response) {
      const { name } = request.body;
  
      const category = await prisma.category.findMany({
        where: {
          name
        }
      });
      
      return response.status(200).json(category);
    }
}

export class ProductCategoryList {
    async handle(request: Request, response: Response) {
      const { id } = request.body;
  
      const category = await prisma.product_Category.findMany({
        where: {
          id
        },
        include: {
          category: true,
          product: true
        }
      });
      
      return response.status(200).json(category);
    }
}

export class controllerExistProduct {
  async handle(request: Request, response: Response) {
    const { name, price, bar_code, cor, slug, description, id_category } = request.body;
  
    const produtExiste = await prisma.product_Category.create({
        data: {
          product: {
            create: {
              name,
              price,
              description
            }
          },
          category: {
            connect: {
              id: id_category
            }
          }
        }
      });
      
  return response.status(201).json(produtExiste || "Deu algo de errado!");
  }
}

