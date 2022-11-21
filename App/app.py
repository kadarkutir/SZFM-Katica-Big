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



#Base temlate rendering
@app.route("/")
def start():
    return redirect("/signup")

@app.route("/login",methods=["GET","POST"])
def login():
    return render_template('login.html')

@app.route("/signup",methods=["GET","POST"])
def signup():
    return render_template('signup.html')

@app.route("/signup_post_screen")
def signup_post_screen():
    return render_template('signup_redirect.html')

@app.route("/logout")
def logout():
    session["username"] = None
    return redirect("/login")

@app.route("/index")
def index():
    if not session.get('username'):
        return redirect("/login")

    print(session['username'])
    return render_template('index.html')

@app.route("/signup_post",methods=["POST"])
def signup_post():
    email = request.form.get('email')
    username = request.form.get('username')
    password = request.form.get('password')
    password_again = request.form.get('password_again')

    user = db_con.get_user_exist_by_username(con,username)

    if user:
        flash("""User already exists.""")
        return redirect("/signup")

    if password != password_again:
        flash("The passwords dont match.")
        return redirect("/signup")

    hashed_password=generate_password_hash(password, method='sha256')

    db_con.add_user_to_db(con,username,hashed_password,email)
    con.commit()

    return redirect("/signup_post_screen")

@app.route("/login_post",methods=["POST"])
def login_post():
    username = request.form.get('username')
    password = request.form.get('password')

    session["username"] = username

    user = db_con.get_user_login_data_by_username(con,username)

    if user == None:
        flash("User not found \n Check your username and password")
        return redirect("/login")

    if check_password_hash(user[1],password):
        return redirect("/index")
    else:
        flash("User not found \n Check your username and password")
        return redirect("/login")

@app.route("/get_user_data")
def get_user_data():
    username = session.get('username')

    user = db_con.get_user_data_by_username(con,username)

    return flask.jsonify(user)

if __name__ == "__main__":
    app.run(debug=True,host="localhost",port=5000)