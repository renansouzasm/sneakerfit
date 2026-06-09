-- CreateEnum
CREATE TYPE "ProductBrand" AS ENUM ('NIKE', 'ADIDAS', 'NEW_BALANCE');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('AVAILABLE', 'LOW_STOCK', 'NO_STOCK');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "brand" "ProductBrand" NOT NULL,
    "price" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "status" "ProductStatus" NOT NULL DEFAULT 'NO_STOCK',
    "details" TEXT NOT NULL,
    "thumbUrl" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
