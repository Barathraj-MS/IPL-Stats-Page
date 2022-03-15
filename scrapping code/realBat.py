from bs4 import BeautifulSoup
import requests
from csv import writer

url = "https://www.iplt20.com/stats/all-time/mostRuns?stats_type=batting"

page = requests.get(url)

soup = BeautifulSoup(page.content, 'html.parser')


name = []
mostruns = []
most4s = []
most6s = []
most50s = []
most100s = []
hs = []
sr = []
avg = []

# allList = [mostruns,most4s,most6s,most50s,most100s,hs,sr,avg]
# onePlayer = []
allPlayerStats = []

with open('batsmen.csv', 'w',encoding='utf-8',newline='') as f:
    thewriter = writer(f)
    header = ['Name','MostRuns','Most4s','Most6s','Most50s','Most100s','HighestScore','StrikeRate','AverageRuns']
    thewriter.writerow(header)

    playerStats = soup.find_all('tr')
    for eachPlayer in playerStats:
        variable = eachPlayer.find('h3')
        if variable is not None:
            variable = variable.text
            name.append(variable)

    urls = ['https://www.iplt20.com/stats/all-time/mostRuns?stats_type=batting','https://www.iplt20.com/stats/all-time/most4s?stats_type=batting','https://www.iplt20.com/stats/all-time/most6s?stats_type=batting','https://www.iplt20.com/stats/all-time/most50s?stats_type=batting','https://www.iplt20.com/stats/all-time/most100s?stats_type=batting','https://www.iplt20.com/stats/all-time/highestScores?stats_type=batting','https://www.iplt20.com/stats/all-time/bestStrikeRate?stats_type=batting','https://www.iplt20.com/stats/all-time/bestbattingaverage?stats_type=batting']

    key = 1

    for eachName in name:
        onePlayer = []
        onePlayer.append(eachName)
        print(eachName)
        for url in urls:
            page = requests.get(url)
            soup = BeautifulSoup(page.content, 'html.parser')
            playerStats = soup.find_all('tr')
            for eachPlayer in playerStats:
                checkName = eachPlayer.find('h3')
                if checkName is not None:
                    checkName = checkName.text
                if checkName==eachName:
                    variable = eachPlayer.find('td',class_="np-tableruns")
                    if variable is not None:
                        variable = variable.text
                        if key==1:
                            onePlayer.append(variable)
                            # print(onePlayer)
                            key = 0
            if key==1:
                onePlayer.append('0')
                # print(onePlayer)
            key = 1
        # print(onePlayer)
        info = [onePlayer[0],onePlayer[1],onePlayer[2],onePlayer[3],onePlayer[4],onePlayer[5],onePlayer[6],onePlayer[7],onePlayer[8]]
        thewriter.writerow(info)
        allPlayerStats.append(onePlayer)
            
# print(allPlayerStats)
# print(name[0],mostruns[0],most4s[0],most6s[0],most50s[0],most100s[0],hs[0],sr[0],avg[0])
# print(name)