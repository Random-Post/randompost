#!/usr/bin/python3

import logging
import os
import threading
from time  import sleep
from flask  import Flask, render_template
from flask  import request
from flask  import jsonify
from flask  import make_response
# from flask  import abort


#Create and configure logger
logging.basicConfig(filename="app.log",
                    format='%(asctime)s %(message)s',
                    filemode='w')

log = logging.getLogger( __name__ )

app = Flask( __name__, template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/posts/top-ten/coronatimes')
def first_static_post():
    return render_template('static_post1.html')

@app.route('/blog', methods=['GET'])
def home():
    return "<h1>Blog Ideas<h1><h2>Thanks for the problems</h2><p>'Thunbam varungal naguga' is my fav quote from thirukkural. Why he says so. Lets read the blog which answers how problems leads to finiancial and mental health development with a recent experiences</p>"

if __name__ == '__main__':
    print("Main started")
    host = '0.0.0.0'
    port = '5000'
    pid = str( os.getpid() )
    log.info( "\n\n" )   # just to make it easier to see the starting point in the log
    log.info( "Main app started with pid: "+ pid )
    print(pid)
    app.run( host, port , debug=True)
    


