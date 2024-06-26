from application import app
from flask import jsonify, request
from util.token import generate_jwt
from db import mysql

@app.route("/sign_in_up", methods=["POST"])
def sign_in_up():
    json_data = request.get_json()
    account = json_data['account']
    password = json_data['password']
    cur = mysql.connection.cursor()
    query = "SELECT account FROM users WHERE account = %s"
    cur.execute(query, (account,))
    rows = cur.fetchall()
    token = generate_jwt({
        'account': account,
    })
    if rows[0]:
        cur.close()
        return jsonify({
        'data': {'token': token},
        'code': 200,
        'status': True,
        'msg': 'Sign In successfully',
    })
    cur.execute('insert into users (account, password) values (%s, %s)', (account, password))
    mysql.connection.commit()
    cur.close()
    return jsonify({
        'data': {'token': token},
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