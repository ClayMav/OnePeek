# Generated by Django 2.2.6 on 2019-11-03 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('passage', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='passage',
            name='time_period',
            field=models.DateField(null=True),
        ),
    ]
