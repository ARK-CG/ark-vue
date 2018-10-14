import './imgur.min.js';
var callback = function(res) {
  if (res.success === true) {
    console.log(res.data.link);
  }
};

new Imgur({
  clientid: '5e377805afae4c8',
  callback: callback
});
