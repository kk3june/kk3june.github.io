import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      meta_title: z.string().optional(),
      description: z.string(),
      createdAt: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      thumbnail: image().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog };
