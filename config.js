// CUT START
var disableSetup = true; // Manually set to true to disable setup page menu option
var topBarCenterText = "K2MMT - DM14tg";

// Grid layout desired
var layout_cols = 6;
var layout_rows = 3;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [
  [
    "https://bitcoinmagazine.com/feed",
    60
  ]
];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "BTC 1 HOUR",
    "iframe|https://s.tradingview.com/widgetembed/?frameElementId=tradingview_btcusd&symbol=COINBASE:BTCUSD&interval=60&hide_top_toolbar=1&theme=dark&style=1"
  ],
  [
    "S&P 1 HOUR",
    "iframe|https://s.tradingview.com/widgetembed/?frameElementId=tradingview_btcusd&symbol=AMEX:SPY&interval=60&hide_top_toolbar=1&theme=dark&style=1"
  ],
  [
    "BTC 15 MINUTES",
    "iframe|https://s.tradingview.com/widgetembed/?frameElementId=tradingview_btcusd&symbol=COINBASE:BTCUSD&interval=1&hide_top_toolbar=1&theme=dark&style=1"
  ],
  [
    "S&P 15 MINUTES",
    "iframe|https://s.tradingview.com/widgetembed/?frameElementId=tradingview_btcusd&symbol=AMEX:SPY&interval=1&hide_top_toolbar=1&theme=dark&style=1"
  ],
  [
    "",
    "https://www.hamqsl.com/solarmuf.php"
  ],
  [
    "",
    "https://www.hamqsl.com/solar101vhf.php"
  ],
  [
    "SATELLITE USA",
    "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/CONUS/EXTENT3/GOES19-CONUS-EXTENT3-625x375.gif"
  ],
  [
    "SATELLITE LOCAL",
    "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/SECTOR/psw/EXTENT3/GOES19-PSW-EXTENT3-600x600.gif"
  ],
  [
    "RADAR",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
  ],
  [
    "RADAR LOCAL",
    "https://radar.weather.gov/ridge/standard/KSOX_loop.gif"
  ],
  [
     "RADAR LOCAL",
     "iframe|https://embed.windy.com/embed2.html?lat=34.3&lon=-116.4&detailLat=34.3&detailLon=-116.4&zoom=6&hourly=1&metricTemp=%C2%B0F&metricWind=mph&marker=true&overlay=radar&play=true"
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png"
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa"
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ca.png"
  ],
  [
    "WIND LOCAL",
    "iframe|https://embed.windy.com/embed2.html?lat=34.3&lon=-116.4&detailLat=34.3&detailLon=-116.4&zoom=6&hourly=1&metricTemp=%C2%B0F&metricWind=mph&marker=true"
  ],
  [
     "GUSTS LOCAL",
     "iframe|https://embed.windy.com/embed2.html?lat=34.3&lon=-116.4&detailLat=34.3&detailLon=-116.4&zoom=6&hourly=1&metricTemp=%C2%B0F&metricWind=mph&marker=true&overlay=gust&play=true"
  ],
  [
     "TEMP LOCAL",
     "iframe|https://embed.windy.com/embed2.html?lat=34.3&lon=-116.4&detailLat=34.3&detailLon=-116.4&zoom=6&hourly=1&metricTemp=%C2%B0F&metricWind=mph&marker=true&overlay=temp"
  ],
  [
    "WX LOCAL",
    "iframe|https://www.meteoblue.com/en/weather/widget/daily/landers_united-states_5364967?geoloc=fixed&days=7&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=1&windspeed=1&windgust=1&winddirection=0&uv=1&humidity=0&precipitation=0&precipitationprobability=1&spot=1&pressure=0&layout=dark"
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  600000,
  602000,
  605000,
  608000,
  602000,
  617000,
  310000,
  315000,
  320000,
  301500,
  613000,
  313000,
  309000,
  312000,
  306000,
  309000,
  308550,
  603500,
];

// CUT END
