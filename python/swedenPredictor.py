import csv
import requests
import datetime as dt
import random

url = 'https://filipvanlaenen.github.io/eopaod/se.csv'
r = requests.get(url, allow_redirects=True)
open('se.csv', 'wb').write(r.content)


#Current Date
dToday = dt.datetime.today()
#dToday = dt.datetime.strptime("24/07/19", '%d/%m/%y')
#Date limit for accepting polling data
dLimit = dt.datetime.today() - dt.timedelta(30)

#Open Polling Data CSV
file = open("se.csv", "r")

#Define array with each party as entries with blank polling data
arrayOfPartiesPolling = [["S",0],["M",0],["SD",0],["C",0],["V",0],["KD",0],["L",0],["MP",0]]
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
            #Social Democrats (S)
            arrayOfPartiesPolling[0][1] += float(str(fields[9]).replace('%',''))
            #Moderates (M)
            arrayOfPartiesPolling[1][1] += float(str(fields[10]).replace('%',''))
            #Sweden Democrats (SD)
            arrayOfPartiesPolling[2][1] += float(str(fields[11]).replace('%',''))
            #Centre (C)
            arrayOfPartiesPolling[3][1] += float(str(fields[12]).replace('%',''))
            #Left (V)
            arrayOfPartiesPolling[4][1] += float(str(fields[13]).replace('%',''))
            #Christian Democrats (KD)
            arrayOfPartiesPolling[5][1] += float(str(fields[14]).replace('%',''))
            #Liberals (L)
            arrayOfPartiesPolling[6][1] += float(str(fields[15]).replace('%',''))
            #Green (MP)
            arrayOfPartiesPolling[7][1] += float(str(fields[16]).replace('%',''))
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
arrayOfPartiesPrediction = [["S",0],["M",0],["SD",0],["C",0],["V",0],["KD",0],["L",0],["MP",0]]
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
    arrayOfPartiesPrediction[6][1] += arrayOfPartiesPolling[6][1] + random.uniform(-marginOfError, marginOfError)
    arrayOfPartiesPrediction[7][1] += arrayOfPartiesPolling[7][1] + random.uniform(-marginOfError, marginOfError)

#Loop through each party and get a final prediction by mean average of the number of predictions created
for i in range(len(arrayOfPartiesPrediction)):
    arrayOfPartiesPrediction[i][1] /= noOfPredictions

#Round each prediction to 1dp
Sprediction = round(arrayOfPartiesPrediction[0][1], 1)
Mprediction = round(arrayOfPartiesPrediction[1][1], 1)
SDprediction = round(arrayOfPartiesPrediction[2][1], 1)
Cprediction = round(arrayOfPartiesPrediction[3][1], 1)
Vprediction = round(arrayOfPartiesPrediction[4][1], 1)
KDprediction = round(arrayOfPartiesPrediction[5][1], 1)
Lprediction = round(arrayOfPartiesPrediction[6][1], 1)
MPprediction = round(arrayOfPartiesPrediction[7][1], 1)

#Open javascript file to output the data
file = open("../js/sweden-prediction.js", "w")
#Output the data by writing the predictions as if they were javascript variables
file.write("var Sprediction = "+str(Sprediction)+"; \n")
file.write("var Mprediction = "+str(Mprediction)+"; \n")
file.write("var SDprediction = "+str(SDprediction)+"; \n")
file.write("var Cprediction = "+str(Cprediction)+"; \n")
file.write("var Vprediction = "+str(Vprediction)+"; \n")
file.write("var KDprediction = "+str(KDprediction)+"; \n")
file.write("var Lprediction = "+str(Lprediction)+"; \n")
file.write("var MPprediction = "+str(MPprediction)+"; \n")

#Close File
file.close()
