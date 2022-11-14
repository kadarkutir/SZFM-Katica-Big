from flask import Flask, url_for,request,redirect,render_template,flash,session
import flask
from werkzeug.security import generate_password_hash, check_password_hash
from db import dbConnection
import uuid
from flask_session import Session

#app config
app = Flask(__name__)
app.config['SECRET_KEY'] = uuid.uuid4().hex
app.config['db_path'] = "db/database.db"
app.config['SESSION_TYPE'] = "filesystem"
Session(app)


#Connect to db
db_con = dbConnection()
con = db_con.connect_to_db(app.config["db_path"])
db_con.run_sql_script(con,"db/initialize.sql")




if __name__ == "__main__":
    app.run(debug=True,host="localhost",port=5000)