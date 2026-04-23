import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const teamCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({ src: z.string(), alt: z.string() }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string(),
    description: z.string().optional(),
    location: z.string().optional(),
    registrationLink: z.string().optional(),
    status: z.enum(["upcoming", "past"]),
  }),
});

const meetingsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/meetings" }),
  schema: z.object({
    title: z.string(),
    host: z.string(),
    description: z.string(),
    times: z.string(),
    registrationLink: z.string().optional(),
    meetingType: z.enum(["virtual", "physical"]),
  }),
});

const booksCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.string(),
    infoLink: z.string().optional(),
    sortOrder: z.number().optional(),
  }),
});

const videosCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/videos" }),
  schema: z.object({
    title: z.string(),
    watchLink: z.string(),
    watchLabel: z.string(),
    sortOrder: z.number(),
  }),
});

const documentsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/documents" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    fileLink: z.string(),
    thumbnailImage: z.string(),
    sortOrder: z.number(),
  }),
});

const updatesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/updates" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string().optional(),
  }),
});

const organizationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/organizations" }),
  schema: z.object({
    title: z.string(),
    websiteUrl: z.string(),
    logoImage: z.string(),
    category: z.enum(["national", "statewide", "local"]),
    sortOrder: z.number(),
  }),
});

const onlineresourcesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/onlineresources" }),
  schema: z.object({
    name: z.string(),
    websiteUrl: z.string(),
    websiteText: z.string(),
    focus: z.string(),
    sortOrder: z.number(),
  }),
});

export const collections = {
  team: teamCollection,
  events: eventsCollection,
  meetings: meetingsCollection,
  books: booksCollection,
  videos: videosCollection,
  documents: documentsCollection,
  updates: updatesCollection,
  pages: pagesCollection,
  organizations: organizationsCollection,
  onlineresources: onlineresourcesCollection,
};
