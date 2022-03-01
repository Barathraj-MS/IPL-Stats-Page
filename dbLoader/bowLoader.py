import csv
import MySQLdb

mydb = MySQLdb.connect(host='localhost',
    user='root',
    passwd='0040',
    db='ipl')

cursor = mydb.cursor()

csv_data = csv.reader(open('ball.csv'))
row = next(csv_data)

# cursor.execute('CREATE TABLE bowlers(Name varchar(50) NOT NULL primary key,Wickets int,Maiden int,DotBalls int,BowlingAvg float,EcoRate float,StrikeRate float,HatTrick int,FourWickets int)')

for row in csv_data:
    cursor.execute('INSERT INTO bowlers VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s)',row)
#close the connection to the database.
mydb.commit()
cursor.close()
print("Done")