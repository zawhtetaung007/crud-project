# from application.models import Player,PlayerInfo
# from rest_framework.routers import DefaultRouter
# from application.views import PlayerViewSet,PlayerInfoViewSet
# from django.conf.urls import include,url


# router = DefaultRouter()
# router.register(r'Player',PlayerViewSet)
# router.register(r'PlayerInfo',PlayerInfoViewSet)

# urlpatterns = [
# 	url(r'^',include(router.urls))
# ]
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from application import views

urlpatterns = [
    path('player/', views.PlayerList.as_view()),
    path('player/<int:pk>/', views.PlayerDetail.as_view()),
    path('team/', views.TeamList.as_view()),
    path('team/<int:pk>/', views.TeamDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)