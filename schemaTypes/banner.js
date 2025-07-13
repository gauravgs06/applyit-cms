import {defineField} from 'sanity'

export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'reference',
      to: [{type: 'product'}, {type: 'category'}],
    }),
    {
      name: 'bannerType',
      title: 'Banner Type',
      type: 'string',
      options: {
        list: [
          {title: 'Hero Banner', value: 'hero'},
          {title: 'Promotional Banner', value: 'promotional'},
          {title: 'Category Banner', value: 'category'},
        ],
      },
      initialValue: 'hero',
    },
    {
      name: 'featured',
      title: 'Featured Banner',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Only active banners will be displayed',
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      description: 'When this banner should start being displayed',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      description: 'When this banner should stop being displayed',
    },
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrderAsc',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
      active: 'active',
      featured: 'featured',
    },
    prepare(selection) {
      const {title, subtitle, media, active, featured} = selection
      return {
        title: title,
        subtitle: subtitle,
        media: media,
        subtitle: `${active ? 'Active' : 'Inactive'}${featured ? ' • Featured' : ''}`,
      }
    },
  },
}
