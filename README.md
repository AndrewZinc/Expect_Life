# Expect life - A proejct about Life Expectancies and Healthcare Systems

## Project Overview

### Proposal

Topic: Life expectancy for nations around the world, and connections to the national healthcare system.


Questions to be answered by this project: 
	* Does the type of healthcare system impact life expectancy?
	* Does the amount of healthcare funding impact life expectancy?
	* Does a country's GDP impact life expectancy?


Selection Rational: There are continuing discussions in American politics about the need for changes in the national healthcare system.  Elections have seen candidates propose the adoption of Universal Healthcare or other similar large-scale changes.  This project seeks to explore whether the type of national healthcare system can affect the longevity of the population.  This will be explored with data from nations around the world.


### Team Structure and assignments:  
The team has made the following decisions:
	*	AZ to serve as the project manager
	*	Team members will work in pairs.  Weeks 1&2: (Jay & Vivek), (AZ & David) - these teams may change in the latter half of the project.
	*	Google sheet started to collect team availability.  We expect to meet at least every other day for a short stand-up, and have the option to extend or reconvene for more discussion/working sessions.


### Technology: 

	Data Exploration: Python/Pandas/Jupyter Notebook.
	Database exploration: PostgreSQL database engine.
	Machine Learning: Python & Scikit-Learn.  Maybe also Tensorflow
	Heroku for project hosting, includes webserver and postgres db.
	Presentation: TBD
### Architecture and Design
The high-level archictecture for this project is depicted below:

![High-Level Architecture](./Resources/hl-architecture.png)

#### Description
The User Interface will be presented to the user via a web page.  The web page will interact with a PostgreSQL database to request data from display on the web page.  The Machine Learning model will interact with the PostgreSQL database to collect the input data and provide results back to the database.

All of these components will be hosted within Heroku.

### Deliverables:

	Database: PostgreSQL Database - This database engine was selected because it is available within Heroku's minimal environment.  The collected project input data will not exceed the limitations of the minimal environment.
	Machine Learning Model - TBD
	Presentation - TBD


### Data Accreditation:

Life Expectancy/Population: https://population.un.org/wpp/Download/Files/1_Indicators%20(Standard)/CSV_FILES/WPP2022_Demographic_Indicators_Medium.zip
GDP: https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?end=2021&start=1960
Healthcare Systems: https://en.wikipedia.org/wiki/Health_care_systems_by_country