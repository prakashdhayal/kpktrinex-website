import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Two kinds of page, one Markdown file each:
 * - products: what KPK Trinex makes and runs (KPK Schools first). Each has its own page and a link out to the product.
 * - projects: websites and software delivered for clients, shown only with the client's permission, linking to theirs.
 * A new file is all it takes: the lists, the home page and the sitemap pick it up. Screenshots sit beside the text in
 * src/assets and are turned into small AVIF / WebP copies for each screen size at build time.
 */
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string(),
    summary: z.string(),
    /** The page's <title> and search snippet (titles up to ~60 characters, descriptions 120-160). */
    seoTitle: z.string().max(65),
    seoDescription: z.string().min(70).max(165),
    url: z.url(),
    order: z.number().default(0),
    audience: z.string(),
    highlights: z.array(z.object({ title: z.string(), text: z.string() })),
    screens: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    /** Its share card in public/ (1200 x 630); the company's when not given. */
    shareImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    client: z.string(),
    title: z.string(),
    summary: z.string(),
    url: z.url(),
    kind: z.string(),
    delivered: z.coerce.date(),
    place: z.string().optional(),
    built: z.array(z.string()).default([]),
    image: z.object({ src: image(), alt: z.string() }).optional(),
  }),
});

export const collections = { products, projects };
