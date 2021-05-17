import csv
import requests
import datetime as dt
import random

#Import from current URL
url = 'https://filipvanlaenen.github.io/eopaod/de.csv'
r = requests.get(url, allow_redirects=True)
open('de.csv', 'wb').write(r.content)


#Current Date
dToday = dt.datetime.today()
#dToday = dt.datetime.strptime("24/07/19", '%d/%m/%y')
#Date limit for accepting polling data
dLimit = dt.datetime.today() - dt.timedelta(30)

#Open Polling Data CSV
file = open("de.csv", "r")

#Define array with each party as entries with blank polling data
arrayOfPartiesPolling = [["CDU/CSU",0],["SPD",0],["AfD",0],["FDP",0],["Left",0],["Green",0]]
#Blank Margin of error
marginOfError = 0
#Count number of polling entries within the last month
noOfPollEntries = 0

#Loop through each line
for line in file:
    #Determine what character defines the CSV split between fields
    fields = line.split(",")
    #Data Poll was conducted
    pollDate = str(fields[3])
    #Ignore the first line
    if (pollDate != "Fieldwork End"):
        pollDateConverted = pollDate
        #If the polling data is within the limit
        if (pollDateConverted > str(dLimit) and pollDateConverted < str(dToday)):
            #Accumulate margin of error
            marginOfError += float(str(fields[8]).replace('%',''))
            #If CDU/CSU Polling data is split then combine the CDU and CSU Individually
            if (str(fields[9]) == "Not Available"):
                arrayOfPartiesPolling[0][1] += (float(str(fields[15]).replace('%','')) + float(str(fields[16]).replace('%','')))

            else:
                #CDU/CSU Together
                arrayOfPartiesPolling[0][1] += float(str(fields[9]).replace('%',''))

            #SPD
            arrayOfPartiesPolling[1][1] += float(str(fields[10]).replace('%',''))
            #AfD
            arrayOfPartiesPolling[2][1] += float(str(fields[11]).replace('%',''))
            #FDP
            arrayOfPartiesPolling[3][1] += float(str(fields[12]).replace('%',''))
            #Left
            arrayOfPartiesPolling[4][1] += float(str(fields[13]).replace('%',''))
            #Green
            arrayOfPartiesPolling[5][1] += float(str(fields[14]).replace('%',''))
            #Increment number of entries
            noOfPollEntries += 1
#Close File
file.close()
#Loop through each party and get a monthly average by dividing by the number of entries
for i in range(len(arrayOfPartiesPolling)):
    arrayOfPartiesPolling[i][1] /= noOfPollEntries
#Calculate average margin of error
marginOfError /= noOfPollEntries

#Create new array to store predicted polling values
arrayOfPartiesPrediction = [["CDU/CSU",0],["SPD",0],["AfD",0],["FDP",0],["Left",0],["Green",0]]
#Number of times a prediction is created
noOfPredictions = 10000

for i in range(noOfPredictions):
    #For each party take the monthly polling average and apply a random margin of error including negative values
    #Accumulate polling prediction values
    arrayOfPartiesPrediction[0][1] += arrayOfPartiesPolling[0][1] + random.uniform(-marginOfError, marginOfError)
    arrayOfPartiesPrediction[1][1] += arrayOfPartiesPolling[1][1] + random.uniform(-marginOfError, marginOfError)
    arrayOfPartiesPrediction[2][1] += arrayOfPartiesPolling[2][1] + random.uniform(-marginOfError, marginOfError)
    arrayOfPartiesPrediction[3][1] += arrayOfPartiesPolling[3][1] + random.uniform(-marginOfError, marginOfError)
    arrayOfPartiesPrediction[4][1] += arrayOfPartiesPolling[4][1] + random.uniform(-marginOfError, marginOfError)
    arrayOfPartiesPrediction[5][1] += arrayOfPartiesPolling[5][1] + random.uniform(-marginOfError, marginOfError)

#Loop through each party and get a final prediction by mean average of the number of predictions created
for i in range(len(arrayOfPartiesPrediction)):
    arrayOfPartiesPrediction[i][1] /= noOfPredictions

#Round each prediction to 1dp
CDUprediction = round(arrayOfPartiesPrediction[0][1], 1)
SPDprediction = round(arrayOfPartiesPrediction[1][1], 1)
AfDPrediction = round(arrayOfPartiesPrediction[2][1], 1)
FDPprediction = round(arrayOfPartiesPrediction[3][1], 1)
Leftprediction = round(arrayOfPartiesPrediction[4][1], 1)
Greenprediction = round(arrayOfPartiesPrediction[5][1], 1)

#Open javascript file to output the data
file = open("../js/germany-prediction.js", "w")
#Output the data by writing the predictions as if they were javascript variables
file.write("var CDUprediction = "+str(CDUprediction)+"; \n")
file.write("var SPDprediction = "+str(SPDprediction)+"; \n")
file.write("var AfDprediction = "+str(AfDPrediction)+"; \n")
file.write("var FDPprediction = "+str(FDPprediction)+"; \n")
file.write("var Leftprediction = "+str(Leftprediction)+"; \n")
file.write("var Greenprediction = "+str(Greenprediction)+"; \n")

#Close File
file.close()
