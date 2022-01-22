const hbs = require('hbs');

hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper("setKeyWords", (keyWords) => {
    const translationObj = {
        forest: "bosque",
        culture: " cultura",
        guide: " guía",
        food: " comida",
        sea: " mar",
        romantic: " romántico"
    }

    return keyWords.map(word => {
        return translationObj[word]
    })
})
