from bs4 import BeautifulSoup
import requests
from csv import writer

url = "https://www.iplt20.com/stats/all-time/mostWkts?stats_type=bowling"

page = requests.get(url)

soup = BeautifulSoup(page.content, 'html.parser')


name = []
wkts = []
maiden = []
dotBalls = []
bowlingAvg = []
ecoRate = []
strikeRate = []
hattrick = []
fourWkts = []

# allList = [mostruns,most4s,most6s,most50s,most100s,hs,sr,avg]
# onePlayer = []
allPlayerStats = []

with open('bowling.csv', 'w',encoding='utf-8',newline='') as f:
    thewriter = writer(f)
    header = ['Name','Wickets','Maiden','DotBalls','BowlingAvg','EcoRate','StrikeRate','HatTrick','FourWickets']
    thewriter.writerow(header)

    playerStats = soup.find_all('tr')
    for eachPlayer in playerStats:
        variable = eachPlayer.find('h3')
        if variable is not None:
            variable = variable.text
            name.append(variable)

    urls = ['https://www.iplt20.com/stats/all-time/mostWkts?stats_type=bowling','https://www.iplt20.com/stats/all-time/mostMaidens?stats_type=bowling','https://www.iplt20.com/stats/all-time/mostDotBalls?stats_type=bowling','https://www.iplt20.com/stats/all-time/bestBowlAvg?stats_type=bowling','https://www.iplt20.com/stats/all-time/bestBowlEco?stats_type=bowling','https://www.iplt20.com/stats/all-time/bestBowlingStrikeRate?stats_type=bowling','https://www.iplt20.com/stats/all-time/mostHattricks?stats_type=bowling','https://www.iplt20.com/stats/all-time/mostFourWickets?stats_type=bowling']

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