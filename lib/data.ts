

const data = {
    headerMenus:[
        {
            name:"Todays Deal",
            href:'/search?tag=todays-deal',
        },
        {
            name:"New Arrivals",
            href:'/search?tag=new-arrivals',
        },
        {
            name:"Featured Products",
            href:'/search?tag=featured',
        },
        {
            name:"Best Sellers",
            href:'/search?tag=best-sellers',
        },
        {
            name:"Browsing History",
            href:'/#browsing-history',
        },
        {
            name:"Customer Service",
            href:"page/customer-service",
        },
        {
            name:'About Us',
            href:"page/about-us",
        },
        {
            name:'Help',
            href:'/help',
        },
        
        
    ],
    carousels:[
        {
            title:'Most Popular Shoes For Sale',
            buttonCaption:'Shop Now',
            image:'/images/banner3.jpg',
            url:'/Search?category=Shoes',
            isPublished:true
        },
        {
            title:'Best Sellers in T-Shirts',
            buttonCaption:'Shop Now',
            image:'/images/banner1.jpg',
            url:'/Search?category=T-Shirts',
            isPublished:true
        },
        {
            title:'Best Deals on Wrist Watches',
            buttonCaption:'See More',
            image:'/images/banner2.jpg',
            url:'/Search?category=Watches',
            isPublished:true,
        },
    ]
}
export default data