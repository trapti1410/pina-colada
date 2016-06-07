var _ = require("lodash");

global.transformTemplates = function(x) {
  return _.extend(x, {
    id: x.id.replace(/resources\/views\//, "").replace(/.twig/, ''),
    path: x.path.replace(/resources\/views\//, "").replace(/.twig/, '')
  })
}

var TEMPLATES = {
  "home_body": require("../../../resources/views/home/body.twig"),
  "home_story": require("../../../resources/views/home/story.twig")
};

module.exports = window.ooga = TEMPLATES;
