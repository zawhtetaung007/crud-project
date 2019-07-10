from application.models import Player,Team
from rest_framework import serializers
class PlayerSerializer(serializers.ModelSerializer):
	class Meta:
		model = Player
		fields = ('id','name','age','position','club','apprances','goals','assists', 'InfoId')

class TeamSerializer(serializers.ModelSerializer):
	player_id = serializers.PrimaryKeyRelatedField(many=True,read_only=True)
	class Meta:
		model = Team
		fields = ('id','teamName','league','value','nation','continent', 'player_id')
