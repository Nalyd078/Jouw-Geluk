from flask import Flask, render_template, url_for, request
from urllib.parse import urlparse
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    scheme = urlparse(request.url).scheme
    domain_url = urlparse(request.url).netloc
    return render_template("pages/home.html", scheme=scheme, domain_url=domain_url)

@app.route('/<page>')
def page(page):
    scheme = urlparse(request.url).scheme
    domain_url = urlparse(request.url).netloc
    return render_template("pages/"+page+".html", scheme=scheme, domain_url=domain_url)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
