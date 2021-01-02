from flask import Flask, render_template, request, redirect, url_for
from imageai.Prediction import ImagePrediction
import os

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
      fname = request.form['file'];
      execution_path = os.getcwd()

      prediction = ImagePrediction()
      prediction.setModelTypeAsResNet()
      prediction.setModelPath(os.path.join(execution_path, "static/resnet50_weights_tf_dim_ordering_tf_kernels.h5"))
      prediction.loadModel()

      predictions, probabilities = prediction.predictImage(fname, result_count=10 )

      return render_template('detect.html', predict=predictions, eachProb=probabilities)
    
    return render_template('index.html')



