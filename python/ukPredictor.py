import csv
import requests
import datetime as dt
import random

url = 'https://filipvanlaenen.github.io/eopaod/gb-gbn.csv'
r = requests.get(url, allow_redirects=True)
open('uk.csv', 'wb').write(r.content)


#Current Date
dToday = dt.datetime.today()
#dToday = dt.datetime.strptime("24/07/19", '%d/%m/%y')
#Date limit for accepting polling data
dLimit = dToday - dt.timedelta(30)

#Open Polling Data CSV
file = open("uk.csv", "r")

#Define array with each party as entries with blank polling data
arrayOfPartiesPolling = [["Conservative",0],["Labour",0],["Lib Dem",0],["BRX/REF",0],["Green",0],["SNP",0],["Plaid Cymru",0]]
#Blank Margin of error
marginOfError = 0
#Count number of polling entries within the last month for each party
noOfPollEntries = [["Conservative",0],["Labour",0],["Lib Dem",0],["BRX/REF",0],["Green",0],["SNP",0],["Plaid Cymru",0]]

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
            #Conservatives
            if (str(fields[9]) != "Not Available"):
                arrayOfPartiesPolling[0][1] += float(str(fields[9]).replace('%',''))
                noOfPollEntries[0][1] += 1
            #Labour
            if (str(fields[10]) != "Not Available"):
                arrayOfPartiesPolling[1][1] += float(str(fields[10]).replace('%',''))
                noOfPollEntries[1][1] += 1
            #Lib Dems
            if (str(fields[11]) != "Not Available"):
                arrayOfPartiesPolling[2][1] += float(str(fields[11]).replace('%',''))
                noOfPollEntries[2][1] += 1
            #Brx/Ref
            if (str(fields[17]) != "Not Available"):
                arrayOfPartiesPolling[3][1] += float(str(fields[17]).replace('%',''))
                noOfPollEntries[3][1] += 1
            #Green
            if (str(fields[16]) != "Not Available"):
                arrayOfPartiesPolling[4][1] += float(str(fields[16]).replace('%',''))
                noOfPollEntries[4][1] += 1
            #SNP
            if (str(fields[12]) != "Not Available"):
                arrayOfPartiesPolling[5][1] += float(str(fields[12]).replace('%',''))
                noOfPollEntries[5][1] += 1
            #Plaid Cymru
            if (str(fields[13]) != "Not Available"):
                arrayOfPartiesPolling[6][1] += float(str(fields[13]).replace('%',''))
                noOfPollEntries[6][1] += 1
            #Increment number of entries

#Close File
file.close()
#Loop through each party and get a monthly average by dividing by the number of entries for each party
for i in range(len(arrayOfPartiesPolling)):
    arrayOfPartiesPolling[i][1] /= noOfPollEntries[i][1]
#Calculate average margin of error
marginOfError /= noOfPollEntries[0][1]

#Create new array to store predicted polling values
arrayOfPartiesPrediction = [["Conservative",0],["Labour",0],["Lib Dem",0],["BRX/REF",0],["Green",0],["SNP",0],["Plaid Cymru",0]]
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

#Loop through each party and get a final prediction by mean average of the number of predictions created
for i in range(len(arrayOfPartiesPrediction)):
    arrayOfPartiesPrediction[i][1] /= noOfPredictions

#Round each prediction to 1dp
ConservativePrediction = round(arrayOfPartiesPrediction[0][1], 1)
LabourPrediction = round(arrayOfPartiesPrediction[1][1], 1)
LibDemPrediction = round(arrayOfPartiesPrediction[2][1], 1)
BrexitPrediction = round(arrayOfPartiesPrediction[3][1], 1)
GreenPrediction = round(arrayOfPartiesPrediction[4][1], 1)
SNPPrediction = round(arrayOfPartiesPrediction[5][1], 1)
PlaidPrediction = round(arrayOfPartiesPrediction[6][1], 1)

#Open javascript file to output the data
file = open("../js/uk-prediction.js", "w")
#Output the data by writing the predictions as if they were javascript variables
file.write("var ConservativePrediction = "+str(ConservativePrediction)+"; \n")
file.write("var LabourPrediction = "+str(LabourPrediction)+"; \n")
file.write("var LibDemPrediction = "+str(LibDemPrediction)+"; \n")
file.write("var BrexitPrediction = "+str(BrexitPrediction)+"; \n")
file.write("var GreenPrediction = "+str(GreenPrediction)+"; \n")
file.write("var SNPPrediction = "+str(SNPPrediction)+"; \n")
file.write("var PlaidPrediction = "+str(PlaidPrediction)+"; \n")

#Close File
file.close()
