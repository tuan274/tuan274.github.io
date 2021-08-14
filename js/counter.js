// JavaScript Document

$.Tween.propHooks.number = {
  get: function(tween) {
    var num = tween.elem.innerHTML.replace(/^[^\d-]+/, "");
    return parseFloat(num) || 0;
  },

  set: function(tween) {
    var opts = tween.options;
    tween.elem.innerHTML =
      (opts.prefix || "") +
      tween.now.toFixed(opts.fixed || 0) +
      (opts.postfix || "");
  }
};

$("#num-1").animate(
  { number: 2560 },
  {
    duration: 1000,
    postfix: "+"
  }
);

$("#num-2")
  .delay(500)
  .animate(
    { number: 3065 },
    {
      duration: 2000,
      postfix: "+"
    }
  );

$("#num-3")
  .delay(2000)
  .animate(
    { number: 6800 },
    {
      duration: 5000,
      postfix: "+"
    }
  );

$("#num-4")
  .delay(4000)
  .animate(
    { number: 1500 },
    {
      duration: 5000,
      postfix: "+"
    }
  );
