export default { 
    title: 'Products',
    name: 'products',
    type: 'document',
    fields: [
        {
            title: 'Category',
            name: 'category',
            type: 'string'
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'array',
            of: [{ type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        },
        {
            title: 'Desc',
            name: 'desc',
            type: 'string'
        },
        {
            title: 'Sale',
            name: 'sale',
            type: 'boolean'
        },
        {
            title: 'Discount',
            name: 'discount',
            type: 'number'
        }
    ]
}