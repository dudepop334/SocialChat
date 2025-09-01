# admin_tool.py
import requests
response = requests.get("http://localhost:3000/api/posts")
print("Recent Posts:", response.text)
