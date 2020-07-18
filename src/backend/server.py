import flask
from flask import request, jsonify
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

def getDetails():
    import specs
    data = specs.execute()

    import json 
    # with open('data.json', 'w') as outfile:
    #     json.dump(data, outfile)
    return True  

@app.route('/specs/api', methods=['GET'])
def home():
    return 'Welcome! I am specs!'

@app.route('/specs/api/data', methods=['GET'])
def fetch_data():
    return getDetails(), 200

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

app.run()
