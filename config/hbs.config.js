const hbs = require('hbs');
const { LengthRequired } = require('http-errors');

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

hbs.registerHelper('for', function(from, to, incr, block) {
    let accum = '';
    for(let i = from; i < to; i += incr)
        accum += block.fn({ index: i, pretty: i + 1});
    return accum;
});
