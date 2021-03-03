// Mixed Messages Project 

// Get random number 1-10
function getRandomInt() {
    return Math.ceil(Math.random() * 10)
}
// 1.Objects 
// 1.1 Breakfast
const breakfast = {
    1: {
        name: 'Protein packed oatmeal',
        ingredients: '130g old rolled oats, 900ml water, 4 eggs, 2 banana, 480ml unsweetened plant-based milk, 1tsp cinnamon',
        kcal: 298
    },
    2: {
        name: 'Sweet Banana Omelette',
        ingredients: '2 large eggs, 1 medium banana, 1tsp almond butter, 2tsp maple syrup, 4 raw walnut halves, 1Tbls dried coconut flakes, cinnamon, pinch of sea salt',
        kcal: 441
    },
    3: {
        name: 'Protein breakfast bowl',
        ingredients: '4 eggs, 280g smoked ham, 400g cottage cheese, 2 apples',
        kcal: 284
    },
    4: {
        name: 'Chocolate chip banana bread pancakes',
        ingredients: '180g all purpose flour, 2tsp baking powder, 2tsp cinnamon, 1/2tsp salt, 120ml unsweetened plant-based milk, 2 ripe banana, 2 eggs, 2tbsp canola oil, 120ml honey, 80g chopped dark chocolate',
        kcal: 535
    },
    5: {
        name: 'Mango pancakes',
        ingredients: '300g mango, 6 eggs, 70g vanilla casein protein powder, 1/2tsp salt, 2tbsp coconut oil, 280g mixed berries',
        kcal: 318
    },
    6: {
        name: 'Apple pie oatmeal',
        ingredients: '240g rolled oats, 960ml water, 1tsp salt, 4 apples, 1tbsp coconut oil, 1tsp cinnamon, 1tsp cardamom, 3tbsp honey, 140g vanilla flovered casein',
        kcal: 456
    },
    7: {name: 'Cherrie and banana smoothie',
        ingredients: '280ml of pitted frozen cherries, 480ml of Greek yogurt, 2 bananas, 4tbsp honey',
        kcal: 273
        
    },
    8: {
        name: 'Salty breakfast bars',
        ingredients: '140g almonds, 140g cashews, 140g susame seeds, 120ml egg whites, 1tsp chili flakes, 1 1/2tsp sea salt, 1tbsp lime zest',
        kcal: 303
    },
    9: {
        name: 'Toast with scramled tofu',
        ingredients: '800g firm tofu, 3tbsp canola oil, 1tbsp turmeric, 4tbsp nuritional yeast, 4 slices rye bread, 1tsp salt, 1tsp ground balck pepper',
        kcal: 302 
    },
    10: {
        name: 'Bacon & egg breakfast tacos',
        ingredients: '8 thin bacon slices, 8 eggs, Spray oil, 8 small tortillas, 30g of shredded cheese, 40g baby spinach, 1/2 small onion, 1 tomato, 2tsp sriracha sauce',
        kcal: 345
    }
}
const launch = {
    1: {
        name: 'Tuna and avocado salad',
        ingredients: '4 servings: 480g canned tuna in water, 8 small eggs, 4 small avocado, 600g cherry tomatoes, 1 small red onion, 160g mixed salad, 4tbsp fresh lemon juice, 2tbsp olive oil, 1tsp sea salt, 1/2 tsp chili flakes',
        kcal: 548
    },
    2: {
        name: 'Crunchy salmon and broccoli',
        ingredients: '4 servings: 500g salmon fillet, 800g broccoli, 4tbsp almonds, 4 apples, 160g baby spinach, 3tbsp olive oil, 1tsp sea salt, 1/2tsp chilli flakes, 2tbsp dill',
        kcal: 559
    },
    3: {
        name: 'Tuna and tomato pasta',
        ingredients: '4 servings: 360g canned tuna in water, 8pcs anchovies fillets in oil, 2 garlic cloves, 500g cherry tomatoes, 3tsp olive oil, 400g pasta, 2tsp chili flakes',
        kcal: 602
    },
    4: {
        name: 'Chicken and vegetable stew with rice',
        ingredients: '4 servings: 800g chicke breast, 1 yellow bell paper, 1 red bell paper, 1 zucchini, 150g of water chestnuts, 1 garlic clove, 1/2tbsp olive oil, 170g jasmine rice, 400ml coconut milk, 240ml water, 1tsp chili flakes, 2tbsp curry powder, 1 lime ',
        kcal: 650
    },
    5: {
        name: 'Tofu and bean bowl',
        ingredients: '4 servings: 600g tofu, 400g peeled edamame beans, 180g brown rice, 4 eggs, 2tbsp olive oil, 120g baby spinach, 1tbsp sesame seeds, 1tsp salt, 1tsp ground cummin, 1tsp curry powder',
        kcal: 579
    },
    6: {
        name: 'Salmon and broccoli with cottage cheese',
        ingredients: '4 servings; 200g barley, 500g salmon, 600g broccoli, 500g precooked beets, 240g cottage cheese, 1 lemon',
        kcal: 599
    },
    7: {name: 'Chicken rice bowl',
        ingredients: '4 servigns: 500g chicken thighs, 2tbsp tamari sauce, 1tbsp ginger powder, 1tbsp honey, 1 cup brown rice, 160g kale, 2pcs red bell pepper, 4 eggs',
        kcal: 513
        
    },
    8: {
        name: 'Baked patato with creamy tunna salad',
        ingredients: '4 servings: 4 big patatoes, 560g canned tuna in water, 1 red onion, 360ml Greek yogurt, 1tbsp salt, 1tsp chili flakes, 1tbsp lemon zest, 15g chopped parsley, 2tbsp olive oil, 320g cherry tomatoes',
        kcal: 578
    },
    9: {
        name: 'Vegan poke bowl',
        ingredients: '4 servings: 500g tofu, 1tbsp sesame seeds, 2tbsp sesame oil, 4tbsp soy sauce, 2tbsp sriracha, 1 garclic clove, 300g jasmine rice, 1 magno, 100g shredded red cabbage, 155g edamame beans, 3 tomatoes, 40g baby spinach',
        kcal: 562
    },
    10: {
        name: 'Salmon and carrot salad with mint dressing',
        ingredients: '4 servings: 480g salmon fillet, 225g brown rice, 6 carrots, 1 cucumber, 240ml Greek yogurt, 1 handfull of mint leaves, 1 clove of chopped garlic, 1tsp chili flakes ',
        kcal: 579
    }
}