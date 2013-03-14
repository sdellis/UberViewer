// library/js/models/page.js

var app = app || {};

app.Page = Backbone.Model.extend({

    defaults: {
        identifier: "pudl0001/4609321/s42/00000001",
        width: 2617,
        height: 3600,
        scale_factors: [
            1,
            2,
            3,
            4,
            5
        ],
        tile_width: 256,
        tile_height: 256,
        formats: [
            "jpg",
            "png"
        ],
        qualities: [
            "native",
            "bitonal",
            "grey",
            "color"
        ],
        profile: "http://library.stanford.edu/iiif/image-api/compliance.html#level1"
    }
    
})