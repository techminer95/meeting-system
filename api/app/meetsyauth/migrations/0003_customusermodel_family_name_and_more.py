# Generated by Django 4.0.1 on 2022-02-24 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meetsyauth', '0002_alter_customusermodel_userid'),
    ]

    operations = [
        migrations.AddField(
            model_name='customusermodel',
            name='family_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='customusermodel',
            name='given_name',
            field=models.CharField(default='Robert', max_length=50),
            preserve_default=False,
        ),
    ]