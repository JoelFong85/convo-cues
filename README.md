In /backend, run:

```uvicorn app.main:app --reload --port 8000```

In /frontend, run:

```npm run dev```

To migrate dbs, in /backend run:

```python -m app.db.init_db```

this will create any tables in your db that currently don't exist based on models.

## DB related

To enter the db instance, run:

```psql convocues```

To check tables, run:

```\dt```