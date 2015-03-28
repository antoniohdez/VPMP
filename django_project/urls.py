from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_project.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'app.views.index', name = 'index'),
    url(r'^report', 'app.views.report', name = 'report'),
    url(r'^template', 'app.views.template', name = 'template'),
    url(r'^generate', 'app.views.generate', name = 'generate'),
    url(r'^admin/', include(admin.site.urls)),
)
