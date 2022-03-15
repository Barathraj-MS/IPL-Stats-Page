import csv
import MySQLdb

mydb = MySQLdb.connect(host='localhost',
    user='root',
    passwd='0040',
    db='ipl')
cursor = mydb.cursor()

csv_data = csv.reader(open('bat.csv'))
row = next(csv_data)
for row in csv_data:
    cursor.execute('INSERT INTO batsman VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s)',row)
mydb.commit()
cursor.close()
print("Done")