# Generated by Django 4.0.3 on 2022-05-12 16:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_automobilevo_import_href'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='import_href',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='import_name',
        ),
        migrations.RemoveField(
            model_name='salesrecord',
            name='automobile',
        ),
        migrations.AddField(
            model_name='salesrecord',
            name='automobiles',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='auto', to='sales_rest.automobilevo'),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='customer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='customers', to='sales_rest.customer'),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='salesperson',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='salespersons', to='sales_rest.salesperson'),
        ),
    ]
