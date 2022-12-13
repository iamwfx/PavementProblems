
var config = 
{
    style:  'mapbox://styles/dmf233/clblflvrx000t14o50hrd41o4',
    accessToken: 'pk.eyJ1IjoiZG1mMjMzIiwiYSI6ImNsOTJ6NjhncDFvdXM0MW1ma2hpYW0zbTUifQ.oMxK01NXekozo-1bQcmDIQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'PAVEMENT & PROBLEMS',
    subtitle: 'Analysis on Autocentricity & Quality of Life in Ithaca, New York',
    byline: '',
    para1: ' NARRATIVE & MOTIVATION: The main narrative of the project is to illustrate the relationship between pavement, or in other words, roads networks, parking and overall auto-centricity and its role in creating  problems, specifically in relation to quality of life. Focusing primarily on the relationships and distinctions between common generalized data sets and means of collection with alternatives with more interactive findings on the community of study, emphasizing the movement from auto-centricity to a more human-centric analysis of the road conditions. For this analysis, we focused on Ithaca, New York. To build the argument, the study began with a series of data findings from New York State Open Source Data. A notable source that represents more generic data mapping practices such as traffic volume from the AADT. These standard methods were then layered with findings sourced through various forms of counter mapping to develop a greater narrative and more personal, human-centric understanding of these elements and how they affect the everyday quality of life in Ithaca, New York. <br><br>Layering the State data with a series of site analysis, we analyzed the noise levels thoughtout Ithaca, demonstrating the relationship between noise and traffic volume. Data was also collected on where parking tickets had been issued. Lastly, a number of interviews were conducted with Ithaca residents, primary Cornell students, to develop a greater first hand understanding of where their opinions and thoughts lie on the subject. The following will illustrate our findings in greater detail. ',
    footer: 'Designed by: Deanna Fraser. CRP3850. Fall 2022. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: 
    [
        {
            id: 'first-chapter',
            alignment: 'right',
            hidden: false,
            title: 'TRAFFIC VOLUME',
            image: 'images/traffic0.png',
            image2: 'images/legend1.png',
            description: 'Findings: The mapping from New York State Open Source data, illustrates the understanding that the concern in terms of traffic volume is primarily focused around the lower part of the commons, specifically Meadow Street and Fulton Street. However, our surveys with Ithaca residents, emphasized their concern with streets closer to College Town and Cornell’s main campus. <br><br> Limitations: A number of factors may be affecting these results, such as, the time of year that the state data was retrieved, for example if it was retrieved in the summer when a large portion of the university student would be away, likely altering the results, on the other hand, perhaps there is a misconception with the students that were interviewed, given that they are likely traveling at pike traffic intervals, given overlapping class time and rush hours.',            
            location: {
                center: [ -76.46945, 42.44220],
                zoom: 13,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'left',
            hidden: false,
            title: 'NOISE',
            image: 'images/noise0b.png',
            description: 'Figure 2. Decibel Application Main Page. One of the qualities that was useful from the app was that it listed an associated noise with the decibel that it was actively reading For example, in the image above, the app has compared 54dBa with a ‘Quiet Street’',
            location: {
                center: [-76.49128, 42.44511 ],
                zoom: 13.7,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
                id: 'interlude',
                alignment: 'center',
                hidden: false,
                video: 'images/Greenst_1.mov',
                description: 'Findings: Through our analysis, we found that there was a strong relationship between noise and traffic volumes, as well as a strong correlation with construction (more noise and traffic in areas of construction). It also appears that many of the areas of concern are a combination of multiple issues. For example, the streets with higher traffic volume, were noisier, and also smelt worse, which is associated with air quality. The surveys indicated that the areas of concern from greatest to least in Ithaca was firstly College Town, followed by the Commons, then North Campus, Main Campus, and lastly West Campus. In terms of our findings through decibel, there was support for both the New York State data as well as the survey. This indicates that both mapping practices have their own strengths and collectively they seem to illustrate a much deeper understanding of Ithaca’s road network. <br> <br> Limitations: There are variables that are difficult to control that may affect the noise levels. For example, as noted previously, construction was a main source of noise concerns, however, construction is not permanent, so these ‘noisy’ areas may change over time. Additionally, time of day is likely to affect the data as well, given work hours, both in terms of rush hours and the work schedule of the construction workers.',
                image: 'images/noisesurvey2.png',
                location: {
                  center: [-76.49128, 42.44511 ],
                  zoom: 13.55,
                  pitch: 60,
                  bearing: 260,
                },
        },
        {
            id: 'third-chapter',
            alignment: 'right',
            hidden: false,
            title: 'PARKING TICKETS & SURVEY FINDINGS',
            image: 'images/pt0.png',
            description: 'Finding: Through the findings from the survey a number of concerns were found in terms of the auto-centricity of Ithaca. All participants that had a car on campus emphasized that there was not enough parking. There was also a notable degree of concern in terms of the average number of parking tickets being 6.4 (every half year) and that the average participant with a car spent roughly $240 on parking tickets (every half year). What may be one of the more interesting findings from the study was that despite the number of problems in regards to Ithaca’s road networks, the majority of those surveyed felt that it is still worth it to have a car in Ithaca and the majority noted that they would prefer Ithaca to be a more auto-centric city as supposed to more walkable. In terms of conclusions from the parking ticket data collection, the primary areas of concern regarding where tickets are most commonly being issued include central campus, north campus, and College town. In terms of its relation to the noise and traffic findings, the parking tickets added an additional layer, illustrating other major problem areas in Ithaca. While the data is not necessary in causation with the traffic and noise issues, there is likely a correlation to parking violations and traffic volumes, specifically at the intersection of college town and central campus, however, it is not a direct relationship, given that there are problem areas for parking that did not note heavy traffic volumes or significant noise concern, such as north campus and the area east of central campus. <br> <br> Limitations: As noted, a series of surveys and interviews were conducted to counter the available data previously collected on traffic volume. The sample that was used to create this survey data, was a small group of Cornellian students. They were of various graduation years and roughly half of the selected population had a car on campus, while the other half did not. Aside from the personal bias of the samples themselves there are also temporal factors that may be affecting state collected data as well, such as the time of year, given that a good portion of Ithacas population are college students that are residents primarily during the fall and spring semester. Much like the noise data, there are a lot of variables that are likely affecting the data. For example timing, weather, who is working as the ticketer and where they are working that day. To lessen these effects that may be skewing the data, data was collected on a number of different dates and times.',
            location: {
              center: [-76.50991, 42.44205],
              zoom: 13.2,
              pitch: 56,
              bearing: 160.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        },
        {
            id: '-chapter',
            alignment: 'left',
            hidden: false,
            title: 'INVERVIEW WITH ITHACA RESIDENT',
            image: 'images/abby.png',
            description: '"It feels like this towns solution to the lack of parking is an increase in pakring tickets as opposed to an increase in the parking options."',
            location: {
              center: [-76.48374, 42.44162 ],
              zoom: 16,
              pitch: 65,
              bearing: 270.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        },
        {
                id: 'interlude 3',
                alignment: 'center',
                hidden: false,
                image: '',
                title: 'CONCLUDING REMARKS',
                alignment: 'center',
                description: 'The intention of this study was to demonstrate the distinctions and relationships between general official data sets and alternative forms of data collection. Specifically illustrating the relationship between traffic volume and noise, as well as the local perception of problem areas. The findings on parking violations also helped in terms of locating problem areas along Ithaca’s road network. The impact of these issues was illustrated through the number of residents that participated in the surveys and interviews on the topic. This interwoven analysis used a number of programs and means of data collection to generate a greater understanding of the road network in Ithaca New York, and the problems that they are facing. Hopefully, these findings can help facilitate resolutions to these issues and in turn help improve the quality of life in Ithaca residents.',
                location: {
                  center: [-76.50153, 42.43870],
                  zoom: 15.2,
                  pitch: 70,
                  bearing: 25.67,
                },
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'METHOD',
            description: 'A number of softwares and tools have been used to support the findings above. Firstly, Storyteller was used as the backbone for the website, helping to create a cohesive narrative that allowed viewers to develop an understanding of the multitude of layers at play in this analysis. Additionally, QGIS was used to help convert the data from the New York State Open Source  Data from csv file to shapefile that could be uploaded to Mapbox and Storyteller. Mapbox was another digital tool that helped convert  the data collected from on site analysis into clear visual mappings and the layers through which they overlapped. To illustrate the finding in the noise study, sound bits from a number of roads in Ithaca were collected using the application decibel to track the volume level of the street noise. To map the dominant areas that tickets are issued, the application Mergin Maps was used to plot the direct location where tickets were found. Both of these applications are accessible and free tools that are easy to use for counter mapping and data collection.',
            location: {
              center: [-76.46945, 42.44220 ],
              zoom: 13.2,
              pitch: 20,
              bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10,
                    speed: .5, // make the flying slow
                    curve: 1, // change the speed at which it zooms out
                    bearing: -43.2,
                }],
            onChapterExit: []
        },
    ],
};

