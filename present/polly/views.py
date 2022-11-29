from django.shortcuts import render
from django.http import HttpResponse 
# Create your views here.

def index(request):
    return HttpResponse('''
    
    <html>
    <head>
    <title>Polly</title>
    </head>
    <body>
    <h1>Hello world!</h1>
    </body>
    </html>''')
