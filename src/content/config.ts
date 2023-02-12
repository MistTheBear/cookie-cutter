// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const paperCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    authors: z.array(z.string()),
    tags: z.optional(
      z.array(z.string())
    ),
    links: z.optional(
      z.array(
        z.object({
          text: z.string(),
          url: z.string().url(),
        })
      )
    ),
  }),
});
const talkCollection = defineCollection({
  schema: z.object({
    type: z.enum([
      "Invited Seminars",
      "Conferences and Workshop Presentations",
      "Collaboration Plenaries"
    ]),
    title: z.string(),
    date: z.date(),
    location: z.string(),
    event: z.string(),
    tags: z.optional(
      z.array(z.string())
    ),
    links: z.optional(
      z.array(
        z.object({
          text: z.string(),
          url: z.string().url(),
        })
      )
    ),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'papers': paperCollection,
  'talks': talkCollection,
};