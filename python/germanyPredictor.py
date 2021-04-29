import csv
import requests

url = 'https://filipvanlaenen.github.io/eopaod/de.csv'
r = requests.get(url, allow_redirects=True)

open('de.csv', 'wb').write(r.content)



file = open("de.csv", "r")

for line in file:
    fields = line.split(",")
    CDU = str(fields[9])
    print (CDU)

file.close()




file = open("germany-prediction.js", "w")



SPDprediction = 13
CDUprediction = 21
AfDPrediction = 11
FDPprediction = 11
Greenprediction = 28
Leftprediction = 7


file.write("var SPDprediction = "+str(SPDprediction)+"; \n")
file.write("var CDUprediction = "+str(CDUprediction)+"; \n")
file.write("var AfDprediction = "+str(AfDPrediction)+"; \n")
file.write("var FDPprediction = "+str(FDPprediction)+"; \n")
file.write("var Greenprediction = "+str(Greenprediction)+"; \n")
file.write("var Leftprediction = "+str(Leftprediction)+"; \n")

file.close()
