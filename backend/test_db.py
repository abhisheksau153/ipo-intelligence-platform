from src.backend.database import get_database_connection

connection = get_database_connection()

create_table_query = """ CREATE TABLE IF NOT EXISTS ipos(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    company_name text NOT NULL,
    symbol text NOT NULL,
    series text NOT NULL,
    issue_start_date date NOT NULL,
    issue_end_date date NOT NULL,
    issue_size bigint,
    issue_price text,
    source_status text,
    created_at timestamp NOT NULL DEFAULT NOW(),
    updated_at timestamp NOT NULL DEFAULT NOW() 
    )"""
connection.execute(create_table_query)
print("Table created successfully")
connection.commit()
print("Changes committed successfully")
connection.close()
print("Connection closed successfully")