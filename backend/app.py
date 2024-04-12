from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

from util.get_ip_info import get_ip_info

app = Flask(__name__)
CORS(app)
app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "root"
app.config["MYSQL_DB"] = "imsdb"

mysql = MySQL(app)

@app.route("/sign_in_up", methods=["POST"])
def sign_in_up():
    json_data = request.get_json()
    account = json_data['account']
    password = json_data['password']
    cur = mysql.connection.cursor()
    query = "SELECT account FROM users WHERE account = %s"
    cur.execute(query, (account,))
    rows = cur.fetchall()
    if rows[0]:
        cur.close()
        return jsonify({
        'data': None,
        'code': 200,
        'status': True,
        'msg': 'Sign In successfully',
    })
    cur.execute('insert into users (account, password) values (%s, %s)', (account, password))
    mysql.connection.commit()
    cur.close()
    return jsonify({
        'data': None,
        'code': 200,
        'status': True,
        'msg': 'Sign Up successfully',
    })

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

@app.route("/get_ip_info", methods=["POST"])
def get_ip_api():
    json_data = request.get_json()
    ip = json_data['ip']
    data = get_ip_info(ip)
    return jsonify({
        'data': data,
        'code': 200,
        'status': True,
        'msg': 'get ip successfully',
    })

@app.route("/get_visual_list", methods=["POST"])
def get_visual_list():
    cur = mysql.connection.cursor()
    cur.execute('select * from visual_list')
    data = cur.fetchall()
    data_list = []
    for row in data:
        info_dict = {
            'id': row[0],
            'name': row[1],
            'logo': row[2],
            'url': row[3],
            'description': row[4]
        }
        data_list.append(info_dict)
    cur.close()
    return jsonify({
        'data': data_list,
        'code': 200,
        'status': True,
        'msg': 'get visual list successfully',
    })

if __name__ == "__main__":
    app.run(debug=True)