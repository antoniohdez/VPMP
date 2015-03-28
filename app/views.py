from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.template import RequestContext, loader
from django.template import Context, Template

# Create your views here.

def template(request):
    template = loader.get_template("general/template.html")
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))

def index(request):
    template = loader.get_template("general/template.html")
    html = loader.render_to_string("views/index.html", {})
    context = RequestContext(request, {
        'content': html
        })
    return HttpResponse(template.render(context))

def report(request):
    template = loader.get_template("general/template.html")
    html = loader.render_to_string("views/report-detail.html", {})
    context = RequestContext(request, {
        'content': html
        })
    return HttpResponse(template.render(context))

def generate(request):
    template = loader.get_template("general/template.html")
    html = loader.render_to_string("views/report-create.html", {})
    context = RequestContext(request, {
        'content': html
        })
    return HttpResponse(template.render(context))

def profile(request):
    template = loader.get_template("general/template.html")
    html = loader.render_to_string("views/profile.html", {})
    context = RequestContext(request, {
        'content': html
        })
    return HttpResponse(template.render(context))

def login(request):
    template = loader.get_template("general/template.html")
    html = loader.render_to_string("views/login.html", {})
    context = RequestContext(request, {
        'content': html
        })
    return HttpResponse(template.render(context))

def register(request):
    template = loader.get_template("general/template.html")
    html = loader.render_to_string("views/register.html", {})
    context = RequestContext(request, {
        'content': html
        })
    return HttpResponse(template.render(context))