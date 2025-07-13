export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'compareAtPrice',
      title: 'Compare at Price',
      type: 'number',
      description: 'Original price for showing discounts',
    },
    {
      name: 'cost',
      title: 'Cost',
      type: 'number',
      description: 'Product cost for profit calculations',
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      description: 'Stock Keeping Unit',
    },
    {
      name: 'barcode',
      title: 'Barcode',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for accessibility',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
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
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{type: 'brand'}],
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Variant Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'sku',
              title: 'Variant SKU',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Variant Price',
              type: 'number',
            },
            {
              name: 'compareAtPrice',
              title: 'Variant Compare at Price',
              type: 'number',
            },
            {
              name: 'inventory',
              title: 'Inventory Quantity',
              type: 'number',
              validation: (Rule) => Rule.min(0),
            },
            {
              name: 'attributes',
              title: 'Attributes',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Attribute Name',
                      type: 'string',
                    },
                    {
                      name: 'value',
                      title: 'Attribute Value',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'object',
      fields: [
        {
          name: 'quantity',
          title: 'Quantity',
          type: 'number',
          validation: (Rule) => Rule.min(0),
        },
        {
          name: 'trackQuantity',
          title: 'Track Quantity',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'allowBackorder',
          title: 'Allow Backorder',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'lowStockThreshold',
          title: 'Low Stock Threshold',
          type: 'number',
          initialValue: 10,
        },
      ],
    },
    {
      name: 'weight',
      title: 'Weight (grams)',
      type: 'number',
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        {
          name: 'length',
          title: 'Length (cm)',
          type: 'number',
        },
        {
          name: 'width',
          title: 'Width (cm)',
          type: 'number',
        },
        {
          name: 'height',
          title: 'Height (cm)',
          type: 'number',
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'Active', value: 'active'},
          {title: 'Archived', value: 'archived'},
        ],
      },
      initialValue: 'draft',
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
  orderings: [
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
    {
      title: 'Title Z-A',
      name: 'titleDesc',
      by: [{field: 'title', direction: 'desc'}],
    },
    {
      title: 'Price Low to High',
      name: 'priceAsc',
      by: [{field: 'price', direction: 'asc'}],
    },
    {
      title: 'Price High to Low',
      name: 'priceDesc',
      by: [{field: 'price', direction: 'desc'}],
    },
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      status: 'status',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, price, status, media} = selection
      return {
        title: title,
        subtitle: `$${price} - ${status}`,
        media: media,
      }
    },
  },
}
