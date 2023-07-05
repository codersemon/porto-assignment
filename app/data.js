/***********************
 * Shop Products - Start
 **********************/
const products = [
  {
    id: 1,
    name: "Photo Camera",
    regular_price: 9900,
    sale_price: 9800,
    label: "new",
    category: ["accessories"],
    tags: ["nike", "travel", "sports"],
    sku: "AF5248",
    thumbnail:
      "https://www.okler.net/previews/porto/9.9.3/img/products/product-grey-1.jpg",
  },
  {
    id: 2,
    name: "Photo headphone",
    regular_price: 900,
    sale_price: 800,
    label: "new",
    category: ["electronics"],
    tags: ["tv", "camera"],
    sku: "AF52474",
    thumbnail:
      "https://www.okler.net/previews/porto/9.9.3/img/products/product-grey-7-2.jpg",
  },
  {
    id: 3,
    name: "Golf Bag",
    regular_price: 29,
    sale_price: 19,
    label: "",
    category: ["sports"],
    tags: ["sports", "bag"],
    sku: "TB52474",
    thumbnail:
      "https://www.okler.net/previews/porto/9.9.3/img/products/product-grey-2.jpg",
  },
  {
    id: 4,
    name: "Workout",
    regular_price: 40,
    sale_price: 25,
    label: "",
    category: ["sports"],
    tags: ["sports", "bag"],
    sku: "TB59874",
    thumbnail:
      "https://www.okler.net/previews/porto/9.9.3/img/products/product-grey-3.jpg",
  },
  {
    id: 5,
    name: "Luxury Watch",
    regular_price: 600,
    sale_price: 450,
    label: "",
    category: ["books"],
    tags: ["bag"],
    sku: "TB52874",
    thumbnail:
      "https://www.okler.net/previews/porto/9.9.3/img/products/product-grey-4.jpg",
  },
  {
    id: 6,
    name: "Styled Bag",
    regular_price: 199,
    sale_price: 119,
    label: "new",
    category: ["accessories"],
    tags: ["bag"],
    sku: "TB52874",
    thumbnail:
      "https://www.okler.net/previews/porto/9.9.3/img/products/product-grey-5.jpg",
  },
  {
    id: 7,
    name: "Blue hat",
    regular_price: 299,
    sale_price: 250,
    label: "",
    category: ["hat"],
    tags: ["hat"],
    sku: "TB59874",
    thumbnail:
      "https://www.okler.net/previews/porto/9.9.3/img/products/product-grey-6.jpg",
  },
  {
    id: 8,
    name: "Sun glass",
    regular_price: 1990,
    sale_price: 1190,
    label: "new",
    category: ["glass"],
    tags: ["glass"],
    sku: "TB5374",
    thumbnail:
      "https://www.okler.net/previews/porto/9.9.3/img/products/product-grey-8.jpg",
  },
  {
    id: 9,
    name: "Sun glass",
    regular_price: 399,
    sale_price: 200,
    label: "",
    category: ["sports"],
    tags: ["sports"],
    sku: "TB5T374",
    thumbnail:
      "https://www.okler.net/previews/porto/9.9.3/img/products/product-grey-9.jpg",
  },
];
/*********************
 * Shop Products - End
 ********************/

/**************************
 * Home hero slider - Start
 *************************/
const heroSlides = [
  {
    id: 1,
    image:
      "https://www.okler.net/previews/porto/9.9.3/img/slides/slide-bg-performance.jpg",
    sub_title: "DO YOU NEED A NEW",
    title: "WEB DESIGN?",
    description: "Check out our options and features",
  },
  {
    id: 2,
    image:
      "https://www.okler.net/previews/porto/9.9.3/img/slides/slide-bg-2.jpg",
    sub_title: "WE WORK HARD AND PORTO HAS",
    title: "THE BEST DESIGN",
    description:
      "Trusted by over 40,000 satisfied users, Porto is a huge success in the one of largest world's MarketPlace",
  },
  {
    id: 3,
    image:
      "https://www.okler.net/previews/porto/9.9.3/img/slides/slide-bg-6.jpg",
    sub_title: "WE CREATE DESIGNS, WE ARE",
    title: "PORTO",
    description: "The best choice for your new website",
  },
];
/**************************
 * Home hero slider - Start
 *************************/

/************************
 * Features List - start
 ************************/
