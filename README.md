# 🤖 Stormy Bot Documentation🌪 https://stormybot.talktoai.co/
## IBM Call for Code 2020
### Global Competition 
###### Mentors & Moderators during challenge: IBM Engineers from Colombia & Peru
###### ||Tech Stak: IMB Watson + IMB Notifications + NASA GIBS API ||
###### ||Data Sources: [NASA GIBS API](https://wiki.earthdata.nasa.gov/display/GIBS/GIBS+API+for+Developers) ||
###### ||Challenge: Climate Change ||
###### ||Region: Latin America & Caribbean 🌎 ||

[Submission to the Challenge](#)

- [Dashboard Demo](https://stormybot.talktoai.co/)

#### Stormy Bot is a virtual assistant trained with IBM Watson on monitoring near-real time @NASA data about Floods, Fires, Storms and Volcanoes Hazard around the world! Our goal is to help building adaptable and Resilient Cities to Natural Disasters!

#### How it works:

[![Stormy Bot Live Demo](https://img.youtube.com/vi/7bLHkBmf1UM/3.jpg)](https://youtu.be/7bLHkBmf1UM)



> Phase 1: Earth Exploration

We use the ***NASA's Global Imagery Browse Services (GIBS) APIs*** as a Data Provider for the satellite imagery and visualize the Data Layers using  ***Web Map Title Service (WMTS)*** such as:

- URL: https://gibs.earthdata.nasa.gov/wmts/
- Layer: (e.g. "MODIS / Terra")
- Matrix Set:'EPSG_(n)m'
- Origin:[Lat, Long]
- Resolution:[0...2]
- Tile: Open Layers

> Create Layer function:

```
 function createLayer() {
    var source = new ol.source.WMTS({
      url: 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?SERVICE='
      layer: 'MODIS_Terra_Property1_Property(n)',
      format: 'image/jpeg',
      matrixSet: 'EPSG_(N)m',
      tileGrid: new ol.tilegrid.WMTS({
        origin: [Lat, Long],
        resolutions: [
          0...(n)
        ],
        matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        tileSize: 512
      })
    });
```

> Phase 2: Aggregate External Data from APIs

#### What's next?

> Phase 4: Social Media API
By Meassuring near real time Keyword trends in search engines we can Correlate the socio economic variables such as: (i) Total Population, (ii)GDP, Country Debt, (iv) Foreign Investment, (v) Public Transport Statistics and (n) other predictors as (vi) Education for adjusting our COVID19 Spread risk and prevention model scoring.


```
KeywordTrends.dailyTrends({
  trendDate: new Date('2019-01-10'),
  geo: 'US',
}, function(err, results) {
  if (err) {
    console.log(err);
  }else{
    console.log(results);
  }
});
```
> Step 5: Computer Vision 
Users can send their pictures from climate events. 
