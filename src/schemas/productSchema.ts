import { ProductBrand } from "@prisma/client";
import { z } from "zod";

const productBaseSchema = z.object({
  title: z
    .string({ message: "The name needs to be a text." })
    .trim()
    .min(1, { message: "The name is required." }),

  brand: z.enum(ProductBrand, { message: "Invalid brand." }),

  price: z.coerce
    .number({ message: "The price needs to be a number." })
    .min(1, { message: "The price needs to be a positive value." }),

  stock: z.coerce
    .number({ message: "The stock needs to be a number." })
    .int({ message: "The stock needs to be an integer number." })
    .min(0, { message: "The stock cannot be negative." }),

  thumbUrl: z
    .string({ message: "The url needs to be a text." })
    .trim()
    .optional(),

  details: z
    .string({ message: "The description needs to be a text." })
    .trim()
    .optional(),
});

export const productCreateSchema = productBaseSchema;
export const productUpdateSchema = productBaseSchema.extend({
  id: z.string().min(1, "The ID cannot be null."),
});

export type CreateProductInput = z.infer<typeof productCreateSchema>;
export type UpdateProductInput = z.infer<typeof productUpdateSchema>;
