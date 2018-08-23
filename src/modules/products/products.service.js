angular.module('productsModule')
    .factory('productsService', ['$http', 'config', function ($http, config) {
        var publicMethods = {
            getProducts: function (type) {
                var products = [{
                        "id": 237,
                        "name": "Egg-Cellent Choice!",
                        "subtitle": "cheesy egg omelet served with homemade shredded hash browns",
                        "price": 4,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523912454/nvv20xarxp9scnhm8t0c.jpg"
                    },
                    {
                        "id": 227,
                        "name": "Pizza Empanada",
                        "subtitle": "served with cheddar cheese sprinkled mashed potatoes and broccoli",
                        "price": 8,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523912861/ullzywc7uk7fi23xjdjk.jpg"
                    },
                    {
                        "id": 229,
                        "name": "Cheeseburger Empanada",
                        "subtitle": "served with loaded mashed potatoes",
                        "price": 27,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523912831/fwzv73qxdk7mubaxlop4.jpg"
                    },
                    {
                        "id": 232,
                        "name": "Bean-A-Rito",
                        "subtitle": "black bean burrito served with sweet potato mash",
                        "price": 39,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523912685/kns6jd23cvrimxyxupwe.jpg"
                    },
                    {
                        "id": 249,
                        "name": "Tropical Chicken",
                        "subtitle": "served with sweet pineapple rice",
                        "price": 53,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1527782328/pmzsret4bjp12mjzlpex.jpg"
                    },
                    {
                        "id": 223,
                        "name": "Holy Moly Ravioli",
                        "subtitle": "cheese ravioli served with dark chocolate pretzels and dried apricots",
                        "price": 67,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1526941043/qsbr8g8eznlxbboienps.jpg"
                    },
                    {
                        "id": 234,
                        "name": "Sweet Buffaloaded Chicken Wrap",
                        "subtitle": "buffalo chicken wrap served with avocado chips and crunchy chia bar",
                        "price": 13,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523912667/zjkzicmkqh8abae7j4qf.jpg"
                    },
                    {
                        "id": 247,
                        "name": "Pizza-licious!",
                        "subtitle": "served with cherry tomatoes",
                        "price": 2,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1527782840/zs7yxqxivn2zi5knci9e.jpg"
                    },
                    {
                        "id": 235,
                        "name": "Grilled Chicken Strips",
                        "subtitle": "served with simple orzo salad",
                        "price": 29,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1524228858/pttrpuwo2elfzc4iqv6c.jpg"
                    },
                    {
                        "id": 241,
                        "name": "Protein Pack",
                        "subtitle": "naan triangles served with cheese cubes, steamed shelled edamame beans, and 2 protein poppers",
                        "price": 56,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1526941099/yifg3bpvxn80ogpqv9mw.jpg"
                    },
                    {
                        "id": 231,
                        "name": "Finger Lickin' Chicken Fingers",
                        "subtitle": "crunchy chicken fingers served with hash browns and broccoli",
                        "price": 18,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523912702/grgkidjyglnzyo7fxjmd.jpg"
                    },
                    {
                        "id": 228,
                        "name": "Chili Chili Bang Bang",
                        "subtitle": "hearty vegetarian chili served with brown rice",
                        "price": 85,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523912847/md2awrquqxf728qgus61.jpg"
                    },
                    {
                        "id": 242,
                        "name": "S'Mac N Cheese",
                        "subtitle": "served with homemade broccoli tots",
                        "price": 36,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1527718463/mwgf0ynguwmthxqbem0x.jpg"
                    },
                    {
                        "id": 236,
                        "name": "Munch A Lunch",
                        "subtitle": "pepperoni and cheese slices served with naan triangles, dried cranberries, and  avocado chips",
                        "price": 22,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523912496/biys830txtx0tn8g3arj.jpg"
                    },
                    {
                        "id": 245,
                        "name": "Chicken Pops!",
                        "subtitle": "served with jasmine rice and honey glazed carrots",
                        "price": 71,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1527719429/ew9t6vwzetbmcs7vk4bb.jpg"
                    },
                    {
                        "id": 243,
                        "name": "Veggie Fried Rice",
                        "subtitle": "served with sweet tofu and edamame beans",
                        "price": 9,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1527718912/zvhulol9cgvdjcdvchxu.jpg"
                    },
                    {
                        "id": 238,
                        "name": "Turkey Cheddar Pinwheels",
                        "subtitle": "served with crunchy pretzels and edamame beans",
                        "price": 52,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523912425/jkdeix4hznsemyxbt7yi.jpg"
                    },
                    {
                        "id": 226,
                        "name": "Gobble Meat Up",
                        "subtitle": "turkey kale meatballs served with sweet potato mash and popcorn cauliflower",
                        "price": 9,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523912893/xkihdyfzlrmiimu3wxb3.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Chicken Nuggets",
                        "subtitle": "served with edamame, fresh corn kernels, crunchy pretzels, and clean ketchup",
                        "price": 60,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1523913217/aodrrmd2tzd6me4qw9ly.jpg"
                    },
                    {
                        "id": 181,
                        "name": "Sweet N Sour Meatballs",
                        "subtitle": "served with a side of orzo and peas",
                        "price": 76,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1521556128/fvw0cbxvnc9eoeaip5w5.jpg"
                    },
                    {
                        "id": 116,
                        "name": "Protein Poppers",
                        "subtitle": "made from sunbutter, coconut, oats, and cocoa nibs",
                        "price": 90,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1524136580/rps9zqem5w4w37ixnlog.jpg"
                    },
                    {
                        "id": 115,
                        "name": "Crunchy Granola",
                        "subtitle": "made from organic oats and organic hemp and flax seeds",
                        "price": 44,
                        "image": "https://res.cloudinary.com/diztb2yum/image/upload/v1524136659/ctnddtm8wkd7hdhbphgp.jpg"
                    }
                ];
                return $http.get('https://api.mlab.com/api/1/databases/example/collections/products/?apiKey=cREe8UEMNaCB7qCP_gIIIQ1sm8Lry3mO', {
                        params: {
                            q: {
                                'category': type
                            }
                        }
                    })
                    .then(function (response) {
                        return products;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            },
        };
        return publicMethods;
    }])