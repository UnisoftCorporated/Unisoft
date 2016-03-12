#!/usr/bin/python
import psycopg2
import sys
import pprint

def main():
	conn_string = "host='proyectois.cdzimryv4xiv.us-west-2.rds.amazonaws.com' dbname='proyectois' user='proyectois' password='proyectois'"
	# print the connection string we will use to connect
	print "Connecting to database\n	->%s" % (conn_string)

	# get a connection, if a connect cannot be made an exception will be raised here
	conn = psycopg2.connect(conn_string)

	# conn.cursor will return a cursor object, you can use this cursor to perform queries
	cursor = conn.cursor()

	# execute our Query
	cursor.execute("insert into proyectos values('proyectois2','probando codigo');")
	cursor.execute("SELECT * FROM proyectos")

	# retrieve the records from the database
	records = cursor.fetchall()

	# print out the records using pretty print
	# note that the NAMES of the columns are not shown, instead just indexes.
	# for most people this isn't very useful so we'll show you how to return
	# columns as a dictionary (hash) in the next example.
	pprint.pprint(records)

if __name__ == "__main__":
	main()
