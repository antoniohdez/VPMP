from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_project.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'app.views.index', name = 'index'),
    url(r'^report/(\d+)', 'app.views.report', name = 'report'),
    url(r'^template', 'app.views.template', name = 'template'),
    url(r'^generate', 'app.views.generate', name = 'generate'),
    url(r'^profile', 'app.views.profile', name = 'profile'),
    url(r'^login', 'app.views.login', name = 'login'),
    url(r'^register', 'app.views.register', name = 'register'),
    url(r'^admin/', include(admin.site.urls)),
)
