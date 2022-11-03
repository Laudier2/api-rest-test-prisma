-- CreateTable
CREATE TABLE "catgories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "catgories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productcategory" (
    "id" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "productcategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "productcategory" ADD CONSTRAINT "productcategory_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productcategory" ADD CONSTRAINT "productcategory_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "catgories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
