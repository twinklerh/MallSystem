export const menu = [
    {
        path: `/home/board`,
        title: '数据一览',
        icon: 'BoardIcon',
    },
    {
        path: `/home/commodity/manage`,
        title: '商品管理',
        icon: 'CommodityIcon',
        children: [
            {
                path: `/home/commodity/add`,
                title: '商品添加'
            },
            {
                path: `/home/commodity/manage`,
                title: '商品管理'
            }
        ]
    },
];


