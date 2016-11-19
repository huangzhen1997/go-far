var yahooFinance = require('yahoo-finance');
yahooFinance.historical({
  symbol: 'AAPL',
  from: '2012-01-01',
  to: '2012-12-31',
  // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
}, function (err, quotes) {
  //...
});

yahooFinance.snapshot({
  symbol: 'AAPL',
  fields: ['s', 'n', 'd1', 'l1', 'y', 'r'],
}, function (err, snapshot) {
  //...
});