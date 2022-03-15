import csv
import MySQLdb

mydb = MySQLdb.connect(host='localhost',
    user='root',
    passwd='Suriya@9945',
    db='ipl')

cursor = mydb.cursor()

csv_data = csv.reader(open('date.csv'))
row = next(csv_data)

cursor.execute('CREATE TABLE schedule(MatchNumber int NOT NULL primary key,Dates varchar(15),Location varchar(50),HomeTeam varchar(50),AwayTeam varchar(50))')

for row in csv_data:
    cursor.execute('INSERT INTO schedule VALUES(%s,%s,%s,%s,%s)',row)

mydb.commit()
cursor.close()
print("Done")