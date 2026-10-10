from dotenv import load_dotenv

import os

import psycopg

def get_database_connection():
    load_dotenv()
    connection = psycopg.connect(
        host= os.getenv("DB_HOST"),
        port= os.getenv("DB_PORT"),
        dbname= os.getenv("DB_NAME"),
        user= os.getenv("DB_USER"),
        password= os.getenv("DB_PASSWORD")
    )
    return connection