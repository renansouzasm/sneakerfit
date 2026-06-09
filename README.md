# _Sneakerfit_

A full-stack oriented web application built with **Next.js**, focused on managing and displaying sneaker products through a **dashboard** and a **store** interface.

This project was designed not only to function as an e-commerce interface, but also to demonstrate **clean architecture, state management, and scalability patterns** using modern frontend tools.

### 🚀 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Zod (schema validation)**
- **Prisma (ORM)**
- **Supabase (PostegreSQL DB)**
- **Lucide React (icons)**

### 💻 Preview

<img width="384" alt="Product table" src="https://github.com/user-attachments/assets/4df1b1d9-7b42-43f7-b5e6-0786fd876736" />
<img width="384" alt="Product details" src="https://github.com/user-attachments/assets/1598748e-6ba1-4856-83b3-8dd5a6e97ab6" />

<img width="384" alt="Cart" src="https://github.com/user-attachments/assets/b32b50fb-07b5-4ba4-a0e0-8244e0df6465" />
<img width="384" alt="Form" src="https://github.com/user-attachments/assets/46ee6804-8f01-4321-847c-97dfb2d82f72" />

<img width="768" alt="sneakerfit-store" src="https://github.com/user-attachments/assets/a02a7c71-03a6-43fa-8394-58b20c804078" />

## 🧩 Structure

```
/prisma
|—— /migrations
|—— schema.prisma

/public
|—— /banners
|—— /logos
|—— /products

/src
|—— /data
|—— /hooks
|—— /lib
|—— /schemas
|—— /services
|—— /utils
|
|—— /server
|   |——/actions
|
|—— /context
|   |—— /product
|   |—— /sidebar
|
|—— /app
|   |—— /(public)
|   |
|   |—— /(private)
|       |—— /dashboard
|           |—— /products
```

## 🧠 Architecture Overview

### 🔹 Layers

```
Services → Actions → Hooks → Context → UI
```

### 🔹 Services

Located in:

```
/src/services
```

- Contains business rules
- Example:
  - Price conversion (to cents)
  - Data normalization

### 🔹 Actions

Located in:

```
/src/server/actions
```

- Discriminated union
  - `type ErrorResponse`
  - `type SuccessResponse<T>`
  - `type EmptySuccessResponse`
- Responsible for handling server-side logic
- Communicate with services
- Return structured responses

### 🔹 Schemas

Located in:

```
/src/schemas
```

- Built with Zod
- Validates input before reaching services

### 🔹 Hooks

Located in:

```
/src/hooks
```

Responsibilities:

- Fetch data from actions
- Manage local state

### 🔹 Context

Located in:

```
/src/context
```

#### Product Context

- `ProductProvider` → single source of truth
- `useProductContext` → full access (dashboard)
- `useStoreProducts` → limited access (store)

This separation ensures:

- Clear responsibility boundaries
- No unintended mutations in public pages

### 🔹 UI Layers

#### Public (Store)

```
/src/app/(public)
```

- Product listing
- UI-focused
- No mutation logic

#### Private (Dashboard)

```
/src/app/(private)/dashboard
```

- Product management (CRUD)
- Forms
- Table view

### 🔹 Data

```
/prisma
```

- Supabase (postegresql)

## 🧾 Product Model

- `ProductBrand` → enum (nike, adidas, new balance)
- `ProductStatus` → enum (available, low stock, no stock)

```prisma
model Product {
  id        String        @id @default(uuid())
  title     String
  brand     ProductBrand
  price     Int
  stock     Int           @default(0)
  status    ProductStatus @default(NO_STOCK)
  details   String
  thumbUrl  String
}
```

## 📌 Notes

> Inspired by leading market brands, this project is for educational and portfolio purposes only. Logos (Nike, Adidas and New Balance) used for demonstration purposes only. All trademarks and logos belong to their respective owners.

- Price handling uses **cents-based storage** for precision
- Architecture is designed to scale into real backend integration
- Project emphasizes **clean separation of responsibilities**

### 🔹 Future Improvements

- 🔐 Authentication
- 📊 Analytics dashboard

### 🔹 Public Assets

- [🔗 Hero](https://www.pexels.com/pt-br/foto/exibicao-visor-display-vitrine-18946892/)
- [🔗 Banner nike](https://www.pexels.com/pt-br/foto/sapatos-calcados-marca-estilo-8979071/)
- [🔗 Banner adidas](https://www.pexels.com/pt-br/foto/moda-tendencia-criativo-engenhoso-4211336/)
- [🔗 Banner new balance](https://www.pexels.com/pt-br/foto/design-projeto-visual-caixa-12279148/)
- [🔗 Banner trending](https://www.pexels.com/pt-br/foto/nike-natureza-morta-tenis-fotografia-de-moda-18946903/)

## 🐦‍⬛ Author

_**© 2025 renansouzasm. All Rights Reserved**_
