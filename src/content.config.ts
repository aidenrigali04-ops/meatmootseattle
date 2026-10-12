import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70),
      /** Optional shorter `<title>` for search results. On-page H1 stays `title`. */
      metaTitle: z.string().max(60).optional(),
      description: z.string().max(170),
      published: z.coerce.date(),
      updated: z.coerce.date().optional(),
      cover: image(),
      coverAlt: z.string(),
      keyword: z.string(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { journal };
