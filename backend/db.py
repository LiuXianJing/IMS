from application import app
from flask_mysqldb import MySQL

app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "root"
app.config["MYSQL_DB"] = "imsdb"

mysql = MySQL(app)