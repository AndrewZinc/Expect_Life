# Expect life - A Glimpse into Global Life Expectancies 

## Clustering Analysis Processes

### Data Preprocessing
The input data was collected in CSV format.  To use the data within the machine learning model(s), the contents needed to be reviewed and standardized according to the `master country list`.

The list of countries that were provided by the ISSA was used as our master country list.  This list was used to ensure standardized country names and the inclusion of as many of these countries as possible.

Each CSV input file was processed through a Jupyter Notebook.  The notebook read the CSV file, dropped unneeded columns, and compared the list of included country names against the master country list.  A list of unmatched country names was then presented to the operator - allowing the manual correction of the mismatched names to minimize data loss.  The collection of data-cleaning Jupyter Notebooks is located within: [Data_Cleaning_Jupyter_notebooks](../Clean_Data/Data_Cleaning_Jupyter_notebooks/)

After any manual correction, the file was re-read into the Jupyter Notebook and the country name comparison was repeated.  The mismatched entries were then removed and then after any formatting changes, the resulting DataFrame was written to a `clean` CSV file.


### Feature Engineering and Feature Selection
For this analysis, feature engineering was minimal and only consisted of the addition of a numeric indicator of the number of Social Security System (SSS) components that had been implemented by each country.  This was added to ensure some data would tie the SSS to the country, even if all of the categorical values were minimized through Primary Component Analysis.

Feature Selection was performed by team brainstorming.  The collected input data was reviewed and either selected for inclusion or assigned a `secondary` status and might be revisited in the future.


### Separation of Data (Training vs. Testing)
The clustering analysis was performed as an Unsupervised analysis, so the entire data set was presented to the model without separating it into two subsets.

## Clustering Introduction
For this project, the clustering analysis was expected to provide information to confirm the results of supervised machine learning.  That is if this analysis would identify associations that indicate the importance of select features.


### Model Choices and Model Selection
A literature review led to the initial examination of "popular" clustering models. 

The models examined were:
* KMeans
* Agglomerative Clustering (linkage=complete)
* Agglomerative Clustering (linkage=ward)
* BIRCH
* DBSCAN
* Mean Shift
* OPTICS
* Spectral Clustering
* Gaussian Mixture Model

These models were executed under similar conditions in a side-by-side manner, within a single Jupyter notebook.  For these experiments, the methods used for PCA were explored, as well as the scaling algorithm.

Spreadsheets were assembled for reviewing the output from each Jupyter Notebook.  The spreadsheets are located in [Preliminary_Analysis_Outcomes](./Preliminary_Analysis_Outcomes/)

The results of this preliminary analysis lead to focused examination of:
* Agglomerative Clustering (linkage=ward)
* BIRCH
* Gaussian Mixture Model
* KMeans
* Spectral Clustering

During the focused model examination, it became clear that the models were performing similarly.  Based on a visual review of the plots constructed during this process, we decided to move ahead using the BIRCH model.

## Final Analysis
Two Jupyter Notebooks were constructed.  Each of them retrieves their input dataset from the MongoDB cloud database and performs an analysis of it.

`clustering_Final-MultiYear_Silhouette.ipynb` == Analyzes multi-year input data that matches the supervised machine learning model input.
`clustering_Final-Silhouette` == Analyzes the most current year of data for each feature.

### Final Input Data
The final input data was revised and structured to match the content used within supervised machine learning.  There were two data sets; one that contained the most current data year for each feature, and a second that contained all the yearly data for the features (13 years).

It is also important to note that this final dataset only included the `list` form of the SSS data.  During the focused model examination, it was discovered that the `coded` SSS data negatively affected the model's performance.  The silhouette scores obtained with the `coded` SSS data were barely at or only slightly above 0.50.

### Final Model Execution
The two Jupyter Notebooks were executed. After the models complete their analysis, each Jupyter notebook generates a Sweetviz report which is manually reviewed to interpret the results.