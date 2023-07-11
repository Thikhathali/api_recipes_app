$(() => {
    const log = console.log;

    class Recipe {
        constructor(name, category, ingredients, steps){
            this.name = name;
            this.category = category;
            this.ingredients = ingredients;
            this.steps = steps;
        }
    }

    const lstRecipes = [
        new Recipe(
            "Greek", 
            "Salad",
            "Lettuce, cucamba, dressing",
            "1-Chop, 2-add dressing"
        ),
        new Recipe(
            "Maccaroni & Mince", 
            "Dinner",
            "Mince, Maccoroni, Water", 
            "1-spice mince 2-cook Maccaroni"
        ),
        new Recipe(
            "Greek", 
            "Salad",
            "Lettuce, cucamba, dressing",
            "1-Chop, 2-add dressing"
        ),
        new Recipe(
            "Melted Cheese bread", 
            "Breakfast",
            "Bread, cheese, mayo",
            "1-toast bread, 2-melt cheese"
        ),
        new Recipe(
            "wrap", 
            "Lunch",
            "Lettuce, cucamba, dressing, wrap",
            "1-chop meat 2-add salad 3-put dressing"
        )
    ];

    // lstRecipes.map((recipes) => log(recipes));

    const renderCategories = (recipeArray) => {
        let $strCategories = $('ul.category-items');
        let strCatItem = recipeArray.map((recipe) => {
            return(`
                <li>
                    <div id="item-1">
                        <img src="" alt="icon-1">
                        <p>${recipe.category}</p>
                    </div>
                </li>
            `)
        });
        $strCategories.append(strCatItem);
    }

    const renderRecipes = (recipeArray) => {
        let $strRecipes = $('ul.recipe-items');
        let $strRecipesItems = recipeArray.map((recipe) => {
            return (`
                <span>></span>
                <li>
                    <div id="item">
                        <img src="" alt="recipe img-1">
                        <div class="item-content">
                            <h3>${recipe.name}</h3>
                            <p>${recipe.ingredients}</p>
                        </div>
                    </div>
                </li>
            `);
        });
        $strRecipes.append($strRecipesItems).hide().fadeIn(700);
    }

    const renderRecipesByCategory = (recipeArray, category) => {
        let $categoryRecipes = recipeArray.filter((recipes) => 
            recipes.category === category
        );
        return $categoryRecipes;
    }

    $('ul.category-items').on('click', (e) => {
        let listCatItem = e.target.parentNode.parentNode;
        let elPCategory = listCatItem.firstChild.nextSibling
                            .lastChild.previousElementSibling.textContent;

        if(listCatItem.nodeName !== 'LI') return

        let recipeByCat = renderRecipesByCategory(lstRecipes, elPCategory );

        $('ul.recipe-items').html('');
        renderRecipes(recipeByCat);
    });
   
    renderCategories(lstRecipes);
})