pip3 install flask

export PATH=/Users/ak/Library/Python/3.9/bin:$PATH

flask run

curl -X POST -H "Content-Type: application/json" -d '{"author": "John", "content": "Hello!"}' http://localhost:5000/posts
