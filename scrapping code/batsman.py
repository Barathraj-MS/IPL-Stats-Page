from bs4 import BeautifulSoup
import requests
from csv import writer

url = "https://www.iplt20.com/stats/all-time/mostRuns?stats_type=batting"

page = requests.get(url)

soup = BeautifulSoup(page.content, 'html.parser')

# nameList = soup.find_all('div', class_="ap-team-wrp")

# for name in nameList:
#     player = name.find('h3').text
#     print(player)

name = []
mostruns = []
most4s = []
most6s = []
most50s = []
most100s = []
hs = []
sr = []
avg = []

allList = [mostruns,most4s,most6s,most50s,most100s,hs,sr,avg]

playerStats = soup.find_all('tr')
for eachPlayer in playerStats:
    variable = eachPlayer.find('h3')
    if variable is not None:
        variable = variable.text
        name.append(variable)


urls = ['https://www.iplt20.com/stats/all-time/mostRuns?stats_type=batting','https://www.iplt20.com/stats/all-time/most4s?stats_type=batting','https://www.iplt20.com/stats/all-time/most6s?stats_type=batting','https://www.iplt20.com/stats/all-time/most50s?stats_type=batting','https://www.iplt20.com/stats/all-time/most100s?stats_type=batting','https://www.iplt20.com/stats/all-time/highestScores?stats_type=batting','https://www.iplt20.com/stats/all-time/bestStrikeRate?stats_type=batting','https://www.iplt20.com/stats/all-time/bestbattingaverage?stats_type=batting']

i=0
for url in urls:    
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    playerStats = soup.find_all('tr')
    for eachPlayer in playerStats:
        variable = eachPlayer.find('td', class_="np-tableruns")
        if variable is not None:
            variable = variable.text
            allList[i].append(variable)
    i=i+1


