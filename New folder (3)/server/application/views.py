from application.models import Player,Team
from application.serializers import PlayerSerializer,TeamSerializer
from rest_framework import viewsets
from rest_framework import generics
# class PlayerViewSet(viewsets.ModelViewSet):
# 	queryset = Player.objects.all()
# 	serializers_class = PlayerSerializer

# class PlayerInfoViewSet(viewsets.ModelViewSet):
# 	queryset = PlayerInfo.objects.all()
# 	serializers_class = PlayerInfoSerializer

class PlayerList(generics.ListCreateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class TeamList(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class TeamDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
 