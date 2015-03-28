from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.template import RequestContext, loader

# Create your views here.

def template(request):
    template = loader.get_template("general/template.html")
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))

def index(request):
    template = loader.get_template("views/index.html")
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))

def report(request):
    template = loader.get_template("views/report-detail.html")
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))

def generate(request):
    template = loader.get_template("views/report-create.html")
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))