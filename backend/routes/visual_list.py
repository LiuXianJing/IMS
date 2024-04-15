from application import app
from flask import request, jsonify
from db import mysql

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