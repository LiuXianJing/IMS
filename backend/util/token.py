from flask import request
import jwt
import datetime
from functools import wraps
 
SECRET_KEY = 'ims-vfd-secret-key'

def generate_jwt(payload):
    payload['exp'] = datetime.datetime.utcnow() + datetime.timedelta(days=1)
    token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
    return token

def verify_jwt(func):
    @wraps(func)
    def decorated_function(*args, **kwargs):
        token = (request.headers.get('Authorization') or '').replace('Bearer ', '')
        if token:
            try:
                payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
                return func(*args, **kwargs)
            except jwt.ExpiredSignatureError:
                return {'code': 401, 'msg': 'Token expired.'}, 401
            except jwt.InvalidTokenError:
                return {'code': 401, 'msg': 'Invalid token. Please get a new token'}, 401
        else:
            return {'code': 401, 'msg': 'Token is missing'}, 401
 
    return decorated_function