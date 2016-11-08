from flask import Flask, jsonify, request
import pg
app = Flask('app')

db = pg.DB(dbname="ajaxpractic_db")

@app.route('/')
def home():
    # this sends the contents of static/index.html
    return app.send_static_file('index.html')

@app.route('/search')
def search():
    # this sends the contents of static/results.json
    # return app.send_static_file('results.json')
    queryData = request.args['search']
    results = db.query('select * from website where title ilike $1', '%' + queryData + '%').dictresult()
    return jsonify(results)

app.run(debug=True)
