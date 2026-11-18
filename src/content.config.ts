import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Two kinds of page, one Markdown file each:
 * - products: what KPK Trinex makes and runs (KPK Schools first). Each has its own page and a link out to the product.
 * - projects: websites and software delivered for clients, shown only with the client's permission, linking to theirs.
 * A new file is all it takes: the lists, the home page and the sitemap pick it up.
 */
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    summary: z.string(),
    url: z.url(),
    order: z.number().default(0),
    audience: z.string(),
    highlights: z.array(z.object({ title: z.string(), text: z.string() })),
    screens: z.array(z.object({ src: z.string(), alt: z.string(), width: z.number(), height: z.number() })).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    client: z.string(),
    title: z.string(),
    summary: z.string(),
    url: z.url(),
    kind: z.string(),
    delivered: z.coerce.date(),
    place: z.string().optional(),
    built: z.array(z.string()).default([]),
    image: z.object({ src: z.string(), alt: z.string(), width: z.number(), height: z.number() }).optional(),
  }),
});

export const collections = { products, projects };
