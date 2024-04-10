from urllib import request
import json
import socket

def get_ip_info(ip):
    hostname = socket.gethostname()
    ip_address = socket.gethostbyname(hostname)
    new_ip = ip
    if ip is None:
        new_ip = ip_address
    url = 'http://ip-api.com/json' + '/' + new_ip
    response = request.urlopen(url)
    data = json.loads(response.read())
    data["my_hostname"] = hostname
    data["my_ip_address"] = ip_address
    return data