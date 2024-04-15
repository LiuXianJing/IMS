from application import app
from flask_cors import CORS

from routes.users import *
from routes.ip_info import *
from routes.chat import *
from routes.visual_list import *

CORS(app)

@app.route('/', methods=['GET'])
def index():
    return 'Hello World!'

if __name__ == "__main__":
    app.run(debug=True, port=5000)