from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "root"
app.config["MYSQL_DB"] = "imsdb"

mysql = MySQL(app)

@app.route("/add_user", methods=["POST"])
def add_user():
    json_data = request.get_json()
    account = json_data['account']
    password = json_data['password']
    cur = mysql.connection.cursor()
    cur.execute('insert into users (account, password) values (%s, %s)', (account, password))
    mysql.connection.commit()
    cur.close()
    return jsonify({
        'data': None,
        'code': 200,
        'status': True,
        'msg': 'User added successfully',
    })

@app.route("/get_user", methods=["POST"])
def get_tuser():
    cur = mysql.connection.cursor()
    cur.execute('select * from users')
    data = cur.fetchall()
    data_list = []
    for row in data:
        info_dict = {
            'id': row[0],
            'account': row[1],
            'password': row[2],
            'created_at': row[3],
        }
        data_list.append(info_dict)
    cur.close()
    return jsonify({
        'data': data_list,
        'code': 200,
        'status': True,
        'msg': 'get user successfully',
    })

@app.route("/clear_user")
def clear_user():
    cur = mysql.connection.cursor()
    cur.execute('TRUNCATE TABLE users')
    mysql.connection.commit()
    cur.close()
    return jsonify({
        'data': None,
        'code': 200,
        'status': True,
        'msg': 'User deleted successfully',
    })

@app.route("/update_user", methods=["POST"])
def update_user():
    pass

@app.route("/delete_user", methods=["POST"])
def delete_user():
    cur = mysql.connection.cursor()
    cur.execute("delete users where account = 'test'")
    mysql.connection.commit()
    cur.close()
    return jsonify({
        'data': None,
        'code': 200,
        'status': True,
        'msg': 'User deleted successfully',
    })

if __name__ == "__main__":
    app.run(debug=True)