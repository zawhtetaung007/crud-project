from django.db import models
class Player (models.Model):
	name = models.CharField(max_length=400,default="")
	age = models.CharField(max_length=400,default="")
	position = models.CharField(max_length=400,default="")
	club = models.CharField(max_length=400,default="")
	apprances = models.CharField(max_length=400,default="")
	goals = models.CharField(max_length=400,default="")
	assists = models.CharField(max_length=400,default="")

	InfoId = models.ForeignKey('Team',related_name='player_id',on_delete=models.CASCADE)
	class Meta:
		ordering = ('name',)
	def save(self,*args,**kwargs):
		super(Player,self).save(*args,**kwargs)

class Team (models.Model):
	teamName = models.CharField(max_length=400,default="")
	nation = models.CharField(max_length=400,default="")
	league = models.CharField(max_length=400,default="")
	value = models.CharField(max_length=400,default="")
	nation = models.CharField(max_length=400,default="")
	continent = models.CharField(max_length=400,default="")
	class Meta:
		ordering = ('teamName',)
	def save(self,*args,**kwargs):
		super(Team ,self).save(*args,**kwargs)
		