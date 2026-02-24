import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
    schema: z.object({
        title: z.string(),
    })
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.string().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    })
});

export const collections = { guides, blog };