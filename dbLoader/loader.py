import csv
import MySQLdb

mydb = MySQLdb.connect(host='localhost',
    user='root',
    passwd='0040',
    db='ipl')
cursor = mydb.cursor()

csv_data = csv.reader(open('bat.csv'))
row = next(csv_data)
# cursor.execute('INSERT INTO batsman VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s)',row)
for row in csv_data:
    cursor.execute('INSERT INTO batsman VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s)',row)
#close the connection to the database.
mydb.commit()
cursor.close()
print("Done")