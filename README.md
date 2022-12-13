# Expect life - A project about Life Expectancies and Social Security Systems

## Project Overview
This is a team project for data exploration, data analysis, and presentation of findings through a dashboard and visuals.

### Proposal
**Topic**: Life expectancy for nations around the world, and connections to the national social security system.

Questions to be answered by this project: 

* Does the type of social security system impact life expectancy?
* Does the amount of healthcare funding impact life expectancy?
* Does a country's GDP impact life expectancy?
* How big of a role do selected lifestyle factors play?
* Other questions - TBD

**Selection Rational**: There are continuing discussions in American politics about the need for changes in the national healthcare system.  Elections have seen candidates propose the adoption of Universal Healthcare or other similar large-scale changes.  This project seeks to explore whether the type of national healthcare system can affect the longevity of the population.  This will be explored with data from nations around the world.

After reviewing the available data, we saw that there was only healthcare system data available for less than half of the world's nations.  However, there is information available about almost all the world's social security systems.  The social security systems include healthcare as well as providing money for retirement and assistance for accidents and emergencies.

This study focuses on the social security programs associated with health (Sickness and Maternity), but can include information about retirement systems, such as for North Macedonia, where the country does not indicate a separate social security system for health.

### Social Security System Definitions
* Individual account: (may be mandatory or optional)
* Notional defined contribution (NDC)
* Occupational pension system:
* Provident fund:
* Social assistance system:
* Social insurance system:
* Universal system: (system components are identified separately)




### Team Structure and assignments:  
The team has made the following decisions:
* AZ to serve as the project manager
* Team members will work in pairs.  Weeks 1&2: (Jay & Vivek), (AZ & David) - these teams may change in the latter half of the project.
* Google sheet started to collect team availability.  We expect to meet at least every other day for a short stand-up, and have the option to extend or reconvene for more discussion/working sessions.
* All team communication and collaboration held over email, Slack, and Google Meet or Hangouts. 

### Technology: 
* Data Exploration: Python/Pandas/Jupyter Notebook.
* Database exploration: PostgreSQL database engine.
* Machine Learning: Python & Scikit-Learn.  Maybe also Tensorflow.
* Heroku for project hosting, includes webserver and postgres db.
* Presentation: TBD.

### Architecture and Design
The high-level archictecture for this project is depicted below:

![High-Level Architecture](./Resources/hl-architecture.png)

#### Description
The User Interface will be presented to the user via a web page.  The web page will interact with a PostgreSQL database to request data from display on the web page.  The Machine Learning model will interact with the PostgreSQL database to collect the input data and provide results back to the database.

All of these components will be hosted within Heroku.

### Deliverables:

* Database: PostgreSQL Database - This database engine was selected because it is available within Heroku's minimal environment.
* The collected project input data will not exceed the limitations of the minimal environment.
    * Machine Learning Model - TBD
    * Presentation - TBD


### Data Accreditation:

* Life Expectancy/Population: https://population.un.org/wpp/Download/Files/1_Indicators%20(Standard)/CSV_FILES/WPP2022_Demographic_Indicators_Medium.zip
* GDP: https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?end=2021&start=1960

* ISSA - The International Social Security Association (ISSA) is the world’s leading international organization for social security institutions, government departments and agencies.  The ISSA compiles international country profiles with information about the scope and breadth of each country's social security program(s).  They provided the type of system employed by each of the countries in this study, as well as the definitions of the system types.  Links to the country profiles are included within the `country_profile_urls.csv` file.
