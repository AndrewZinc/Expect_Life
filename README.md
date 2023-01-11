# Expect life - A Glimpse Look at Global Life Expectancies 

## Project Overview and Purpose
There are continuing discussions in American politics about the need for changes in the national healthcare system.  In recent elections, candidates have proposed the adoption of universal healthcare and other similar large-scale changes to America's healthcare system.  This team project explores what attributes have the largest impact on life expectancy for nations around the world, and its connection to the national social security system. Using data retrieved from nations around the world, the team seeks to explore whether the type of national healthcare system affects the longevity of the population. Through data exploration, data analysis, and presentation of findings through dashboard and visuals, this project hopes to answer the following questions:  

* Does the type of social security system have any impact on life expectancy?
* Does the amount of healthcare funding impact life expectancy?
* Does a country's GDP impact life expectancy?
* How big of a role do selected lifestyle factors (for example, alcohol consumption and smoking) play in life expectancy?

#### A Caveat:    

During data exploration, there was only healthcare system data available for less than half of the world's nations.  However, there is sufficient information available for the majority of the world's social security systems.  These social security systems include healthcare as well as providing money for retirement and assistance for accidents and emergencies.

This study focuses on the social security programs associated with health (Sickness and Maternity), but can include information about retirement systems, such as for North Macedonia, where the country does not indicate a separate social security system for health.

## Deliverables:
This project will produce five deliverables:
* A cloud-based database
* Two machine learning models
* An interactive dashboard
* A team presentation of the project with a slide deck

### Technology Used: 
* Data Exploration: Python, Pandas, Jupyter Notebook
* Database: MongoDB free tier - M0 cloud database
* Machine Learning: Python, Scikit-Learn, NumPy
* Presentation: Tableau, Plotly, Sweetviz, HVPlot

#### Social Security System General Definitions
Note:  In all cases, parenthetical benefits are defined as the ONLY benefits provided by the system.
* Social assistance system: A scheme to provide benefits to low-income residents.
* Social insurance system:  An insurance scheme provides support/benefits to residents.
* Universal system: (system benefit components are identified separately) A scheme where services/benefits are provided for free or minimal cost.
* Employment-related: Employed, self-employed, and persons with limited income may receive specific benefits.
* Employer-Liability: Employed persons may receive specific benefits.



## Input Data
Input data was sourced from multiple locations:
* Life Expectancy data was collected from the World Bank and the World Health Organization
* GDP data was collected from the World Bank
* Food data was collect from the United Nations Food and Agriculture Organization 
* Social Security system data was collected from ISSA (International Social Security Association)
* Mapping vectors and regional codes data were collected from Natural Earth and ISO (International Organization for Standardization)


### Input Data Issues

The following types of input data issues were frequently encountered: 
* Identifying data sources and gathering the data
* Country naming conventions
* Data Organization
* Missing data
* Out-of-date data

#### Identifying Data Sources - Gathering Data
An initial sweep of data sources identified a Wikipedia article as a potential input.  After scraping the article for the country and healthcare system information, it was determined that the data volume was inadequate as it only covered about half of countries.

After this, Wikipedia references were used to identify other potentially related data sources, which led to the use of the ISSA data.  This data gathering required scraping the ISSA website to collect the relevant country and social security system descriptions and elements to enable this analysis.

#### Country Naming
Country names were presented in different ways, depending on the information source.  Different naming conventions included a number of factors, such as, accented characters within the country name, for example `Côte d'Ivoire`, and the fullness of country names, such as, `Democratic Republic of the Congo` vs. `Congo, Democratic Republic`.