const features = [
  {
    id: 1,
    icon: "icon-support",
    title: "Customer Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 2,
    icon: "icon-layers",
    title: "Sliders",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 3,
    icon: "icon-doc",
    title: "HTML5 / CSS3 / JS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 4,
    icon: "icon-user",
    title: "Icons",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 5,
    icon: "icon-social-google ",
    title: "500+ Google Fonts",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 6,
    icon: "icon-menu",
    title: "Buttons",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 7,
    icon: "icon-pencil",
    title: "Colors",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
  {
    id: 8,
    icon: "icon-screen-desktop",
    title: "Lightbox",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
  },
];
/*********************
 * Features List - end
 *********************/

/*********************
 * FAQs - start
 *********************/
const faqs = [
  {
    id: 1,
    icon: "icon-diamond",
    title: "Creative Websites",
    des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blanorem ipsum dolor sit amet, consecte.

    Adipiscing elit phasellus blanit ma...`,
  },
  {
    id: 2,
    icon: "icon-bubble",
    title: "Contact Forms",
    des: "Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.",
  },
  {
    id: 3,
    icon: "icon-grid",
    title: "Portfolio Pages",
    des: "Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.",
  },
];
/*********************
 * FAQs - end
 *********************/

/*********************
 * Partners - start
 *********************/
const partners = [
  {
    id: 1,
    img: "https://www.okler.net/previews/porto/9.9.3/img/logos/logo-1.png",
  },
  {
    id: 2,
    img: "https://www.okler.net/previews/porto/9.9.3/img/logos/logo-4.png",
  },
  {
    id: 3,
    img: "https://www.okler.net/previews/porto/9.9.3/img/logos/logo-6.png",
  },
  {
    id: 4,
    img: "https://www.okler.net/previews/porto/9.9.3/img/logos/logo-2.png",
  },
  {
    id: 5,
    img: "https://www.okler.net/previews/porto/9.9.3/img/logos/logo-3.png",
  },
  {
    id: 6,
    img: "https://www.okler.net/previews/porto/9.9.3/img/logos/logo-5.png",
  },
];

/*********************
 * Partners - end
 *********************/

/*********************
 * Blog - Start
 *********************/
const blogs = [
  {
    id: 1,
    title: 'Lorem, ipsum dolor sit amet consectetur',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    url: '/post/one',
    date: '12 Jun, 2023'
  },
  {
    id: 2,
    title: 'Lorem, ipsum dolor sit amet consectetur',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    url: '/post/two',
    date: '23 Jun, 2023'
  },
  {
    id: 3,
    title: 'Lorem, ipsum dolor sit amet consectetur',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    url: '/post/three',
    date: '5 Jun, 2023'
  },
]
/*********************
 * Blog - End
 *********************/

/*********************
 * Testimonial - Start
 *********************/
const testimonials = [
  {
    id: 1,
    img: 'https://www.okler.net/previews/porto/9.9.3/img/clients/client-1.jpg',
    name: 'John Doe',
    designation: 'MERN Developer',
    quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi impedit amet numquam magni provident maiores deleniti repellendus sint harum molestias!'
  },
  {
    id: 2,
    img: 'https://www.okler.net/previews/porto/9.9.3/img/clients/client-2.jpg',
    name: 'MC Donald',
    designation: 'MEAN Developer',
    quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi impedit amet numquam magni provident maiores deleniti'
  },
  {
    id: 3,
    img: 'https://www.okler.net/previews/porto/9.9.3/img/clients/client-1.jpg',
    name: 'Karter',
    designation: 'Laravel Developer',
    quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi impedit amet numquam magni provident maiores deleniti repellendus sint harum molestias!'
  },

]
/*********************
 * Testimonial - end
 *********************/


/*********************
 * Team Simple - start
 *********************/
const teamMemebers = [
  {
    id: 1, 
    name: 'John Doe',
    designation: 'CEO',
    photo: 'https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-1-367x367.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.',
    social: [
      {
        url: 'https://www.facebook.com/',
        icon: 'fa-facebook-f'
      },
      {
        url: 'http://www.linkedin.com/',
        icon: 'fa-linkedin-in'
      }
    ]
  },
  {
    id: 2, 
    name: 'Jessica Doe',
    designation: 'MARKETING',
    photo: 'https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-2-367x367.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.', 
    social: [
      {
        url: 'https://www.twitter.com/',
        icon: 'fa-twitter'
      },
      {
        url: 'http://www.linkedin.com/',
        icon: 'fa-linkedin-in'
      }
    ]
  },
  {
    id: 3, 
    name: 'Rick Edward',
    designation: 'DEVELOPER',
    photo: 'https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-3-1-367x367.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.', 
    social: [
      {
        url: 'https://www.facebook.com/',
        icon: 'fa-facebook-f'
      },
      {
        url: 'https://www.twitter.com/',
        icon: 'fa-twitter'
      },
      {
        url: 'http://www.linkedin.com/',
        icon: 'fa-linkedin-in'
      }
    ]
  },
  {
    id: 4, 
    name: 'Melinda Wolosky',
    designation: 'DESIGNER',
    photo: 'https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-4-1-367x367.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.', 
    social: [
      {
        url: 'https://www.twitter.com/',
        icon: 'fa-twitter'
      },
      {
        url: 'https://www.facebook.com/',
        icon: 'fa-facebook-f'
      },
    ]
  },
  {
    id: 5, 
    name: 'Robert Doe',
    designation: 'DEVELOPER',
    photo: 'https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-5-1-367x367.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.', 
    social: [
      {
        url: 'https://www.twitter.com/',
        icon: 'fa-twitter'
      },
      {
        url: 'http://www.linkedin.com/',
        icon: 'fa-linkedin-in'
      }
    ]
  },
  {
    id: 6, 
    name: 'Melissa Doe',
    designation: 'DESIGNER',
    photo: 'https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-6-367x367.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.', 
    social: [
      {
        url: 'https://www.twitter.com/',
        icon: 'fa-twitter'
      },
      {
        url: 'http://www.linkedin.com/',
        icon: 'fa-linkedin-in'
      }
    ]
  },
  {
    id: 7, 
    name: 'Will Doe',
    designation: 'DEVELOPER',
    photo: 'https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-7-367x367.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.', 
    social: [
      {
        url: 'https://www.twitter.com/',
        icon: 'fa-twitter'
      }
    ]
  },
  {
    id: 8, 
    name: 'Jerry Doe',
    designation: 'DESIGNER',
    photo: 'https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-8-367x367.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan.', 
    social: [
      {
        url: 'https://www.facebook.com/',
        icon: 'fa-facebook-f'
      },
      {
        url: 'https://www.twitter.com/',
        icon: 'fa-twitter'
      }
    ]
  },

]
/*********************
 * Team Simple - end
 *********************/