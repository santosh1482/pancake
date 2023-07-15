const hbs = require('hbs');

const lt = hbs.registerHelper('lt', function (a, b, options) {
    if(a==NaN || a== undefined) return 1;
    if(b==NaN || b== undefined) return 1;
    if (a < b) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
  
const gt = hbs.registerHelper('gt', function (a, b, options) {
    if(a==NaN || a== undefined) return 1;
    if(b==NaN || b== undefined) return 1;
    if (a > b) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
  
  const isEq = hbs.registerHelper('isEq', function (a, b, options) {
    if (a == b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
  
 const sum=  hbs.registerHelper('sum', function (a,b, options) {
    if(a==NaN || a== undefined) return 1;
    if(b==NaN || b== undefined) return 1;
    return a+b;
  });

  const slNo = hbs.registerHelper('slNo', function (index, currentPage, itemsPerPage, options) {
    return (currentPage-1)*itemsPerPage + index+1;
  });

const time = hbs.registerHelper('time', function(_id) {
  const timestamp = _id.getTimestamp();
  const localTime = timestamp.toLocaleString(); 
  return localTime;
});
  
  module.exports = {
    gt,lt,sum, isEq, time
  };