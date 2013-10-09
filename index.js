
/**
 * get the current viewport size
 * credit goes here: http://stackoverflow.com/a/11744120/1198166
 * @return {Object} containing width and height
 */

module.exports = function(){
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0];

  return {
    width: w.innerWidth || e.clientWidth || g.clientWidth,
    height: w.innerHeight|| e.clientHeight|| g.clientHeight
  };
}