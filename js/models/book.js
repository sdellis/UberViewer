// library/js/models/book.js

var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/cover.jpg',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    },

    idAttribute: '_id'

})
