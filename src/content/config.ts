import {z, defineCollection} from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema:z.object({
        author:z.string().default('Annya Nir',),
        pageTitle: z.string(),
        pageDescription: z.string(),
        publishDate: z.date().optional(),
        lastUpdate: z.date().optional(),

    }),
});

const courseCollection = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string().default('Annya Nir',),
        pageTitle:z.string(),
        pageDescription: z.string(),
    }),
});

const skillCollection = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string().default('Annya Nir',),
        pageTitle: z.string(),
        pageDescription: z.string(),
    }),
});

const careerCollection = defineCollection({
    type: 'content',
    schema:  z.object({
        author: z.string().default('Annya Nir',),
        pageTitle: z.string(),
        pageDescription: z.string(),
    }),
});

const authorCollection = defineCollection({
    type:  'content',
    schema:z.object({
        author:z.string(),
        pageTitle: z.string(),
        pageDescription: z.string(),
    }),
});



export const collections = {
    'blog':blogCollection,
    'author': authorCollection,
    'course': courseCollection,
    'skill': skillCollection,
    'career': careerCollection,
};