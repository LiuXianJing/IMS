from application import app
from flask import request, jsonify
from util.token import verify_jwt
from db import mysql

@app.route('/send_chat_message', methods=['POST'])
def send_chat_message():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400
    message = request.json.get('message')
    if not message:
        return jsonify({"error": "Message is missing"}), 400
    json_data = request.get_json()
    name = json_data['name']
    type = json_data['type']
    message = json_data['message']
    logo = json_data['logo']
    cur = mysql.connection.cursor()
    cur.execute('insert into chat (name, type, message, logo) values (%s, %s, %s, %s)', (name, type, message, logo))
    mysql.connection.commit()
    cur.close()
    return jsonify({
        'data': None,
        'code': 200,
        'status': True,
        'msg': 'send chat message successfully'
    })
 
@app.route('/get_chat_messages', methods=['POST'])
@verify_jwt
def get_chat_messages():
    cur = mysql.connection.cursor()
    cur.execute('select * from chat')
    data = cur.fetchall()
    data_list = []
    for row in data:
        info_dict = {
            'id': row[0],
            'name': row[1],
            'type': row[2],
            'message': row[3],
            'logo': row[4],
            'url': row[5],
            'description': row[6],
            'time': row[7],
        }
        data_list.append(info_dict)
    cur.close()
    return jsonify({
        'data': data_list,
        'code': 200,
        'status': True,
        'msg': 'get chat messages successfully'
    })
