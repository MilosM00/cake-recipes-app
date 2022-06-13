import React from "react";
import Recipes from "./components/Recipes";

const App = () =>{

    const recipes = [
        {
            url: "https://omgchocolatedesserts.com/wp-content/uploads/2014/11/Oreo-Cheesecake-Chocolate-Cake-1.jpg",
            title: "Oreo Cheesecake Chocolate Cake",
            time: "1 Hour",
            bake: "30 Minutes",
            ingredients: "Cocoa, Oreo Cookies",
            about: "Sandwiched between two chocolate cakes is a mass of tasty white filling made of heavy whipping cream, cream cheese, sugar, and Oreo cookies. Add in a decadent chocolate ganache topping made of milk chocolate and heavy whipping cream, and you are in chocolate heaven. If you love Oreos and chocolate, this Oreo Cheesecake Chocolate Cake is definitely one recipe to try."
        },

        {
            url: "https://www.cookingclassy.com/wp-content/uploads/2014/02/coconut-cake-5-768x1152.jpg",
            title: "Coconut Cake",
            time: "30 Minutes",
            bake: "20 Minutes",
            ingredients: "Shredded Coconut, Cream Cheese",
            about: "Sometimes, the classics really are the best – this traditional Coconut Cake recipe is just like Grandma’s coconut cake, and oh so tasty. Layers of natural coconut flavor lace every bite, and the cream cheese frosting adds a nice tang. For a simple, good-old-fashioned coconut cake, this is one of the best cake recipes for you.",
        },

        {
            url: "https://i3.wp.com/chocolatechocolateandmore.com/wp-content/uploads/2014/08/Ding-Dong-Cake-32a.jpg",
            title: "Ding Dong Cake",
            time: "25-30 Minutes",
            bake: "45-50 Minutes",
            ingredients: "Coffee, Buttermilk, Heavy Cream",
            about: "While it may not be any healthier, this cake recipe is a grown-up way of doing Ding Dongs and Swiss Rolls. Devil’s food cake and a vanilla cream filling make the base of the cake, which is then smothered in chocolate ganache. Try this Ding Dong Cake recipe for a truly decadent and delicious cake.",
        },

        {
            url: "https://bakerbynature.com/wp-content/uploads/2016/07/untitled-45-of-197-1.jpg",
            title: "Salted Caramel Chocolate Cake",
            time: "1 Hour",
            bake: "30 Minutes",
            ingredients: "Caramel Sauce, Heavy Cream, Cocoa Powder",
            about: "This chocolate cake is perfect for special occasions or on any day that you are feeling like it. It has three layers of rich, decadent salted caramel chocolate cake and homemade chocolate frosting. And, while this recipe calls for store-bought salted caramel, a link to a delicious homemade salted caramel is also provided.",
        },

        {
            url: "https://www.lifeloveandsugar.com/wp-content/uploads/2017/01/Strawberries-And-Cream-Cheesecake-Cake7.jpg",
            title: "Strawberries and Cream Cheesecake Cake",
            time: "1 Hour",
            bake: "2 Hours",
            ingredients: "Cream Cheese, Strawberry Puree, Strawberries",
            about: "With a creamy layer of vanilla cheesecake sandwiched between two layers of strawberry cake, this cake is as tasty as it is unique. While not too hard to make, the cheesecake does take time to cool. So it may be best to make the cheesecake first, let it sit overnight, and then add it to your freshly baked strawberry cake the next day.",
        },

        {
            url: "https://www.lifeloveandsugar.com/wp-content/uploads/2016/10/Mint-Chocolate-Chip-Layer-Cake4.jpg",
            title: "Mint Chocolate Chip Layer Cake",
            time: "1 Hour",
            bake: "35 Minutes",
            ingredients: "Mint Chocolate Pieces, Cocoa Powder",
            about: "If mint chocolate chip ice cream is your jam, then this is the perfect cake for you. Rich and chocolatey, the chocolate cake pairs perfectly with the mint chocolate chip buttercream. For a special treat, this is the cake to turn to.",
        },
        
        {
            url: "https://www.eatingonadime.com/wp-content/uploads/2020/04/Cinnamon-Roll-Cake-LR-15.jpg.webp",
            title: "Cinnamon Roll Cake",
            time: "15 Minutes",
            bake: "30 Minutes",
            ingredients: "Cinnamon, Brown Sugar",
            about: "For a fun change-up from the traditional coffee cake, this Cinnamon Roll Cake is perfect for breakfast or any time of the day. Moist and tasty, the cake is also easy and quick to make, making this one recipe you will turn to time and time again.",
        },
        
        {
            url: "https://www.mycakeschool.com/images/2014/08/carrot-cake-from-scratch-recipe-photo-780x780.jpg",
            title: "Carrot Cake",
            time: "25-30 Minutes",
            bake: "35 Minutes",
            ingredients: "Carrots, Pecans, Cream Cheese",
            about: "Full of scrumptious goodness like crushed pineapple, pecans, coconut, and of course, carrots, this carrot cake is truly spectacular. With the homemade cream cheese frosting added in, you can’t go wrong with this carrot cake. The warm spices and chunky texture give it a leg up on other carrots cakes, so if you love carrot cake, then you need to give this recipe a try!",
        },

        {
            url: "https://chelsweets.com/wp-content/uploads/2022/06/bite-of-white-chocolate-raspberry-cake-on-a-fork-closer-735x919.jpg.webp",
            title: "White Chocolate Raspberry Cake",
            time: "20 Minutes",
            bake: "30 Minutes",
            ingredients: "White Chocolate, Raspberry Jam, Raspberries",
            about: "This cake is a nice departure from the regular chocolate and raspberry combination. It is going to use white chocolate instead, and it is a great cake for any special occasion. The sweet raspberry jam adds exceptional moistness, while the decadence of the white chocolate makes this cake truly special.",
        },

        {
            url: "https://tornadoughalli.com/wp-content/uploads/2017/03/Vanilla-Bean-Pistachio-Cake5.jpg",
            title: "Vanilla Bean Pistachio Cake",
            time: "30 Minutes",
            bake: "30 Minutes",
            ingredients: "Pistachios, Pistachio Pudding",
            about: "For a light and summery cake, this Vanilla Bean Pistachio Cake is perfect. The pistachio frosting comes from a pistachio pudding, making it easy to make. And, the vanilla bean is the ideal complement to the light flavor of the pistachio.",
        },

        {
            url: "https://livforcake.com/wp-content/uploads/2016/10/pumpkin_spice_latte_cake-17.jpg.webp",
            title: "Pumpkin Spice Latte Cake",
            time: "2 Hours",
            bake: "45 Minutes",
            ingredients: "Pumpkin Puree, Espresso Powder, Pumpkin Pie Spice",
            about: "Now you can not only drink your pumpkin spice latte; you can eat it too! This pumpkin spice cake with an espresso buttercream is all of your favorite fall flavors rolled into one. We won’t tell if you eat it year-round, though!",
        },

        {
            url: "https://s3.amazonaws.com/img.kh-labs.com/Jg0OSm5d52c13a1be1d8.79821083",
            title: "Hummingbird Cake",
            time: "15 Minutes",
            bake: "25-30 Minutes",
            ingredients: "Banana, Pecans, Crush Pineapple, Cream Cheese",
            about: "True Southerners know and love hummingbird cake. Moist, but dense, this layer cake has a little of everything. Ingredients include banana, pineapple, pecans, warm spices, and a decadent cream cheese frosting. If you love carrot cake or banana cake, then a hummingbird cake is right up your alley and would be one of the best cake recipes for you.",
        },

        {
            url: "https://www.mycakeschool.com/images/2016/06/Orange-Dreamsicle-Cake-Image-780x780.jpg",
            title: "Orange Dreamsicle Cake",
            time: "30 Minutes",
            bake: "25-30 Minutes",
            ingredients: "Orange Zest, Orange Extract, Frozen Orange Juice Concentrate",
            about: "Who doesn’t love a good Orange Dreamsicle in the summer? Now, you can have this tasty frozen treat in cake form – a win all around! Light and refreshing (it almost seems good for you!), this cake is sure to please the crowds. Give this cake a try for your next picnic.",
        },
        
        {
            url: "https://www.averiecooks.com/wp-content/uploads/2014/11/funfetticaketext.jpg",
            title: "Funfetti Cake with Vanilla Buttercream",
            time: "10 Minutes",
            bake: "30 Minutes",
            ingredients: "Buttermilk, Sprinkles",
            about: "Add as many sprinkles as you want in this tasty Funfetti Cake recipe. The buttermilk cake is flavorful and moist, thanks to ingredients like buttermilk, sour cream, and oil. The cake is also mixer-free, making this an easy recipe to try.",
        },
        
        {
            url: "https://bakethiscake.files.wordpress.com/2012/06/banana-layer-cake-on-black-plate-2with-cake-in-bg-bakethiscake.jpg?w=560",
            title: "Banana Cake",
            time: "10-15 Minutes",
            bake: "30 Minutes",
            ingredients: "Bananas, Buttermilk",
            about: "Have some ripe bananas that you need to get rid of? Why not make this classic, delicious Banana Cake? This banana layer cake is a throwback from the 1940s and is just as good now as it was then. A fresh banana buttercream frosting recipe is also included, making this recipe a gem for banana lovers and furthering its argument as one of the best cake recipes.",
        },

        {
            url: "https://hips.hearstapps.com/ghk.h-cdn.co/assets/15/12/768x383/gallery-1426719496-chocolate-cake.jpg?resize=980:*",
            title: "Chocolate Cake",
            time: "20 Minutes",
            bake: " 25 Minutes",
            ingredients: "Cocoa, Buttermilk",
            about: "The Good Housekeeping Test Kitchen claims this recipe is the best Chocolate Cake you’ll ever have. This may be why Good Housekeeping has included this recipe in the magazine since 1927. This version contains a more intense chocolate flavor than previous recipes, thanks to both cocoa powder and semisweet chocolate. If you love a good chocolate cake, you owe it to yourself to try this recipe.",
        },

        {
            url: "https://cookiesandcups.com/wp-content/uploads/2015/05/kentuckybuttercake.jpg",
            title: "Kentucky Butter Cake",
            time: "20 Minutes",
            bake: "75 Minutes",
            ingredients: "Buttermilk, Butter",
            about: "This Kentucky Butter Cake is a sweet, buttery, soft cake that tastes delicious on its own or with fruit and cream. The star of the recipe is the butter sauce that crusts the outside and soaks into the cake. Make extra of this cake – it won’t last long.",
        },

        {
            url: "https://sallysbakingaddiction.com/wp-content/uploads/2014/02/Sallys-Baking-Addiction-Delicious-Lemon-Blueberry-Layer-Cake.jpg",
            title: "Lemon Blueberry Layer Cake",
            time: "30 Minutes",
            bake: "25 Minutes",
            ingredients: "Lemons, Blueberries, Buttermilk",
            about: "The perfect balance between sweet and tangy, this Lemon Blueberry Layer Cake is bright, fresh, and delicious. Cream cheese frosting amps up the richness, while fresh lemons ensure that every bite is tasty. Try this recipe out in spring and summer, or any time you wish it was spring or summer!",
        },

        {
            url: "https://thecakeblog.com/wp-content/uploads/2014/07/banana_hazelnut_cake_1.jpg",
            title: "Banana Chocolate Hazelnut Cake",
            time: "20 Minutes",
            bake: "20-25 Minutes",
            ingredients: "Bananas, Greek Yogurt",
            about: "This Banana Chocolate Hazelnut Cake is taken up a notch with the addition of a Nutella buttercream. The tasty buttercream is used as frosting, as well as in the filling. Some chopped and toasted hazelnuts add to the flavor, and an optional salted caramel sauce makes this one recipe that covers all of the bases.",
        },

        {
            url: "http://mayflaum.files.wordpress.com/2011/06/a5.jpg",
            title: "Chocolate Cola Cake",
            time: "15 Minutes",
            bake: "30 Minutes",
            ingredients: "Coca Cola, Cocoa Powder",
            about: "While Northerners may not be familiar with this Cake, true Southerners know a thing or two about the delicious Chocolate Cola Cake. Coke is in both the base of the cake and the glaze, making one of the moistest, tastiest cakes you have ever experienced.",
        }

    ];

    return(

        <div>
            <Recipes 
                recipes={recipes}
            />
        </div>

    );
};

export default App;