Since the national social security system data was largely complete, these names were used as the baseline for our standardization of the other data sets.  Some of the country names were shortened to their more commonly recognized form to help facilitate mapping.  (For example, `Bolivia, Plurinational State of` was shortened to `Bolivia`.

#### Data Organization
Another issue we frequently encountered was that data included general geographic regions, in addition to listing the individual countries.  Because the primary Life expectancy data and social security system data was oriented towards individual countries, regional data was processed out of the input data before bringing this information into the database and machine-learning models. Further, the data also often contained various subnational entities such as Puerto Rico, Hong Kong, and the Isle of Man. Data on subnational entities was also processed out of the input data before bringing this information into the database and machine-learning models.

The image below shows a raw input data file that contains various geographical areas that have been highlighted for clarity.

![Data pre-processing - reconciling country names](./Resources/data-preprocessing-reconciling-countries.png)

#### Missing Data
The data sets were frequently missing data values.  Sometimes for specific metrics in specific years, and other times for collections of metrics within one or more countries.

![Data pre-processing - missing values](./Resources/data-preprocessing-missing-values.png)

This presented a large challenge, as the process of combining the various datasets would ultimately reduce the represented countries down to those that had data across all the features.  The Alcohol & Tobacco usage, the food supply, and the daily protein intake were the three most restrictive datasets.

Within the GDP data file, the following countries were dropped because of missing information: British Virgin Islands, Jersey, Slovakia, Taiwan (China), and Venezuela.
A full list of countries considered in the supervised machine learning model can be found in the Resources folder (country_list.txt)


#### Out-of-date Data
Another challenge was associated with locating complete data sets across consistent years.  For purposes of the clustering analysis, the most current data was used for each dataset, as this would be unlikely to affect the models' ability to make connections across the features.

However, for purposes of determining feature importance through supervised machine learning, this required ---@David - TBD.

## Architecture and Design
The high-level archictecture for this project is depicted below:

![High-Level Architecture](./Resources/hl-architecture.png)

#### Architecture and Design Description
Input data was loaded into the MongoDB database in CSV format using MongoDB Compass. The Dashboard is presented to the user via Tableau Public.  Tableau may connect to the MongoDB, or be provided data in CSV format.  The Machine Learning models pull data from the MongoDB cloud database in order to generate results.

Below is a high-level diagram of the User Interface/Dashboard:
![High-Level UI/Dashboard](./Resources/HL-presentation-diagram.png)


### The Database: 
* MongoDB Cloud Database - This was the best option for data collection and processing for this project. Access to the database can be requested from the team. A temporary username and password can be provided. 
    * The collected project input data will not exceed the limitations of the minimal environment.  

    ![Database](./Resources/database_data1.png)

The data is organized into collections according to the intended use of the information.

![Database Data](./Resources/database_data-detail.png)

Below is a list of features identified and used for our analysis.
- Age 
- Gender
- Population
- GDP (USD)
- GDP Per Capita (USD)
- Government Healthcare Expenditure per Capita
- Private Healthcare Expenditure per Capita
- Tobacco Use
- Alcohol Use
- Daily Caloric and Protein Supply


### Machine Learning Models
* Machine Learning Model - evaluatea the data features and provide information about the feature importance, as well as clustering of features that contribute to Human Longevity.
* Currently, the machine learning model is using PCA for feature reduction, and KMeans for clustering analysis

Because the data under investigation is based on individual countries, the data set is wide (523 feature columns).  To help generate graphable results, Principal Component Analysis (PCA) was used to reduce the feature set down to three primary components.

![Principal Component Analysis](./Resources/machine_learning-clustering-attempt_1-PCA.png)

An Elbow Curve diagram was then generated to help determine the likely number of clusters.

![Elbow Curve](./Resources/machine_learning-clustering-attempt_1-Elbow_Curve.png)

Based on this diagram, n_clusters was set to 3, and then the clusters were predicted.

![KMeans Clusters](./Resources/machine_learning-clustering-attempt_1.png)

Because the data was abstracted through the use of PCA, it is difficult to interpret the clustering results.

![Clustering Interpretation](./Resources/cluster-interpretation.png)


### Presentation

Dashboards: Life Expectancy, GDP per Capita, Tobacco, Alcohol
- Interactive maps visualizing characterizing global spread of analytical metrics
- Filters allow comparisons of regions and sub-regions against one another as well as summary statistics of the selected countries in the metric of interest
<img width="1464" alt="Screen Shot 2023-01-04 at 8 43 41 AM" src="https://user-images.githubusercontent.com/108832056/210568884-9947e540-5c3a-4492-b503-fb83b713657b.png">
<img width="1464" alt="Screen Shot 2023-01-04 at 8 44 16 AM" src="https://user-images.githubusercontent.com/108832056/210568944-cd4dcef9-bd48-450d-a4b2-b95465cc34be.png">
<img width="1470" alt="Screen Shot 2023-01-04 at 8 42 05 AM" src="https://user-images.githubusercontent.com/108832056/210569296-08af29da-0f9f-4b61-b06a-7f451fdefef7.png">
<img width="1462" alt="Screen Shot 2023-01-04 at 8 55 45 AM" src="https://user-images.githubusercontent.com/108832056/210570400-88a58c8a-988a-4ec1-9438-09a8712c1295.png">





### Google Slide Presentation
Below is a link to the team slide deck:

[Google Slides Presentation](https://docs.google.com/presentation/d/1GDFdQnD2gt4tPtTPS35o6d5ekbh1FRK6IDjy1pRzjho/edit?usp=sharing)


### Team Dynamic and its members:  
* Andrew Z. is project lead and owner of this repository 
* Vivek G. maintains Tableau dashboard
* David S. created supervised machine learning and visualization for presentation
* Jacob V. assist in maintaining database, data collection, presentation slides and other areas as needed 


### Data Accreditation:

* [World Bank: Life Expectancy](https://data.worldbank.org/indicator/SP.DYN.LE00.IN)
* [World Health Organization: Life Expectancy](https://www.who.int/data/gho/data/indicators/indicator-details/GHO/life-expectancy-at-birth-(years))
* [Data Population from United Nations Population Fund](https://www.unfpa.org/data/world-population-dashboard)
* [World Bank: GDP](https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?end=2021&start=1960)
* [Additional World Development Indicators](https://databank.worldbank.org/source/world-development-indicators)
* [GeoJson Map Vectors](https://geojson-maps.ash.ms/)
* [Regional Codes](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/blob/master/all/all.csv)
* [ISSA - The International Social Security Association (ISSA)](https://ww1.issa.int/) 
ISSA is the world’s leading international organization for social security institutions, government departments and agencies.  The ISSA compiles international country profiles with information about the scope and breadth of each country's social security program(s).  They provided the type of system employed by each of the countries in this study, as well as the definitions of the system types.  Links to the country profiles are included within the `country_profile_urls.csv` file.
