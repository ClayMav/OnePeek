# Generated by Django 2.2.6 on 2019-11-03 06:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('passage', '0003_auto_20191103_0502'),
    ]

    operations = [
        migrations.AddField(
            model_name='passage',
            name='d_count',
            field=models.BigIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='passage',
            name='l_count',
            field=models.BigIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='question',
            name='n_resp',
            field=models.BigIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='question',
            name='p_resp',
            field=models.BigIntegerField(null=True),
        ),
    ]
