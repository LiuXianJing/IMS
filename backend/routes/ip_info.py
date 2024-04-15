from application import app
from flask import request, jsonify
from util.get_ip_info import get_ip_info
from db import mysql

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